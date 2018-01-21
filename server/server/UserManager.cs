using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace server
{
    static class UserManager
    {
        static public List<User> CurrentUsers { get; private set; }
        static public int UniqueId { get; private set; } = 0;

        static UserManager ()
        {
            CurrentUsers = new List<User>();
        }


        static public void AddUser(User user)
        {
            user.Id = UniqueId++;
            CurrentUsers.Add(user);
        }

        static public void  RemoveUser(User userToRemove)
        {
            CurrentUsers.RemoveAll(user => user.Id == userToRemove.Id);
        }
    }
}
