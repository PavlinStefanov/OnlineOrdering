using System;
using System.Collections.Generic;
using System.Text;

namespace OnlineOrdering.Stationery.Business.DomainService.CQS.Command
{
    public interface ICommandPrecondition<in TCommand> where TCommand : ICommand
    {
        void Check(TCommand command);
    }
}
