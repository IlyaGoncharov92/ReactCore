namespace ReactCore.DAL.Repositories
{
    public class Base
    {
        protected ReactCoreContext Context { get; }

        public Base(ReactCoreContext context)
        {
            Context = context;
        }
    }
}
