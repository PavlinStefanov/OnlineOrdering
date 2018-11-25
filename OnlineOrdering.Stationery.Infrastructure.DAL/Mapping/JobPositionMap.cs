using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OnlineOrdering.Stationery.Infrastructure.DAL.Model;


namespace OnlineOrdering.Stationery.Infrastructure.DAL.Mapping
{
    public class JobPositionMap : IEntityTypeConfiguration<JobPosition>
    {
        public void Configure(EntityTypeBuilder<JobPosition> builder)
        {
            builder.ToTable("JobPosition");
            builder.Property(j => j.Name).HasMaxLength(100);
        }
    }
}
