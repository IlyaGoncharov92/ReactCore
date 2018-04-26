using System.Collections.Generic;
using ReactCore.BLL.Abstract.Services;
using ReactCore.DAL.Abstract.Repositories;
using ReactCore.Domain.User;

namespace ReactCore.BLL.Services
{
    public class AgencyService : IAgencyService
    {
        private IAgencyRepository AgencyRepository { get; }

        public AgencyService(IAgencyRepository agencyRepository)
        {
            AgencyRepository = agencyRepository;
        }

        public List<UserDetails> List()
        {
            return AgencyRepository.List();
        }
    }
}
