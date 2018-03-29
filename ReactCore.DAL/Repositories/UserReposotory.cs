using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using ReactCore.DAL.Abstract.Repositories;
using ReactCore.Domain.User;

namespace ReactCore.DAL.Repositories
{
    public class UserReposotory : IUserRepository
    {
        private ReactCoreContext Context { get; }

        public UserReposotory(ReactCoreContext context)
        {
            Context = context;
        }

        public List<UserDetails> List()
        {
            return Context.Users.ProjectTo<UserDetails>().ToList();
        }

        public void Save(UserDetails user)
        {
            //var entity = 
        }
    }
}
