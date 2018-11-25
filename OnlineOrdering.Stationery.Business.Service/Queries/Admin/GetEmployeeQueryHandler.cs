using OnlineOrdering.Stationery.Business.CQRS.Queries;
using OnlineOrdering.Stationery.Business.Service.Dto.Admin;
using OnlineOrdering.Stationery.Infrastructure.DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace OnlineOrdering.Stationery.Business.Service.Queries.Admin
{
    public class GetEmployeeQueryHandler : IHandleQuery<GetEmployeeQuery, EmployeeDto>
    {
        private readonly StationeryContext _context;

        public GetEmployeeQueryHandler(StationeryContext context)
        {
            _context = context;
        }
        public EmployeeDto Execute(GetEmployeeQuery query)
        {
            return _context.Users.Where(x => string.Concat(x.FirstName, " ", x.LastName).ToUpper().Contains(query.Name.ToUpper()))
                                 .Select(x => new EmployeeDto
                                 {
                                     FirstName = x.FirstName,
                                     LastName = x.LastName,
                                     Region = x.Unit.Region,
                                     Location = x.Unit.Location,
                                     PhoneNumber = x.Unit.PhoneNumber,
                                     UnitName = x.Unit.UnitName,
                                     Email = x.CorporateEmail,
                                     Address = x.Unit.Address,
                                     UserName = x.UserName,
                                     JobTitle = x.JobPosition.Name
                                 }).FirstOrDefault();
        }
    }
}
