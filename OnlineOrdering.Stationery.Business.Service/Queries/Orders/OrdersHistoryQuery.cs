using OnlineOrdering.Stationery.Business.CQRS.Queries;
using OnlineOrdering.Stationery.Business.Service.Dto.Orders;
using System;
using System.Collections.Generic;
using System.Text;

namespace OnlineOrdering.Stationery.Business.Service.Queries.Orders
{
    public class OrdersHistoryQuery : IQuery<IEnumerable<OrdersHistoryDto>>
    {
        public OrdersHistoryQuery(OrderSearchCriteriaDto criteria)
        {
            Criteria = criteria;
        }

        public OrderSearchCriteriaDto Criteria { get; set; }
    }
}
