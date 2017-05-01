using ImageUploader.Data;
using NLog;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Configuration;
using System.Web.Http;

namespace ImageUploader.Web.Controllers
{
    public class BaseController : ApiController
    {

        protected Logger Logger = LogManager.GetCurrentClassLogger();

        protected DbClient GetDbClient()
        {
            ConnectionDetails connectionDetails = new ConnectionDetails(
              WebConfigurationManager.AppSettings["db-endpoint-uri"],
              WebConfigurationManager.AppSettings["db-primary-key"],
              WebConfigurationManager.AppSettings["db-database-name"],
              WebConfigurationManager.AppSettings["db-collection-name"]
              );

            return new DbClient(connectionDetails);
        }

    }
}
