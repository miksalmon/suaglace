using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace server
{
    class RinkManager
    {
        public List<Rink> Rinks { get; private set; }

        public Dictionary<string, List<User>> CurrentPlayers { get; private set; }

        public RinkManager()
        {
            Rinks = RinkCollection.GetCollection();
            Rinks.ForEach(rink => CurrentPlayers.Add(rink.Id, new List<User>()));
            CurrentPlayers = new Dictionary<string, List<User>>();
        }

        public void JoinRink(User player, string rinkId)
        {
            List<User> players;
            CurrentPlayers.TryGetValue(rinkId, out players);
            players.Add(player);
        }
    }
}
