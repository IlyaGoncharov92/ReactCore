using ReactCore.Domain;

namespace ReactCore.DAL.Models
{
    public class Request : BaseRequest
    {
        public RequestStatus Status { get; set; }
    }
}
