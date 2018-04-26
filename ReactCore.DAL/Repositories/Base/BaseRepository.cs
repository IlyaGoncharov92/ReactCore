namespace ReactCore.DAL.Repositories
{
    public class BaseRepository
    {
        protected ReactCoreContext Context { get; }

        public BaseRepository(ReactCoreContext context)
        {
            Context = context;
        }
    }
}
