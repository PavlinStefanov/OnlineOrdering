﻿using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace OnlineOrdering.Stationery.Business.CQRS.Queries
{
    public interface IHandleQueryAsync<in TQuery, TResult> where TQuery : IQuery<TResult>
    {
        TResult ExecuteAsync(TQuery query);
    }
}
