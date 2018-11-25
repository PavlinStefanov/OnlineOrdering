using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace OnlineOrdering.Stationery.Business.DomainService.CQS.Command
{
    public interface IAsyncCommandPrecondition<in TCommand> where TCommand : ICommand
    {
        Task CheckAsync(TCommand command);
    }
}
