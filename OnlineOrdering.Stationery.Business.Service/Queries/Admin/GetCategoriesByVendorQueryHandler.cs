using OnlineOrdering.Stationery.Business.CQRS.Queries;
using OnlineOrdering.Stationery.Business.Service.Dto.Admin;
using OnlineOrdering.Stationery.Infrastructure.DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace OnlineOrdering.Stationery.Business.Service.Queries.Admin
{
    public class GetCategoriesByVendorQueryHandler : IHandleQuery<GetCategoriesByVendorQuery, CategoryResultDto>
    {
        private readonly StationeryContext _context;

        public GetCategoriesByVendorQueryHandler(StationeryContext context)
        {
            _context = context;
        }
        public CategoryResultDto Execute(GetCategoriesByVendorQuery query)
        {
            var vendors = _context.Vendors.Select(x => new VendorDto
            {
                VendorId = x.VendorId,
                Name = x.VendorName
            }).ToList();

            var result = _context.Categories.Select(x => new CategoryDto
            {
                CatId = x.CategoryId,
                CatName = x.CategoryName,
                SubCats = x.SubCategories.Select(s => new SubCatDto
                {
                    SubId = s.SubCategoryId,
                    SubName = s.SubCategoryName
                }).ToList()
            }).ToList();

            if (query.CategoryId != null)
            {
                result = result.Where(c => c.CatId == query.CategoryId).ToList();
            }

            return (new CategoryResultDto { Vendors = vendors, Categories = result });
        }
    }
}
