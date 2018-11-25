using OnlineOrdering.Stationery.Business.CQRS.Commands;
using System;
using System.Collections.Generic;
using System.Text;

namespace OnlineOrdering.Stationery.Business.Service.Commands.Management
{
    public class AddToLinkCommand : ICommand
    {
        public AddToLinkCommand(List<int> orders, int id)
        {
            Orders = orders;
            Id = id;
        }

        public int Id { get; set; }
        public List<int> Orders { get; set; }
    }
}
