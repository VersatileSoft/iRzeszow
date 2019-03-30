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
        public virtual DbSet<TagToUserData> TagToUserDatas { get; set; }
        public virtual DbSet<Post> Posts { get; set; }
        public virtual DbSet<TagToPost> TagToPosts { get; set; }




        public IRzeszowDbContext(DbContextOptions<IRzeszowDbContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<TagToUserData>()
                .HasKey(bc => new { bc.TagId, bc.UserDataId });

            modelBuilder.Entity<TagToUserData>()
                .HasOne(bc => bc.UserData)
                .WithMany(b => b.Tags)
                .HasForeignKey(bc => bc.UserDataId)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<TagToUserData>()
                .HasOne(bc => bc.Tag)
                .WithMany(c => c.UserDatas)
                .HasForeignKey(bc => bc.TagId)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<TagToPost>()
                .HasKey(bc => new { bc.PostId, bc.TagId });

            modelBuilder.Entity<TagToPost>()
                .HasOne(bc => bc.Post)
                .WithMany(b => b.Tags)
                .HasForeignKey(bc => bc.PostId)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<TagToPost>()
                .HasOne(bc => bc.Tag)
                .WithMany(c => c.Posts)
                .HasForeignKey(bc => bc.TagId)
                .OnDelete(DeleteBehavior.Restrict);
        }
    }
}
