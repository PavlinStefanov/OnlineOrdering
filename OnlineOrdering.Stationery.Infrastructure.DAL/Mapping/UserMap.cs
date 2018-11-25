using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OnlineOrdering.Stationery.Infrastructure.DAL.Model;

namespace OnlineOrdering.Stationery.Infrastructure.DAL.Mapping
{
    public class UserMap : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder.ToTable("Users");
            builder.Property(u => u.UserId).UseSqlServerIdentityColumn();
            builder.Property(f => f.FirstName).HasMaxLength(20);
            builder.Property(l => l.LastName).HasMaxLength(20);
            builder.Property(u => u.UserName).HasMaxLength(15);
            builder.Property(e => e.CorporateEmail).HasMaxLength(50);
            builder.Property(i => i.ImgName).HasMaxLength(10);
            builder.Property(u => u.ManagerId).IsRequired(false);
            builder.HasOne(u => u.Unit).WithMany(p => p.Users);
            builder.HasOne(j => j.JobPosition).WithMany(u => u.Users);
        }
    }
}
