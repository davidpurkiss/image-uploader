using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ImageUploader.Model.Upload
{
    public class Blob
    {
        public string Key { get; set; }

        public string SubKey { get; set; }

        public string Url { get; set; }

        public Blob(string key, string subKey, string url)
        {
            this.Key = key;
            this.SubKey = subKey;
            this.Url = url;
        }
    }
}
