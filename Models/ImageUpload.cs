using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ImageUploader.Model.Upload
{
    public class ImageUpload
    {
        public string Content { get; set; }

        public ImageUploadConfig Config { get; set; }
    }
}
