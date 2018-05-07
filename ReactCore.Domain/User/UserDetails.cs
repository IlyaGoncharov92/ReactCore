using System.Collections.Generic;
using ReactCore.Domain.Agency;
using ReactCore.Domain.AgencyManager;
using ReactCore.Domain.Volunteer;

namespace ReactCore.Domain.User
{
    public class UserDetails : DomainBase
    {
        public string Email { get; set; }
        public string Password { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string FullName => $"{FirstName} {LastName}";
        public UserRole Role { get; set; }

        public AgencyDisplay Agency { get; set; }
        public AgencyManagerDisplay AgencyManager { get; set; }
        public VolunteerDisplay Volunteer { get; set; }
    }
}
