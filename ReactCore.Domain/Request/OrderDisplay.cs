namespace ReactCore.Domain.Request
{
    public class OrderDisplay : BaseRequestDisplay
    {
        public long? VolunteerId { get; set; }
        public OrderStatus Status { get; set; }
    }
}
