using ReactCore.Domain;

namespace ReactCore.DAL.Models
{
    public class User : EntityBase
    {
        public string Email { get; set; }
        public string Password { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public UserRole Role { get; set; }

        public Agency Agency { get; set; }
        public AgencyManager AgencyManager { get; set; }
        public Volunteer Volunteer { get; set; }
    }
}
