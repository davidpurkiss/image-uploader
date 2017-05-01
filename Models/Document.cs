using ImageUploader.Model;
using Microsoft.Azure.Documents;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ImageUploader.Data
{
    public class Doc
    {
        public string id { get; }

        public string type { get; }

        public IReadOnlyList<string> baseTypes { get; protected set; }

        public virtual object value { get; }

        public string partitionKey { get; set; }

        public Doc(string id, string type, object value)
        {
            this.id = id;
            this.type = type;
            this.value = value;
            this.baseTypes = new List<string>();

            this.partitionKey = this.type;
        }

        [JsonConstructor]
        public Doc(string id, string partitionKey, string type, object value) : this(id, type, value)
        {
            this.partitionKey = partitionKey;
        }

        public static string GetDocumentType(Type type)
        {
            return type.FullName;
        }
    }

    public class Doc<T> : Doc
    {
        public Doc(string id, T value) : base(id, GetDocumentType(typeof(T)), value)
        {
            this.baseTypes = new List<string>(GetBaseTypeNames(typeof(T)));
        }

        [JsonConstructor]
        public Doc(string id, string partitionKey, T value) : this(id, value)
        {
            this.partitionKey = partitionKey;
        }

        public new T value
        {
            get
            {
                if (base.value is IIdentifiable)
                    (base.value as IIdentifiable).Id = this.id;
                return (T)base.value;
            }
        }

        private IEnumerable<string> GetBaseTypeNames(Type type)
        {
            List<string> baseTypes = new List<string>();

            if (type.BaseType != null)
                GetBaseTypeNames(type.BaseType, baseTypes);

            return baseTypes;
        }

        private IEnumerable<string> GetBaseTypeNames(Type type, List<string> baseTypes)
        {
            if (type.FullName != "System.Object" && type.FullName != "System.String")
            {
                baseTypes.Add(type.FullName);

                if (type.BaseType != null && type.BaseType.IsClass)
                    GetBaseTypeNames(type.BaseType, baseTypes);
            }

            return baseTypes;
        }


    }
}