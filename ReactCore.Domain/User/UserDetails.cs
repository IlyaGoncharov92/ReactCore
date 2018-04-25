using System.Collections.Generic;

namespace ReactCore.Domain.User
{
    public class UserDetails : DomainBase
    {
        public UserDetails()
        {
        }

        public string Email { get; set; }
        public string Password { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}
