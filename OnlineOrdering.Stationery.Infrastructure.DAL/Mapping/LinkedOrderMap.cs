using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OnlineOrdering.Stationery.Infrastructure.DAL.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace OnlineOrdering.Stationery.Infrastructure.DAL.Mapping
{
    public class LinkedOrderMap : IEntityTypeConfiguration<LinkedOrder>
    {
        public void Configure(EntityTypeBuilder<LinkedOrder> builder)
        {
            builder.ToTable("LinkedOrders");
            builder.Property(o => o.LinkId).UseSqlServerIdentityColumn();
            //builder.HasOne(u => u.or).WithMany(o => o.Orders);
        }
    }
}
