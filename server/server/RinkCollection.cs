using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace server
{

    class RinkCollection
    {
        private static RinkCollection Instance { get; set; }

        public List<Rink> Collection { get; set; }

        private RinkCollection()
        {
            Instance = null;
            Collection = null;
        }

        public static RinkCollection GetInstance()
        {
            if (Instance == null)
            {
                Instance = new RinkCollection();
            }

            return Instance;
        }

        public void Initialize()
        {
            string json = File.ReadAllText(@"data.json");
            Collection = JsonConvert.DeserializeObject<List<Rink>>(json);
        }
    }
}
