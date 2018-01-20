using Microsoft.Owin.Hosting;
using System;
using System.Windows;
using System.Net.Http;
using System.Threading;
using SdkHelper;
using Genetec.Sdk;

namespace OwinSelfhostSample
{
    enum Commands
    {
        Set
    }

    public class Program
    {
        #region Fields

        private static ManualResetEvent quiteResetEvent = new ManualResetEvent(false);

        /// <summary>
        /// The Engine of the Sdk.
        /// </summary>
        private static readonly Engine sdkEngine = new Engine();

        // Password of the said User.
        static string Password = "2KvhYcdy";

        // This is the server of the Directory.
        static string Server = "52.226.39.161";

        // This is the Username for the connection. Must be a User in the directory.
        static string Username = "User020";

        #endregion

        static void Main()
        {
            string baseAddress = "http://localhost:9000/";

            // Start OWIN host 
            using (WebApp.Start<Startup>(url: baseAddress))
            {
                /*
                // Create HttpCient and make a request to api/values 
                HttpClient client = new HttpClient();

                var response = client.GetAsync(baseAddress + "api/server").Result;

                Console.WriteLine(response);
                Console.WriteLine(response.Content.ReadAsStringAsync().Result);
                Console.ReadLine();*/

                SdkAssemblyLoader.Start();

                Console.CancelKeyPress += (sender, eArgs) => {
                    Quit();
                    eArgs.Cancel = true;
                };

                RegisterToEngineEvents();

                Login();

                Work();

                quiteResetEvent.WaitOne();
            }


            SdkAssemblyLoader.Stop();
        }

        private static void RegisterToEngineEvents()
        {
            sdkEngine.LoggedOn += OnLoggedOn;
            sdkEngine.LoggedOff += OnLoggedOff;
            sdkEngine.LogonFailed += OnLogonFailed;
        }

        private static void Login()
        {
            Console.WriteLine("Start logon sequence...");
            sdkEngine.LogOn(Server, Username, Password);
        }

        private static void Work()
        {
            if (sdkEngine.IsConnected)
            {
                var userChoice = "";
                do
                {
                    string command;
                    string peopleCount;
                    string rinkGuid;
                    Console.WriteLine("set count rink");
                    string userCommand = Console.ReadLine();

                    string[] commandParams = userCommand.Split(' ');
                    command = commandParams[0];
                    peopleCount = commandParams[1];
                    rinkGuid = commandParams[2];

                    if (command == Commands.Set.ToString())
                    {
                        //SDK call to set people count 
                    }
                    else
                    {
                        Console.WriteLine("Unknown command");
                    }

                    Console.WriteLine();


                } while (userChoice?.Trim().ToLower() != "q");

                Quit();
            }
            else
            {
                Console.BackgroundColor = ConsoleColor.DarkRed;
                Console.WriteLine("Not connected!");
            }
        }

        private static void OnLogonFailed(object sender, LogonFailedEventArgs e)
        {
            Console.BackgroundColor = ConsoleColor.DarkRed;
            Console.WriteLine("Logon failed!");
        }

        private static void OnLoggedOff(object sender, LoggedOffEventArgs e)
        {
            Console.BackgroundColor = ConsoleColor.DarkBlue;
            Console.WriteLine("Logged Off!");
        }

        private static void OnLoggedOn(object sender, LoggedOnEventArgs e)
        {
            Console.BackgroundColor = ConsoleColor.DarkGreen;
            Console.WriteLine($"Logged On! {sdkEngine.Client.LoggedUserGuid}");
            Console.BackgroundColor = ConsoleColor.Black;
        }

        private static void Quit()
        {
            quiteResetEvent.Set();
        }
    }
}