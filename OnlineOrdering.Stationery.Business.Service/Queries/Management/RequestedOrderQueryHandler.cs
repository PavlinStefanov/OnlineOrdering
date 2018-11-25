using OnlineOrdering.Stationery.Business.CQRS.Queries;
using OnlineOrdering.Stationery.Business.Service.Dto.Management;
using OnlineOrdering.Stationery.Infrastructure.DAL;
using OnlineOrdering.Stationery.Infrastructure.DAL.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace OnlineOrdering.Stationery.Business.Service.Queries.Management
{
    public class RequestedOrderQueryHandler : IHandleQuery<RequestedOrderQuery, IEnumerable<RequestedOrderDto>>
    {
        private readonly StationeryContext _context;

        public RequestedOrderQueryHandler(StationeryContext context)
        {
            _context = context;
        }

        public IEnumerable<RequestedOrderDto> Execute(RequestedOrderQuery query)
        {
            return _context.Orders.Select(x => new RequestedOrderDto
            {
                OrderId = x.OrderId,
                Unit = x.Unit.UnitName,
                Region = x.Unit.Region,
                Employee = x.Unit.Users.Where(u => u.UserId == x.UserId).Select(n => n.UserName).FirstOrDefault(),
                ProductsCount = x.OrderDetails.Select(q => q.Quantity).Count(),
                TotalPrice = x.TotalAmount,
                StatusId = x.OrderStatusId,
                IsLinked = x.IsLinkedRm, // check for level of access: RM or OC
                IsCompleted = x.IsCompletedRm, // check for level of access: RM or OC 
                Products = x.OrderDetails.Select(p => new RequestedProductDto
                {
                    ProductId = p.ProductId,
                    ArticuleId = p.Product.ArticuleId,
                    ProductName = p.Product.ProductName,
                    UnitPrice = p.UnitPrice,
                    TotalPrice = (p.Quantity * p.UnitPrice),
                    ProductsCount = p.Quantity,
                    StatusId = p.StatustId,
                    Comment = _context.Users.Where(u => u.UserId == query.Id)
                      .Select(j => j.JobPositionId).FirstOrDefault() == 1 ? p.RMComment : p.OCComment
                }).ToList()
            }).OrderByDescending(x => x.OrderId);//.Take();
        }
    }
}
