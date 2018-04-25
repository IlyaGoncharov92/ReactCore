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

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
        }
    }
}
