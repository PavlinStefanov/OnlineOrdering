using System;
using System.Collections.Generic;
using System.Text;

namespace OnlineOrdering.Stationery.Business.CQRS.Commands
{
    public interface ICommandPrecondition<in TCommand> where TCommand : ICommand
    {
        CommandPreconditionCheckResult Check(TCommand command);
    }
}
