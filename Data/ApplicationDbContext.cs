using Microsoft.EntityFrameworkCore;
using time_of_your_life.Model;

namespace time_of_your_life.Data
{
    public class ApplicationDbContext: DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }
        public DbSet<Alarm> Alarm{ get; set; }
    }
}
