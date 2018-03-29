using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ReactCore.DAL.Models;

namespace ReactCore.DAL.Configurations
{
    public class UserProjectsConfigurations : IEntityTypeConfiguration<UserProjects>
    {
        public void Configure(EntityTypeBuilder<UserProjects> builder)
        {
            builder.ToTable("UserProjects");

            builder.HasKey(x => new {x.ProjectId, x.UserId});

            builder.HasOne(sc => sc.Project)
                .WithMany(s => s.UserProjects)
                .HasForeignKey(sc => sc.ProjectId);

            builder.HasOne(sc => sc.User)
                .WithMany(c => c.UserProjects)
                .HasForeignKey(sc => sc.UserId);
        }
    }
}