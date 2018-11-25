

using OnlineOrdering.Stationery.Business.CQRS.Commands;
using OnlineOrdering.Stationery.Business.Service.Dto.Orders;
using OnlineOrdering.Stationery.Infrastructure.DAL;
using OnlineOrdering.Stationery.Infrastructure.DAL.Model;
using System;
using System.Collections.Generic;
using System.Linq;

namespace OnlineOrdering.Stationery.Business.Service.Commands.Orders
{
    public class CreateOrderCommandHandler : ICommandHandler<CreateOrderCommand>
    {
        private readonly StationeryContext _context;

        public CreateOrderCommandHandler(StationeryContext context)
        {
            _context = context;
        }
        public void Handle(CreateOrderCommand command)
        {
            var unitId = _context.Users.Where(u => u.UserId == command.UserId).Select(u => u.UnitId).FirstOrDefault();

            Order order = new Order();
            order.Create(1, command.Order.TotalAmount, unitId, command.UserId);
            _context.Orders.Add(order);

            var products = CreateProducts(command.Order.Products, order.OrderId);
            _context.OrderDetails.AddRange(products);

            _context.SaveChanges();
        }

        public List<OrderDetails> CreateProducts(List<AddProductDto> products, int orderId)
        {
            List<OrderDetails> productList = new List<OrderDetails>();
            foreach (var product in products)
            {
                var orderDetails = new OrderDetails
                {
                    OrderId = orderId,
                    ProductId = product.ProductId,
                    StatustId = 1,
                    Quantity = product.Quantity,
                    EComment = product.Comment,
                    UnitPrice = product.UnitPrice
                };
                productList.Add(orderDetails);
            }
            return productList;
        }
    }
}
