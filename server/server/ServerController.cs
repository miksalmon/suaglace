using System.Collections.Generic;
using System.Web.Http;

namespace OwinSelfhostSample
{
    public class ServerController : ApiController
    {
        // GET api/server 
        // Gets all rinks
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/server/5 
        public string Get(int id)
        {
            return "value";
        }
    }
}