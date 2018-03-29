using System.Collections.Generic;
using ReactCore.Domain.User;

namespace ReactCore.BLL.Abstract.Services
{
    public interface IUserService
    {
        List<UserDetails> List();
    }
}
