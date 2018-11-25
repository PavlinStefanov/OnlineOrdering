using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace OnlineOrdering.Stationery.Business.DomainService.CQS.Command
{
    public interface IAsyncCommandHandler
    {}
    public interface IAsyncCommandHandler<in TCommand> : ICommandHandler where TCommand : ICommand
    {
        Task HandleAsync(TCommand command);
    }
}
