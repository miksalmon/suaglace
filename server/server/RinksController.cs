using System.Web.Http;
using Newtonsoft.Json;
using System;

namespace server
{
    public class RinksController : ApiController
    {
        // POST api/rinks/5 
        public void Post([FromUri] string id, [FromBody] string userData)
        {
            User user;
            if (userData != null)
            {
                user = JsonConvert.DeserializeObject<User>(userData);

            }
            else
            {
                user = new User("Samuel Chapleau", "Gardien", "Parc Beaubien");
            }
            Console.WriteLine("AddUser: " + userData);
            UserManager.AddUser(user);
            Console.WriteLine("JoinRink: " + id);
            RinkManager.JoinRink(user, id);
        }

        // DELETE api/rinks/5 
        public void Delete([FromUri] string id, [FromBody] string userData)
        {
            User user = JsonConvert.DeserializeObject<User>(userData);
            Console.WriteLine("RemoveUser: " + userData);
            UserManager.RemoveUser(user);
            Console.WriteLine("LeaveRink: " + id);
            RinkManager.LeaveRink(user, id);
        }
    }
}
