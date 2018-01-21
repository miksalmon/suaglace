using Microsoft.Owin.Hosting;
using System;
using System.Net.Http;
using SdkHelper;

namespace server
{
    public class Program
    {
        static void Main()
        {
            // SdkAssemblyLoader.Start();
            string baseAddress = "http://localhost:9000/";

            // Start OWIN host 
            using (WebApp.Start<Startup>(url: baseAddress))
            {
                Console.ReadLine();
            }
            // SdkAssemblyLoader.Stop();
        }
    }
}