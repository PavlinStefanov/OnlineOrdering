using OnlineOrdering.Stationery.Business.CQRS.Commands;
using OnlineOrdering.Stationery.Infrastructure.DAL;
using OnlineOrdering.Stationery.Infrastructure.DAL.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace OnlineOrdering.Stationery.Business.Service.Commands.Admin
{
    public class PersistEmployeeCommandHandler : ICommandHandler<PersistEmployeeCommand>
    {
        private readonly StationeryContext _context;

        public PersistEmployeeCommandHandler(StationeryContext context)
        {
            _context = context;
        }

        public void Handle(PersistEmployeeCommand command)
        {
            var employee = _context.Users.FirstOrDefault(x => string.Concat(x.FirstName, " ", x.LastName).ToUpper().Contains(command.FullName.ToUpper()));

            if (employee == null)
            {
                User newEmp = new User();
                newEmp.Set(command.Persist.FirstName, 
                           command.Persist.LastName, 
                           command.Persist.JobId, 
                           command.Persist.UnitId);

                _context.Add(newEmp);
            }
            else
            {
                employee.Set(command.Persist.FirstName, 
                             command.Persist.LastName, 
                             command.Persist.JobId, 
                             command.Persist.UnitId);

                _context.Update(employee);
            }
            _context.SaveChanges();
        }
    }
}
