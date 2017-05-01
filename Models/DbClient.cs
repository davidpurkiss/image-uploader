using Microsoft.Azure.Documents;
using Microsoft.Azure.Documents.Client;
using Newtonsoft.Json.Linq;
using NLog;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Net;
using System.Threading.Tasks;
using System.Web;
using LinqKit;
using Microsoft.Azure.Documents.Linq;

namespace ImageUploader.Data
{
    public class DbClient : IDisposable
    {
        public ConnectionDetails ConnectionDetails { get; }
        private DocumentClient client;

        private ILogger logger = LogManager.GetCurrentClassLogger();


        public DbClient(ConnectionDetails connectionDetails)
        {
            this.ConnectionDetails = connectionDetails;
            ConnectionPolicy cp = new ConnectionPolicy();
            cp.RequestTimeout = TimeSpan.FromSeconds(5);
            this.client = new DocumentClient(new Uri(connectionDetails.EndpointUri), connectionDetails.PrimaryKey, cp);

            Init();

        }

        public async Task<Doc<T>> Get<T>(string id)
        {
            var response = await client.ReadDocumentAsync(GetDocumentUri(id));

            if (response.StatusCode == HttpStatusCode.OK)
            {
                Doc<T> doc = new Doc<T>(id, response.Resource.GetPropertyValue<T>("value"));

                return doc;
            }
            else
                return null;
        }

        public IEnumerable<Doc<T>> Get<T>(IEnumerable<string> ids)
        {
            var query = client.CreateDocumentQuery<Doc<T>>(GetDocumentCollectionUri())
               .Where(d => d.type == Doc.GetDocumentType(typeof(T)) && ids.Contains(d.id));

            return query.AsEnumerable();
        }

        public async Task<Docs<T>> Find<T>(Expression<Func<T, bool>> predicate = null, string continuationToken = null, int? maxItems = null)
        {
            Expression<Func<Doc<T>, bool>> queryExp = d => d.type == Doc.GetDocumentType(typeof(T));

            if (predicate != null)
            {
                queryExp = d => d.type == Doc.GetDocumentType(typeof(T)) && predicate.Invoke(d.value);
                queryExp = queryExp.Expand();
            }

            var query = client.CreateDocumentQuery<Doc<T>>(GetDocumentCollectionUri(), GetOtions(continuationToken, maxItems))
                .Where(queryExp)
                .AsDocumentQuery();

            var result = await query.ExecuteNextAsync<Doc<T>>();

            return new Docs<T>(result);
        }

        public async Task<Docs<T>> Find<T>(IEnumerable<string> ids, Expression<Func<T, bool>> predicate = null, string continuationToken = null, int? maxItems = null)
        {
            Expression<Func<Doc<T>, bool>> queryExp = d => d.type == Doc.GetDocumentType(typeof(T)) && ids.Contains(d.id);

            if (predicate != null)
            {
                queryExp = d => d.type == Doc.GetDocumentType(typeof(T)) && predicate.Invoke(d.value);
            }

            var query = client.CreateDocumentQuery<Doc<T>>(GetDocumentCollectionUri())
                .AsExpandable()
               .Where(queryExp)
               .AsDocumentQuery();

            var result = await query.ExecuteNextAsync<Doc<T>>();

            return new Docs<T>(result);
        }


        public async Task<Doc<T>> Create<T>(T document)
        {
            var doc = new Doc<T>(Guid.NewGuid().ToString(), document);
            var response = await client.CreateDocumentAsync(GetDocumentCollectionUri(), doc);

            if (response.StatusCode == HttpStatusCode.Created)
                return doc;
            else
                return null;
        }

        public async Task Update(Doc document)
        {
            await client.ReplaceDocumentAsync(GetDocumentUri(document.id), document);
        }

        public async Task Upsert(Doc document)
        {
            await client.UpsertDocumentAsync(GetDocumentUri(document.id), document);
        }

        public async Task Delete(Doc document)
        {
            await Delete(document.id);
        }

        public async Task Delete(string id)
        {
            await client.DeleteDocumentAsync(GetDocumentUri(id));
        }

        #region General

        private Uri GetDocumentUri(string id)
        {
            var uri = UriFactory.CreateDocumentUri(ConnectionDetails.DatabaseName, ConnectionDetails.CollectionName, id);
            return uri;
        }

        private Uri GetDocumentCollectionUri()
        {
            var uri = UriFactory.CreateDocumentCollectionUri(ConnectionDetails.DatabaseName, ConnectionDetails.CollectionName);
            return uri;
        }

        private void Init()
        {
            CreateDatabaseIfNotExists(ConnectionDetails.DatabaseName).ConfigureAwait(true);

            CreateDocumentCollectionIfNotExists(ConnectionDetails.DatabaseName, ConnectionDetails.CollectionName).ConfigureAwait(true);
        }

        private async Task CreateDatabaseIfNotExists(string databaseName)
        {
            // Check to verify a database with the id=FamilyDB does not exist
            try
            {
                await this.client.ReadDatabaseAsync(UriFactory.CreateDatabaseUri(databaseName));
                logger.Info("Found {0}", databaseName);
            }
            catch (DocumentClientException de)
            {
                // If the database does not exist, create a new database
                if (de.StatusCode == HttpStatusCode.NotFound)
                {
                    await this.client.CreateDatabaseAsync(new Database { Id = databaseName });
                    logger.Info("Created {0}", databaseName);
                }
                else
                {
                    throw;
                }
            }
        }

        private async Task CreateDocumentCollectionIfNotExists(string databaseName, string collectionName)
        {
            try
            {
                await this.client.ReadDocumentCollectionAsync(UriFactory.CreateDocumentCollectionUri(databaseName, collectionName));
                logger.Info("Found {0}", collectionName);
            }
            catch (DocumentClientException de)
            {
                // If the document collection does not exist, create a new collection
                if (de.StatusCode == HttpStatusCode.NotFound)
                {
                    DocumentCollection collectionInfo = new DocumentCollection();
                    collectionInfo.Id = collectionName;

                    // Configure collections for maximum query flexibility including string range queries.
                    collectionInfo.IndexingPolicy = new IndexingPolicy(new RangeIndex(DataType.String) { Precision = -1 });

                    // Here we create a collection with 400 RU/s.
                    await this.client.CreateDocumentCollectionAsync(
                        UriFactory.CreateDatabaseUri(databaseName),
                        collectionInfo,
                        new RequestOptions { OfferThroughput = 400 });

                    logger.Info("Created {0}", collectionName);
                }
                else
                {
                    throw;
                }
            }
        }

        private static FeedOptions GetOtions(string continuationToken, int? maxItems)
        {
            FeedOptions options = null;

            if (continuationToken != null || maxItems != null)
            {
                options = new FeedOptions();
                if (maxItems.HasValue)
                    options.MaxItemCount = maxItems.Value;

                if (continuationToken != null)
                    options.RequestContinuation = continuationToken;
            }

            return options;
        }

        public void Dispose()
    {
      this.client.Dispose();
    }

    #endregion
  }
}