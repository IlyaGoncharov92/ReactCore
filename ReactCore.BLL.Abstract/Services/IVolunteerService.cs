using System.Collections.Generic;
using ReactCore.Domain.User;

namespace ReactCore.BLL.Abstract.Services
{
    public interface IVolunteerService
    {
        List<UserDetails> List();
    }
}
