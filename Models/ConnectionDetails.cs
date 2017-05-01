using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ImageUploader.Data
{
    public class ConnectionDetails
    {
        public string EndpointUri { get; set; }

        public string PrimaryKey { get; set; }

        public string DatabaseName { get; set; }

        public string CollectionName { get; set; }

        public ConnectionDetails(string endpointUrl, string primaryKey, string databaseName, string collectionName)
        {
            this.EndpointUri = endpointUrl;
            this.PrimaryKey = primaryKey;
            this.DatabaseName = databaseName;
            this.CollectionName = collectionName;
        }
    }
}
