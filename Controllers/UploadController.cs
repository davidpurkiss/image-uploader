using ImageUploader.Model.Upload;
using ImageProcessor;
using ImageProcessor.Imaging.Formats;
using Microsoft.Azure;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Blob;
using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace ImageUploader.Web.Controllers
{
    [RoutePrefix("api/upload")]
    public class UploadController : BaseController
    {

        [HttpPost]
        [Route("image/{container}/{key}")]
        public IEnumerable<Blob> UploadImage(string container, string key, ImageUpload imageUpload)
        {
            List<Blob> blobs = new List<Blob>();
            try
            {
                string[] base64 = imageUpload.Content.Split(new char[] { ',' });
                var image = Convert.FromBase64String(base64[1]);

                var blobContainer = GetContainer(container);

                ISupportedImageFormat compressionFormat = new JpegFormat { Quality = imageUpload.Config.CompressionQuality };

                foreach (var size in imageUpload.Config.Sizes)
                {
                    using (MemoryStream outStream = new MemoryStream())
                    {
                        ImageFactory imageFactory = null;
                        try
                        {
                            imageFactory = new ImageFactory();

                            imageFactory = imageFactory.Load(image)
                                .Resize(new System.Drawing.Size(size.Width, size.Height));

                            if (imageUpload.Config.EnableCompression)
                                imageFactory = imageFactory.Format(compressionFormat);

                            imageFactory.Save(outStream);

                            var blob = blobContainer.GetBlockBlobReference($"{key}_{Guid.NewGuid().ToString()}_{size.Key}.{imageFactory.CurrentImageFormat.DefaultExtension}");
                            blob.UploadFromStream(outStream);

                            blobs.Add(new Blob(key, size.Key, blob.Uri.OriginalString));
                        }
                        finally
                        {
                            if (imageFactory != null)
                                imageFactory.Dispose();
                        }
                    }
                }

            }
            catch (Exception ex)
            {
                Logger.Error(ex, "Failed to upload image container: {0}, key: {2}", container, key);
                throw ex;
            }

            return blobs;

        }

        [HttpDelete, Route("{container}")]
        public void RemoveBlobs(string container, IEnumerable<Blob> blobs)
        {
            var blobContainer = GetContainer(container);

            foreach (var blob in blobs)
            {
                var azureBlob = blobContainer.GetBlockBlobReference(blob.Url);
                azureBlob.DeleteIfExists();
            }

        }

        private static CloudBlobContainer GetContainer(string container)
        {
            CloudStorageAccount storageAccount = CloudStorageAccount.Parse(CloudConfigurationManager.GetSetting("StorageConnectionString"));
            CloudBlobClient blobClient = storageAccount.CreateCloudBlobClient();
            CloudBlobContainer blobContainer = blobClient.GetContainerReference(container);

            if (blobContainer.CreateIfNotExists())
            {
                BlobContainerPermissions permissions = blobContainer.GetPermissions();
                permissions.PublicAccess = BlobContainerPublicAccessType.Container;
                blobContainer.SetPermissions(permissions);
            }

            return blobContainer;
        }
    }
}
