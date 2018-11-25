using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OnlineOrdering.Stationery.Infrastructure.DAL.Model;


namespace OnlineOrdering.Stationery.Infrastructure.DAL.Mapping
{
    public class SubCategoryMap : IEntityTypeConfiguration<SubCategory>
    {
        public void Configure(EntityTypeBuilder<SubCategory> builder)
        {
            builder.ToTable("SubCategories");
            builder.Property(s => s.SubCategoryId).UseSqlServerIdentityColumn();
            builder.Property(s => s.SubCategoryName).HasMaxLength(100);
            builder.HasOne(v => v.Category).WithMany(p => p.SubCategories);
            //builder.HasMany(p => p.Products).WithOne(s => s.SubCategory).IsRequired();//.HasForeignKey(p => p.ProductId).OnDelete(DeleteBehavior.ClientSetNull);
        }
    }
}
