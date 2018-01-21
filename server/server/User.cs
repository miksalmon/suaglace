using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace server
{
    class User
    {
        private const string DEFAULT_FAVORITE_RINK = "No favorite rink";

        public string Name { get; private set; }
        public string PreferedPosition { get; private set; }
        public string FavoriteRink { get; private set; }
        public int Id { get; set; } 

        public User(string name, string preferedPosition, string favoriteRink)
        {
            Name = name;
            PreferedPosition = preferedPosition;
            FavoriteRink = String.IsNullOrWhiteSpace(favoriteRink) ? DEFAULT_FAVORITE_RINK : favoriteRink;
        }
    }
}
