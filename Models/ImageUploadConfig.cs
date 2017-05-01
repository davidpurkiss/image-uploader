using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ImageUploader.Model.Upload
{
    public class ImageUploadConfig : IIdentifiable
    {
        public string Id { get; set; }

        public string Key { get; set; }

        public string Description { get; set; }

        public AspectRatio AspectRatio { get; set; }

        public int ViewMode { get; set; }

        public bool IncludeOriginalSize { get; set; }

        public List<Size> Sizes { get; set; }

        public CropOptions CropOptions { get; set; }

        public bool EnableCompression { get; set; }

        public int CompressionQuality { get; set; }
        
        public ImageUploadConfig()
        {
           
        }

        public static ImageUploadConfig GetDefualt()
        {
            ImageUploadConfig config = new ImageUploadConfig();
            config.IncludeOriginalSize = true;
            config.CropOptions = new CropOptions();
            config.AspectRatio = AspectRatio.Four_to_Three;
            config.ViewMode = 2;
            config.CompressionQuality = 70;
            config.EnableCompression = true;

            config.Sizes = new List<Size>();
            config.Sizes.Add(new Size("large", 320, 180));
            config.Sizes.Add(new Size("medium", 160, 90));
            config.Sizes.Add(new Size("small", 80, 45));

            return config;
        }
    }

    public class CropOptions
    {
        public bool Guides { get; set; }

        public bool Center { get; set; }

        public CropOptions()
        {
            Guides = false;
            Center = false;
        }
    }

    public class Size
    {
        public string Key { get; set; }

        public int Width { get; set; }

        public int Height { get; set; }

        public Size(string key, int width, int height)
        {
            this.Width = width;
            this.Height = height;
            this.Key = key;
        }
    }
}
