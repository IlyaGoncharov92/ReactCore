using System.Collections.Generic;
using ReactCore.Domain.User;

namespace ReactCore.BLL.Abstract.Services
{
    public interface IAgencyService
    {
        List<UserDetails> List();
    }
}
