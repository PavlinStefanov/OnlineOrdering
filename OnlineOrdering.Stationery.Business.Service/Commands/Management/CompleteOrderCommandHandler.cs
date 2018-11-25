using OnlineOrdering.Stationery.Business.CQRS.Commands;
using OnlineOrdering.Stationery.Infrastructure.DAL;
using OnlineOrdering.Stationery.Infrastructure.DAL.Helpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace OnlineOrdering.Stationery.Business.Service.Commands.Management
{
    public class CompleteOrderCommandHandler : ICommandHandler<CompleteOrderCommand>
    {
        private readonly StationeryContext _context;

        public CompleteOrderCommandHandler(StationeryContext context)
        {
            _context = context;
        }
        public void Handle(CompleteOrderCommand command)
        {
            var order = _context.Orders.FirstOrDefault(x => x.OrderId == command.OrderId);

            if (order == null)
            {
                throw new AppException("Order not found!");
            }
            order.IsCompletedRm = true;

            _context.Orders.Update(order);
            _context.SaveChanges();
        }
    }
}
