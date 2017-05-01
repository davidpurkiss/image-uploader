using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ImageUploader.Model
{
    public interface IIdentifiable
    {
        string Id { get; set; }
    }
}
