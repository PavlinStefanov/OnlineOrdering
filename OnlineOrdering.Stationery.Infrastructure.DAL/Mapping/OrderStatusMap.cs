using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OnlineOrdering.Stationery.Infrastructure.DAL.Model;


namespace OnlineOrdering.Stationery.Infrastructure.DAL.Mapping
{
    public class OrderStatusMap : IEntityTypeConfiguration<OrderStatus>
    {
        public void Configure(EntityTypeBuilder<OrderStatus> builder)
        {
            builder.ToTable("OrderStatus");
            builder.Property(o => o.OrderStatusId).UseSqlServerIdentityColumn();
            builder.Property(s => s.Name).HasMaxLength(25);
            //builder.HasOne(o => o.).WithMany(s => s.OrderStatuses);
            //builder.HasMany(s => s.OrderStatusHistories).WithOne(o => o.OrderStatus);
        }
    }
}
