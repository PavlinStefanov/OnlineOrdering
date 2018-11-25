using OnlineOrdering.Stationery.Business.CQRS.Queries;
using OnlineOrdering.Stationery.Business.Service.Dto.Admin;
using System;
using System.Collections.Generic;
using System.Text;

namespace OnlineOrdering.Stationery.Business.Service.Queries.Admin
{
    public class GetEmployeeQuery : IQuery<EmployeeDto>
    {
        public GetEmployeeQuery(string name)
        {
            Name = name;
        }
        public string Name { get; set; }
    }
}
