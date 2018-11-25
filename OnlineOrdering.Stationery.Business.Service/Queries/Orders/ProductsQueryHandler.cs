using OnlineOrdering.Stationery.Business.CQRS.Queries;
using OnlineOrdering.Stationery.Business.Service.Dto.Orders;
using OnlineOrdering.Stationery.Infrastructure.DAL;
using OnlineOrdering.Stationery.Infrastructure.DAL.QueryObjects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace OnlineOrdering.Stationery.Business.Service.Queries.Orders
{
    public class ProductsQueryHandler : IHandleQuery<ProductsQuery, IEnumerable<ProductDto>>
    {
        private readonly StationeryContext _context;

        public ProductsQueryHandler(StationeryContext context)
        {
            _context = context;
        }

        public IEnumerable<ProductDto> Execute(ProductsQuery query)
        {
            var products = _context.Products.AsQueryable();

            if (query.Criteria.CategoryId != null)
            {
                products = products.Where(p => p.SubCategory.CategoryId == query.Criteria.CategoryId);
            }
            if(query.Criteria.SubCategoryId != null)
            {
                products = products.Where(p => p.SubCategory.SubCategoryId == query.Criteria.SubCategoryId);
            }
            if (query.Criteria.VendorId != null)
            {
                products = products.Where(p => p.VendorId == query.Criteria.VendorId);
            }

            return products.Select(p => new ProductDto
            {
                ProductId = p.ProductId,
                VendorId = p.VendorId,
                ArticulId = p.ArticuleId,
                View = p.Name,
                Name = p.ProductName,
                Description = p.Description,
                UnitPrice = p.UnitPrice,
                Measure = p.Measure,
                CountOfProducts = 0,
                TotalPrice = 0,
            }).Page(query.Criteria.pageNumber, 5);
        }
    }
}
