namespace ReactCore.Domain.Child
{
    public class ChildDisplay : DomainBase
    {
        public string Name { get; set; }
        public int Age { get; set; }
        public GenderType Gender { get; set; }
        public long RequestId { get; set; }
        public long? OrderId { get; set; }
    }
}
