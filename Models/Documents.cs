using Microsoft.Azure.Documents.Client;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ImageUploader.Data
{
    public class Docs<T>
    {
        public virtual IEnumerable<Doc<T>> Values { get; }

        public string ContinuationToken { get; }

        public Docs(IEnumerable<Doc<T>> values, string continuationToken)
        {
            this.Values = values;
            this.ContinuationToken = continuationToken;
        }

        public Docs(FeedResponse<Doc<T>> response)
        {
            this.Values = response;
            this.ContinuationToken = response.ResponseContinuation;
        }
    }

}