using System.Collections.Generic;
using ReactCore.Domain.Request;

namespace ReactCore.Domain.Volunteer
{
    public class VolunteerDisplay
    {
        public long UserId { get; set; }
        public List<OrderDisplay> Orders { get; set; }
    }
}
