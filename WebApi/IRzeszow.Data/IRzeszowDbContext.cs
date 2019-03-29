using IRzeszow.Data.Model;
using Microsoft.EntityFrameworkCore;

namespace IRzeszow.Data
{
    public class IRzeszowDbContext : DbContext
    {
        public virtual DbSet<Account> Accounts { get; set; }
        public virtual DbSet<CompanyData> CompanyDatas { get; set; }
        public virtual DbSet<UserData> UserDatas { get; set; }
        public virtual DbSet<Tag> Tags { get; set; }

        public IRzeszowDbContext(DbContextOptions<IRzeszowDbContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}
