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

    static class RinkCollection
    {

        static public List<Rink> Collection { get; set; } = null;

        static public List<Rink> GetCollection()
        {
            if (Collection == null)
            {
                string json = File.ReadAllText(@"data.json");
                Collection = JsonConvert.DeserializeObject<List<Rink>>(json);
            }

            return Collection;
        }
    }
}
