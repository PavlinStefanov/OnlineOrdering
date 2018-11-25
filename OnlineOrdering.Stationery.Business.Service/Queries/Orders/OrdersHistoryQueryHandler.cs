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
    public class OrdersHistoryQueryHandler : 
        IHandleQuery<OrdersHistoryQuery,IEnumerable<OrdersHistoryDto>>
    {
        private readonly StationeryContext _context;

        public OrdersHistoryQueryHandler(StationeryContext context)
        {
            _context = context;
        }

        public IEnumerable<OrdersHistoryDto> Execute(OrdersHistoryQuery query)
        {
            var orders = _context.Orders.AsQueryable();

            if (query.Criteria.StatusId != null)
            {
                orders = orders.Where(x => x.OrderStatusId == query.Criteria.StatusId);
            }
            if (query.Criteria.UnitId != null)
            {
                orders = orders.Where(x => x.UnitId == query.Criteria.UnitId);
            }
            if(query.Criteria.StartDate != null && query.Criteria.EndDate != null)
            {
                orders = orders.Where(x => (x.OrderDate.Date >= query.Criteria.StartDate.Value.Date && x.OrderDate.Date <= query.Criteria.EndDate.Value.Date));
            }

            return orders.Select(o => new OrdersHistoryDto
            {
                OrderId = o.OrderId,
                Employee = o.Unit.Users.Select(x => string.Format("{0} {1}", x.FirstName, x.LastName)).FirstOrDefault(),
                CreatedDate = o.OrderDate.ToString("dd-MM-yyyy"),
                Total = o.TotalAmount,
                Status = o.OrderStatus.Name,
                Products = o.OrderDetails.Select(x => new ProductsHistoryDto
                {
                    ProductId = x.ProductId,
                    ProductName = x.Product.ProductName,
                    CountOfProducts = x.Quantity,
                    EComment = x.EComment,
                    RMComment = x.RMComment,
                    OCComment = x.OCComment,
                }).ToList()
            }).Page(query.Criteria.pageNumber, 5);
        }
    }
}
