using OnlineOrdering.Stationery.Business.CQRS.Commands;
using OnlineOrdering.Stationery.Infrastructure.DAL;
using System;
using System.Collections.Generic;
using System.Text;

namespace OnlineOrdering.Stationery.Business.Service.Commands.Management
{
    public class SetOrderCommandHandler : ICommandHandler<SetOrderCommand>
    {
        private readonly StationeryContext _context;

        public SetOrderCommandHandler(StationeryContext context)
        {
            _context = context;
        }
        
        public void Handle(SetOrderCommand command)
        {
            var order = _context.Orders.Find(command.Order.OrderId);
            order.OrderStatusId = command.Order.StatusId;
            //order.IsEnded = true; тука не трябва да се сетва, тъй като в този случай на истина ще бъде видим за следващото ниво (Офис кординатор)

            _context.Orders.Update(order);
            _context.SaveChanges();
        }
    }
}
