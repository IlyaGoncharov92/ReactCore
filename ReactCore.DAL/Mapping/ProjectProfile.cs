using AutoMapper;
using ReactCore.DAL.Models;
using ReactCore.Domain.Project;

namespace ReactCore.DAL.Mapping
{
    public class ProjectProfile : Profile
    {
        public ProjectProfile()
        {
            CreateMap<ProjectDetails, Project>();
            CreateMap<Project, ProjectDetails>();

            CreateMap<ProjectDisplay, Project>();
            CreateMap<Project, ProjectDisplay>();
        }
    }
}
