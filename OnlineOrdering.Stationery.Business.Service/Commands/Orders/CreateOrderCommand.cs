using OnlineOrdering.Stationery.Business.CQRS.Commands;
using OnlineOrdering.Stationery.Business.Service.Dto.Orders;
using System;
using System.Collections.Generic;
using System.Text;

namespace OnlineOrdering.Stationery.Business.Service.Commands.Orders
{
    public class CreateOrderCommand : ICommand
    {
        public CreateOrderCommand(AddOrderDto order, int userId)
        {
            Order = order;
            UserId = userId;
        }
        public int UserId { get; set; }
        public AddOrderDto Order { get; set; }
    }
}
