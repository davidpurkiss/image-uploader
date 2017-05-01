using ImageUploader.Data;
using ImageUploader.Model.Upload;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace ImageUploader.Web.Controllers
{
    [RoutePrefix("api/image-upload-config")]
    public class ImageUploadConfigController : BaseCrudController<ImageUploadConfig>
    {
        [HttpGet]
        [Route("")]
        public async Task<Docs<ImageUploadConfig>> List()
        {
            return await BaseList();
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<Doc<ImageUploadConfig>> Get(string id)
        {
            return await BaseGet(id);
        }

        [HttpGet]
        [Route("key/{key}")]
        public async Task<Doc<ImageUploadConfig>> GetByKey(string key)
        {
            try
            {
                var client = GetDbClient();

                return (await client.Find<ImageUploadConfig>(c => c.Key == key)).Values.FirstOrDefault();
            }
            catch (Exception ex)
            {
                Logger.Error(ex, "Failed to get {0} with key {1}", GetTypeName(), key);
                throw ex;
            }
        }

        [HttpPost]
        [Route("")]
        public async Task<Doc<ImageUploadConfig>> Create(ImageUploadConfig config)
        {
            return await BaseCreate(config);
        }

        [HttpPut]
        [Route("{id}")]
        public async Task Update(string id, ImageUploadConfig config)
        {
            await BaseUpdate(id, config);
        }

        [HttpDelete]
        [Route("{id}")]
        public async Task Delete(string id)
        {
            await BaseDelete(id);
        }

        [HttpGet]
        [Route("default")]
        public Doc<ImageUploadConfig> Default()
        {
            return new Doc<ImageUploadConfig>(null, ImageUploadConfig.GetDefualt());
        }

    }
}
