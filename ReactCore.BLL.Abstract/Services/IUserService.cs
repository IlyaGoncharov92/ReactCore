using System.Collections.Generic;
using ReactCore.Domain;
using ReactCore.Domain.User;

namespace ReactCore.BLL.Abstract.Services
{
    public interface IUserService
    {
        List<UserDetails> List(UserRole role);
    }
}
