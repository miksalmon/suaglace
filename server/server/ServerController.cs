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
            var rinkCollection = RinkCollection.GetInstance();
            return JsonConvert.SerializeObject(rinkCollection.Collection);
        }

        // GET api/server/5 
        public string Get([FromUri] string id)
        {
            var rinkCollection = RinkCollection.GetInstance();
            var rink = rinkCollection.Collection.Find(r => r.Id == id);
            return JsonConvert.SerializeObject(rink);
        }
    }
}