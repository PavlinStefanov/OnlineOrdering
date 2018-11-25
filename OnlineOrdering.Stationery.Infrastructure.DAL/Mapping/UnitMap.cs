using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OnlineOrdering.Stationery.Infrastructure.DAL.Model;

namespace OnlineOrdering.Stationery.Infrastructure.DAL.Mapping
{
    public class UnitMap : IEntityTypeConfiguration<Unit>
    {
        public void Configure(EntityTypeBuilder<Unit> builder)
        {
            builder.ToTable("Units");
            builder.Property(u => u.UnitId).UseSqlServerIdentityColumn();
            builder.Property(u => u.UnitName).HasMaxLength(50);
            builder.Property(u => u.Address).HasMaxLength(70);
            builder.Property(u => u.Email).HasMaxLength(50);
            builder.Property(u => u.Location).HasMaxLength(25);
            //builder.Property(u => u.ParentId).IsRequired(false);
            builder.Property(u => u.Region).HasMaxLength(25);
            //builder.HasMany(o => o.Orders).WithOne(u => u.Unit).HasForeignKey(o => o.OrderId).OnDelete(DeleteBehavior.ClientSetNull);
        }
    }
}
