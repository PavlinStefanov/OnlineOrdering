using OnlineOrdering.Stationery.Business.CQRS.Queries;
using OnlineOrdering.Stationery.Business.Service.Dto.Orders;
using System;
using System.Collections.Generic;
using System.Text;

namespace OnlineOrdering.Stationery.Business.Service.Queries.Orders
{
    public class ProductsQuery : IQuery<IEnumerable<ProductDto>>
    {
        public ProductsQuery(ProductSearchCriteriaDto criteria)
        {
            Criteria = criteria;
        }

        public ProductSearchCriteriaDto Criteria { get; set; }
    }
}
