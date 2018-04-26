using System.Collections.Generic;
using ReactCore.BLL.Abstract.Services;
using ReactCore.DAL.Abstract.Repositories;
using ReactCore.Domain.User;

namespace ReactCore.BLL.Services
{
    public class AdminManagerService : IAdminManagerService
    {
        private IAdminManagerRepository AdminManagerRepository { get; }

        public AdminManagerService(IAdminManagerRepository adminManagerRepository)
        {
            AdminManagerRepository = adminManagerRepository;
        }

        public List<UserDetails> List()
        {
            return AdminManagerRepository.List();
        }
    }
}
