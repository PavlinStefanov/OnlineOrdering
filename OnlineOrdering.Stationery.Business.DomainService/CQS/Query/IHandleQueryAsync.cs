using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace OnlineOrdering.Stationery.Business.DomainService.CQS.Query
{
    public interface IHandleQueryAsync<in TQuery, TResult> where TQuery : IQuery<TResult>
    {
        Task<TResult> ExecuteAsync(TQuery query);
    }
}
