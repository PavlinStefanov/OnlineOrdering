using OnlineOrdering.Stationery.Business.CQRS.Commands;
using OnlineOrdering.Stationery.Business.Service.Commands.Orders;
using OnlineOrdering.Stationery.Infrastructure.DAL;
using OnlineOrdering.Stationery.Infrastructure.DAL.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace OnlineOrdering.Stationery.Business.Service.Commands.Management
{
    public class SetProductCommandHandler : ICommandHandler<SetProductCommand>
    {
        private readonly StationeryContext _context;

        public SetProductCommandHandler(StationeryContext context)
        {
            _context = context;
        }

        public void Handle(SetProductCommand command)
        {
            OrderDetails product = _context.OrderDetails.Where(x => x.OrderId == command.Product.orderId && x.ProductId == command.Product.productId).FirstOrDefault();
            product.SetProduct(command.Product.statusId, command.Product.comment, command.Product.productsCount, command.Id);
            _context.OrderDetails.Update(product);

            _context.SaveChanges();
        }
    }
}
