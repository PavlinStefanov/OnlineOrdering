using OnlineOrdering.Stationery.Business.CQRS.Queries;
using OnlineOrdering.Stationery.Business.Service.Dto.Admin;
using System;
using System.Collections.Generic;
using System.Text;

namespace OnlineOrdering.Stationery.Business.Service.Queries.Admin
{
    public class FindProductQuery : IQuery<AdminProductDto>
    {
        public FindProductQuery(int articuleId)
        {
            ArticuleId = articuleId;
        }
        public int ArticuleId { get; set; }
    }
}
