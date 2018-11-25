using System;
using System.Collections.Generic;
using System.Text;

namespace OnlineOrdering.Stationery.Business.CQRS
{
    public interface IDependencyResolver
    {
        T Get<T>();
        IEnumerable<T> GetAll<T>();
    }
}
