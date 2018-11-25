using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OnlineOrdering.Stationery.Infrastructure.DAL.Model;


namespace OnlineOrdering.Stationery.Infrastructure.DAL.Mapping
{
    public class OrderMap : IEntityTypeConfiguration<Order>
    {
        public void Configure(EntityTypeBuilder<Order> builder)
        {
            builder.ToTable("Orders");
            builder.Property(o => o.OrderId).UseSqlServerIdentityColumn();
            builder.HasOne(u => u.Unit).WithMany(o => o.Orders);
            builder.HasOne(o => o.OrderStatus).WithMany(o => o.Orders);
            builder.HasOne(u => u.LinkedOrder).WithMany(o => o.Orders);
            //builder.HasMany(o => o.OrderStatusHistories).WithOne(o => o.Order);
            //builder.HasMany(o => o.OrderDetails).WithOne(o => o.Order);
        }
    }
}
