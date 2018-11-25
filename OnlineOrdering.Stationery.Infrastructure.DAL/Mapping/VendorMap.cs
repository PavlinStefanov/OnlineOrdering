using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OnlineOrdering.Stationery.Infrastructure.DAL.Model;


namespace OnlineOrdering.Stationery.Infrastructure.DAL.Mapping
{
    public class VendorMap : IEntityTypeConfiguration<Vendor>
    {
        public void Configure(EntityTypeBuilder<Vendor> builder)
        {
            builder.ToTable("Vendor");
            builder.Property(v => v.VendorId).UseSqlServerIdentityColumn();
            builder.Property(v => v.VendorName).HasMaxLength(50);
            //builder.HasMany(p => p.Products).WithOne(v => v.Vendor).HasForeignKey(p => p.ProductId).OnDelete(DeleteBehavior.ClientSetNull);
        }
    }
}
