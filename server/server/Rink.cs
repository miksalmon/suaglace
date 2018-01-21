using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace server
{    
    class Rink
    {
        public bool Ouvert { get; set; }
        public string Id { get; set; }
        public string Nom { get; set; }
        public string Parc { get; set; }
        public bool Resurface { get; set; }
        public string Type { get; set; }
        public bool Arrose { get; set; }
        public string Arrondissement { get; set; }
        public string Condition { get; set; }
        public bool Deblaye { get; set; }
        public DateTime DateMaj { get; set; }
        public double Lat { get; set; }
        public double Lng { get; set; }
    }
}
