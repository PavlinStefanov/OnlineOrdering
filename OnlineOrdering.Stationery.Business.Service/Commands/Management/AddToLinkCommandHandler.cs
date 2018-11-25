

using OnlineOrdering.Stationery.Business.CQRS.Commands;
using OnlineOrdering.Stationery.Infrastructure.DAL;
using OnlineOrdering.Stationery.Infrastructure.DAL.Model;
using System;
using System.Collections.Generic;
using System.Linq;

namespace OnlineOrdering.Stationery.Business.Service.Commands.Management
{
    public class AddToLinkCommandHandler : ICommandHandler<AddToLinkCommand>
    {
        private readonly StationeryContext _context;

        public AddToLinkCommandHandler(StationeryContext context)
        {
            _context = context;
        }

        public void Handle(AddToLinkCommand command)
        {
            var lastLink = _context.LinkedOrders.Where(x => x.UserId == command.Id).FirstOrDefault();

            // case 1: no links created
            // case 2: 
            // case 3: count of orders smaller than current linked ordrs, 
            // Add new link
            if (lastLink == null)
            {
                _context.LinkedOrders.Add(new LinkedOrder { UserId = command.Id, DateCreated = DateTime.Now });
                lastLink = _context.LinkedOrders.OrderByDescending(x => x.DateCreated).FirstOrDefault();
            }

            //var orders = _context.Orders.Where(x => x.LinkId == lastLink.LinkId);

           // if (!orders.Any())
           // {
                foreach (int order in command.Orders)
                {
                    var currentOrder = _context.Orders.Find(order);
                   // currentOrder.IsLinked = true;
                    //currentOrder.LinkId = lastLink.LinkId;

                    _context.Orders.Update(currentOrder);
                }
            //}
            // add order to link
            //else if (command.Orders.Count() > orders.Count())
            //{

            //}
            // remove order from link
            //else if (command.Orders.Count() < orders.Count())
            //{
                //foreach (var orderItem in orders)
               // {
                   // int? currentOrder = command.Orders.Where(m => m == orderItem.OrderId).Select(m => m).FirstOrDefault();
                   // if (currentOrder == null)
                   // {
                    //    var toUnLink = _context.Orders.Find(orderItem);
                       // toUnLink.IsLinked = false;
                        //toUnLink.LinkId = null;

                    //    _context.Orders.Update(toUnLink);
                   // }
               // }
            //}

            _context.SaveChanges();
        }
    }
}
