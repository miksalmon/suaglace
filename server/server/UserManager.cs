using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace server
{
    class UserManager
    {
        public List<User> CurrentUsers { get; private set; }
        public int UniqueId { get; private set; } = 0;

        public UserManager()
        {

        }

        public void AddUser(User user)
        {
            user.Id = UniqueId++;
            CurrentUsers.Add(user);
        }

        public void  RemoveUser(User userToRemove)
        {
            CurrentUsers.RemoveAll(user => user.Id == userToRemove.Id);
        }
    }
}
