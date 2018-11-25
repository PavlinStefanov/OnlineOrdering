using System;
using System.Collections.Generic;
using System.Text;

namespace OnlineOrdering.Stationery.Business.CQRS.Queries
{
    public interface IHandleQuery<in TQuery, out TResult> where TQuery : IQuery<TResult>
    {
        TResult Execute(TQuery query);
    }
}
