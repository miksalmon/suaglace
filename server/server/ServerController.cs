using System.Collections.Generic;
using System.Web.Http;
using Newtonsoft.Json;

namespace server
{
    public class ServerController : ApiController
    {
        // GET api/server 
        // Gets all rinks
        public string Get()
        {
            var rinkCollection = RinkCollection.GetCollection();
            return JsonConvert.SerializeObject(rinkCollection);
        }

        // GET api/server/5 
        public string Get([FromUri] string id)
        {
            var rinkCollection = RinkCollection.GetCollection();
            var rink = rinkCollection.Find(r => r.Id == id);
            return JsonConvert.SerializeObject(rink);
        }
    }
}