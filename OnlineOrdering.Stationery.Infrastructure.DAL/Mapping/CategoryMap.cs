using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OnlineOrdering.Stationery.Infrastructure.DAL.Model;

namespace OnlineOrdering.Stationery.Infrastructure.DAL.Mapping
{
    public class CategoryMap : IEntityTypeConfiguration<Category>
    {
        public void Configure(EntityTypeBuilder<Category> builder)
        {
            builder.ToTable("Category");
            builder.Property(c => c.CategoryId).UseSqlServerIdentityColumn();
            builder.Property(c => c.CategoryName).HasMaxLength(50);
            //builder.HasMany(c => c.SubCategories).WithOne(c => c.Category).HasForeignKey(s => s.SubCategoryId).OnDelete(DeleteBehavior.ClientSetNull); 
        }
    }
}
