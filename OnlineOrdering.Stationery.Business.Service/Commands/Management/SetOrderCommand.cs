

using OnlineOrdering.Stationery.Business.CQRS.Commands;
using OnlineOrdering.Stationery.Business.Service.Dto.Management;

namespace OnlineOrdering.Stationery.Business.Service.Commands.Management
{
    public class SetOrderCommand : ICommand
    {
        public SetOrderCommand(SetOrderDto order)
        {
            Order = order;
        }
        public SetOrderDto Order { get; set; }
    }
}
