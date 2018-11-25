using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OnlineOrdering.Stationery.Infrastructure.DAL.Model;

namespace OnlineOrdering.Stationery.Infrastructure.DAL.Mapping
{
    public class OrderDetailsMap : IEntityTypeConfiguration<OrderDetails>
    {
        public void Configure(EntityTypeBuilder<OrderDetails> builder)
        {
            builder.ToTable("OrderDetails");
            builder.HasKey(os => new { os.OrderId, os.ProductId });
            builder.HasOne(s => s.Order).WithMany(o => o.OrderDetails).HasForeignKey(o => o.OrderId);
            builder.HasOne(s => s.Product).WithMany(o => o.OrderDetails).HasForeignKey(s => s.ProductId);
        }
    }
}
