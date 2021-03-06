﻿using Microsoft.Owin.Hosting;
using System;
using System.Net.Http;

namespace server
{
    public class Program
    {
        static void Main()
        {
            string baseAddress = "http://*:5000/";

            // Start OWIN host 
            using (WebApp.Start<Startup>(url: baseAddress))
            {
                var rinkCollection = RinkCollection.GetCollection();
                Console.ReadLine();
            }
        }
    }
}