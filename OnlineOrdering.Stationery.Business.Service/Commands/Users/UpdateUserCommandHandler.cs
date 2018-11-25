using OnlineOrdering.Stationery.Business.CQRS.Commands;
using OnlineOrdering.Stationery.Infrastructure.DAL;
using OnlineOrdering.Stationery.Infrastructure.DAL.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace OnlineOrdering.Stationery.Business.Service.Commands.Users
{
    public class UpdateUserCommandHandler : ICommandHandler<UpdateUserCommand>
    {
        private readonly StationeryContext _context;

        public UpdateUserCommandHandler(StationeryContext context)
        {
            _context = context;
        }

        public void Handle(UpdateUserCommand command)
        {
            User user = _context.Users.Find(command.Id);
            user.Set(command.Value.FirstName, 
                     command.Value.LastName, 
                     command.Value.UserName, 
                     command.Value.JobId, 
                     command.Value.UnitId);

            _context.Users.Update(user);
            _context.SaveChanges();
        }
    }
}
