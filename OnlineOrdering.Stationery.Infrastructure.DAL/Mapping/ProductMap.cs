using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OnlineOrdering.Stationery.Infrastructure.DAL.Model;

namespace OnlineOrdering.Stationery.Infrastructure.DAL.Mapping
{
    public class ProductMap : IEntityTypeConfiguration<Product>
    {
        public void Configure(EntityTypeBuilder<Product> builder)
        {
            builder.ToTable("Product");
            builder.Property(p => p.ProductId).UseSqlServerIdentityColumn();
            builder.Property(p => p.ProductName).HasMaxLength(200);
            builder.Property(p => p.Measure).HasMaxLength(10);
            builder.Property(p => p.ImageType).HasMaxLength(10);
            //builder.Property(p => p.ImageId).IsRequired(false);
            builder.Property(p => p.ImageURL).HasMaxLength(200);
            builder.Property(p => p.ImageContent).IsRequired(false);
            builder.HasOne(v => v.Vendor).WithMany(p => p.Products);
            // builder.HasMany(od => od.OrderDetails).WithOne(p => p.Product);
        }
    }
}
