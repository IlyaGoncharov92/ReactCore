namespace ReactCore.Domain
{
    public class DomainBase
    {
        public long Id { get; set; }
        public bool IsNew => Id == 0;
    }
}
