using System.Collections.Generic;
using ReactCore.Domain.Child;

namespace ReactCore.Domain.Request
{
    public class BaseRequestDisplay : DomainBase
    {
        public string FamilyName { get; set; }
        public string StreetAddress { get; set; }
        public string City { get; set; }
        public DeliveryType DeliveryType { get; set; }
        public long AgencyId { get; set; }
        public List<ChildDisplay> Children { get; set; }
    }
}
