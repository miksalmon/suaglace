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
            var players = UserManager.CurrentUsers;
            var player = players.Find(p => p.Id == int.Parse(id));
            return JsonConvert.SerializeObject(player);
        }


    }
}
