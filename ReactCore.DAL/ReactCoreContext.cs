using Microsoft.EntityFrameworkCore;
using ReactCore.DAL.Models;

namespace ReactCore.DAL
{
    public class ReactCoreContext : DbContext
    {
        public ReactCoreContext(DbContextOptions<ReactCoreContext> options) : base(options)
        {
            
        }

        public DbSet<User> Users { get; set; }
        public DbSet<RefreshToken> RefreshTokens { get; set; }
        public DbSet<Agency> Agencies { get; set; }
        public DbSet<AgencyManager> AgencyManagers { get; set; }
        public DbSet<Volunteer> Volunteers { get; set; }
        public DbSet<Request> Requests { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<Child> Children { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

        }
    }
}
