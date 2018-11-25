﻿using System;
using System.Linq;

namespace OnlineOrdering.Stationery.Infrastructure.DAL.QueryObjects
{
    public static class GenericPaging
    {
        public static IQueryable<T> Page<T>(this IQueryable<T> query, int pageNumZeroStart, int pageSize)
        {
            if (pageSize == 0)
                throw new ArgumentNullException(nameof(pageSize), "pageSize cannot be zero.");

            if (pageNumZeroStart != 0)
                query = query.Skip(pageNumZeroStart * pageSize);

            return query.Take(pageSize);
        }
    }
}
