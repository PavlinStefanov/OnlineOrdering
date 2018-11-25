using OnlineOrdering.Stationery.Business.CQRS.Queries;
using OnlineOrdering.Stationery.Business.Service.Dto.Shared;
using OnlineOrdering.Stationery.Infrastructure.DAL;
using OnlineOrdering.Stationery.Infrastructure.DAL.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace OnlineOrdering.Stationery.Business.Service.Queries.Shared
{
    public class ValueObjectQuery : IQuery<ValueObjectDto>
    {
        public ValueObjectQuery(int id)
        {
            Id = id;
        }

        public int Id { get; set; }
    }
}
