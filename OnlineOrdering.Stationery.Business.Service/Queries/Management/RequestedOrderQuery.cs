using OnlineOrdering.Stationery.Business.CQRS.Queries;
using OnlineOrdering.Stationery.Business.Service.Dto.Management;
using System;
using System.Collections.Generic;
using System.Text;

namespace OnlineOrdering.Stationery.Business.Service.Queries.Management
{
    public class RequestedOrderQuery : IQuery<IEnumerable<RequestedOrderDto>>
    {
        public RequestedOrderQuery(int id)
        {
            Id = id;
        }
        public int Id { get; set; }
    }
}
