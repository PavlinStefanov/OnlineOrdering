

using OnlineOrdering.Stationery.Business.CQRS.Commands;

namespace OnlineOrdering.Stationery.Business.Service.Commands.Management
{
    public class CompleteOrderCommand : ICommand
    {
        public CompleteOrderCommand(int orderId)
        {
            OrderId = orderId;
        }

        public int OrderId { get; set; }
    }
}
