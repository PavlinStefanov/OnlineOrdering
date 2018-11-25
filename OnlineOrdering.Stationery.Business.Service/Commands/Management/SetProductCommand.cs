using OnlineOrdering.Stationery.Business.CQRS.Commands;
using OnlineOrdering.Stationery.Business.Service.Dto.Management;
using System;


namespace OnlineOrdering.Stationery.Business.Service.Commands.Management
{
    public class SetProductCommand : ICommand
    {
        public SetProductCommand(SetProductDto product, int id)
        {
            Id = id;
            Product = product;
        }
        public int Id { get; set; }
        public SetProductDto Product { get; set; }
    }
}
