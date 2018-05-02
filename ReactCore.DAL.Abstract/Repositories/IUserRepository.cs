using System.Collections.Generic;
using ReactCore.Domain;
using ReactCore.Domain.User;

namespace ReactCore.DAL.Abstract.Repositories
{
    public interface IUserRepository
    {
        List<UserDetails> List(UserRole role);
        UserDetails GetByEmail(string email);
    }
}
