using OnlineOrdering.Stationery.Business.CQRS.Queries;
using OnlineOrdering.Stationery.Business.Service.Dto.Orders;
using OnlineOrdering.Stationery.Infrastructure.DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace OnlineOrdering.Stationery.Business.Service.Queries.Orders
{
    public class CriteriaQueryHandler : IHandleQuery<CriteriaQuery, CriteriaDto>
    {
        private readonly StationeryContext _context;

        public CriteriaQueryHandler(StationeryContext context)
        {
            _context = context;
        }
        /// <summary>
        /// тази заявка трябва да се прегледа, тъй като има value objects service.
        /// </summary>
        /// <param name="query"></param>
        /// <returns></returns>
        public CriteriaDto Execute(CriteriaQuery query)
        {
            return new CriteriaDto
            {
                CategoryList = _context.Categories.Select(x => new CategoryDto { Id = x.CategoryId, Name = x.CategoryName }).ToList(),
                SubCategoryList = _context.SubCategories.Select(x => new SubCategoryDto { Id = x.SubCategoryId, Name = x.SubCategoryName }).ToList(),
                VendorList = _context.Vendors.Select(x => new VendorDto { Id = x.VendorId, Name = x.VendorName }).ToList()
            };
        }
    }
}
