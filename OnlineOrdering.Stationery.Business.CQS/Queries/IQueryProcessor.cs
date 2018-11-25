using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace OnlineOrdering.Stationery.Business.CQRS.Queries
{
    public interface IQueryProcessor
    {
        TResult Process<TResult>(IQuery<TResult> query);
        Task<TResult> ProcessAsync<TResult>(IQuery<TResult> query);
    }
}
