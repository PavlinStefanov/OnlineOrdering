using OnlineOrdering.Stationery.Business.CQRS.Queries;
using OnlineOrdering.Stationery.Business.Service.Dto.Shared;
using OnlineOrdering.Stationery.Infrastructure.DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace OnlineOrdering.Stationery.Business.Service.Queries.Shared
{
    public class ValueObjectQueryHandler : IHandleQuery<ValueObjectQuery, ValueObjectDto>
    {
        private readonly StationeryContext _context;

        public ValueObjectQueryHandler(StationeryContext context)
        {
            _context = context;
        }
        public ValueObjectDto Execute(ValueObjectQuery query)
        {
            var region = _context.Users.Where(x => x.UserId == query.Id).Select(r => r.Unit.Region).FirstOrDefault();
            return new ValueObjectDto()
            {
                StatusList = _context.OrderStatuses.Select(x => new StatusDto { StatusId = x.OrderStatusId, Name = x.Name }).ToList(),
                UnitList = _context.Units.Where(x => x.Region == region).Select(x => new UnitDto { UnitId = x.UnitId, Name = x.UnitName }).ToList(),
                JobsList = _context.JobPositions.Select(x => new JobDto { JobId = x.JobPositionId, JobName = x.Name }).ToList()
            };
        }
    }
}
