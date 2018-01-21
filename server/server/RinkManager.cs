using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace server
{
    static class RinkManager
    {
        static public List<Rink> Rinks { get; private set; }

        static public Dictionary<string, List<User>> CurrentPlayers { get; private set; }

        static RinkManager()
        {
            Rinks = RinkCollection.GetCollection();
            CurrentPlayers = new Dictionary<string, List<User>>();
            Rinks.ForEach(rink => CurrentPlayers.Add(rink.Id, new List<User>()));            
        }

        static public void JoinRink(User player, string rinkId)
        {
            List<User> players;
            CurrentPlayers.TryGetValue(rinkId, out players);
            if(players != null)
            {
                players.Add(player);
                Console.WriteLine("Added player {0} to rink {1}", player.Id, rinkId);
            }            
        }

        static public void LeaveRink(User playerToRemove, string rinkId)
        {
            List<User> players;
            CurrentPlayers.TryGetValue(rinkId, out players);
            if(players != null)
            {
                players.RemoveAll(player => player.Id == playerToRemove.Id);
                Console.WriteLine("Removed player {0} from rink {1}", playerToRemove.Id, rinkId);
            }
        }
    }
}
