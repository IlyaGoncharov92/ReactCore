using System.Collections.Generic;
using ReactCore.Domain.Request;

namespace ReactCore.Domain.Agency
{
    public class AgencyDisplay
    {
        public long UserId { get; set; }

        public string ContactName { get; set; }
        public string Location { get; set; }
        public int Bulk { get; set; }
        public int Individual { get; set; }
        public int Pickup { get; set; }

        public List<RequestDisplay> Requests { get; set; }
    }
}
