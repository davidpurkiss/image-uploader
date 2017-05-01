using ImageUploader.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;

namespace ImageUploader.Web.Controllers
{
    public abstract class BaseCrudController<T> : BaseController
    {
        public async Task<Docs<T>> BaseList()
        {
            try
            {
                var client = GetDbClient();

                return await client.Find<T>();
            }
            catch (Exception ex)
            {
                Logger.Error(ex, "Failed to list {0}", GetTypeName());
                throw ex;
            }
        }

        public async Task<Doc<T>> BaseGet(string id)
        {
            try
            {
                var client = GetDbClient();

                return await client.Get<T>(id);
            }
            catch (Exception ex)
            {
                Logger.Error(ex, "Failed to get {0} with id {1}", GetTypeName(), id);
                throw ex;
            }
        }

        public async Task<Doc<T>> BaseCreate(T obj)
        {
            try
            {
                var client = GetDbClient();

                return await client.Create<T>(obj);
            }
            catch (Exception ex)
            {
                Logger.Error(ex, "Failed to create {0}", GetTypeName());
                throw ex;
            }
        }

        public async Task BaseUpdate(string id, T obj)
        {
            try
            {

                var client = GetDbClient();

                await client.Update(new Doc<T>(id, obj));
            }
            catch (Exception ex)
            {
                Logger.Error(ex, "Failed to update {0}", GetTypeName());
                throw ex;
            }
        }

        public async Task BaseDelete(string id)
        {
            try
            {

                var client = GetDbClient();

                await client.Delete(id);
            }
            catch (Exception ex)
            {
                Logger.Error(ex, "Failed to delete {0}", GetTypeName());
                throw ex;
            }
        }

        protected string GetTypeName()
        {
            return typeof(T).Name;
        }
    }
}