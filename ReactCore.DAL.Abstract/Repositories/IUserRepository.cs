using System.Collections.Generic;
using ReactCore.Domain.User;

namespace ReactCore.DAL.Abstract.Repositories
{
    public interface IUserRepository
    {
        List<UserDetails> List();
    }
}
