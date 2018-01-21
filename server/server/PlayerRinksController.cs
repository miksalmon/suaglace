using System.Collections.Generic;
using System.Web.Http;
using Newtonsoft.Json;

namespace server
{
    public class PlayerrinksController : ApiController
    {

        // GET api/playerrinks/paul
        public string Get([FromUri] string id)
        {
            foreach (KeyValuePair<string, List<User>> item in RinkManager.CurrentPlayers)
            {
                List<User> players = item.Value;
                if (players.Exists(player => player.Name == id))
                {
                    return item.Key;
                }
            }

            return null;
        }

        public string Get()
        {
            return "";
        }
    }
}
