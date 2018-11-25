using OnlineOrdering.Stationery.Business.CQRS.Commands;
using OnlineOrdering.Stationery.Business.Service.Dto.Admin;
using System;
using System.Collections.Generic;
using System.Text;

namespace OnlineOrdering.Stationery.Business.Service.Commands.Admin
{
    public class PersistEmployeeCommand : ICommand
    {
        public PersistEmployeeCommand(PersistEmployeeDto persist)
        {
            Persist = persist;
            FullName = string.Concat(persist.FirstName, " ", persist.LastName);
        }

        public PersistEmployeeDto Persist { get; set; }
        public string FullName { get; set; }
    }
}
