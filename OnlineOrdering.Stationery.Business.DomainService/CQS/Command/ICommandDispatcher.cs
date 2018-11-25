using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace OnlineOrdering.Stationery.Business.DomainService.CQS.Command
{
    public interface ICommandDispatcher
    {
        void DispatchCommand<TCommand>(TCommand command) where TCommand : ICommand;
        Task DispatchCommandAsync<TCommand>(TCommand command) where TCommand : ICommand;
    }
}
