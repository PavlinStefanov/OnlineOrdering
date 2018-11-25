using OnlineOrdering.Stationery.Business.CQRS.Queries;
using OnlineOrdering.Stationery.Business.Service.Dto.Admin;
using System;
using System.Collections.Generic;
using System.Text;

namespace OnlineOrdering.Stationery.Business.Service.Queries.Admin
{
    public class GetCategoriesByVendorQuery :IQuery<CategoryResultDto>
    {
        public GetCategoriesByVendorQuery(int? catId)
        {
            CategoryId = catId;
        }

        public int? CategoryId { get; set; }
    }
}
