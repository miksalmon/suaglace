using System.Collections.Generic;
using System.Web.Http;
using Newtonsoft.Json;

namespace server
{
    public class PlayersController : ApiController
    {
        // GET api/players 
        // Gets all players
        public string Get()
        {
            var players = UserManager.CurrentUsers;
            return JsonConvert.SerializeObject(players);
        }

        // GET api/players/5 
        public string Get([FromUri] string id)
        {
            List<User> players;
            RinkManager.CurrentPlayers.TryGetValue(id, out players);
            if(players == null)
            {
                players = new List<User>();
            }
            return JsonConvert.SerializeObject(players);
        }


    }
}
