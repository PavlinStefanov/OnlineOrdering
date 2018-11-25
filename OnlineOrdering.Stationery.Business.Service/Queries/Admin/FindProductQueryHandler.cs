using OnlineOrdering.Stationery.Business.CQRS.Queries;
using OnlineOrdering.Stationery.Business.Service.Dto.Admin;
using OnlineOrdering.Stationery.Infrastructure.DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace OnlineOrdering.Stationery.Business.Service.Queries.Admin
{
    public class FindProductQueryHandler : IHandleQuery<FindProductQuery, AdminProductDto>
    {
        private readonly StationeryContext _context;

        public FindProductQueryHandler(StationeryContext context)
        {
            _context = context;
        }
        public AdminProductDto Execute(FindProductQuery query)
        {
            return _context.Products.Where(x => x.ArticuleId == query.ArticuleId).Select(x => new AdminProductDto
            {
                ArticuleId = x.ArticuleId,
                Name = x.ProductName,
                Description = x.Description,
                Vendor = x.Vendor.VendorName,
                Category = x.SubCategory.Category.CategoryName,
                SubCategory = x.SubCategory.SubCategoryName,
                Measure = x.Measure,
                UnitPrice = x.UnitPrice,
                View = x.Name
            }).FirstOrDefault();
        }
    }
}
