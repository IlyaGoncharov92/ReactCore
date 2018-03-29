using Microsoft.EntityFrameworkCore;
using ReactCore.DAL.Configurations;
using ReactCore.DAL.Models;

namespace ReactCore.DAL
{
    public class ReactCoreContext : DbContext
    {
        public ReactCoreContext(DbContextOptions<ReactCoreContext> options) : base(options)
        {
            
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Project> Projects { get; set; }
        public DbSet<Client> Clients { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new UserProjectsConfigurations());
        }
    }
}
