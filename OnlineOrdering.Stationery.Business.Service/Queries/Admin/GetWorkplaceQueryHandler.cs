using OnlineOrdering.Stationery.Business.CQRS.Queries;
using OnlineOrdering.Stationery.Business.Service.Dto.Admin;
using OnlineOrdering.Stationery.Infrastructure.DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace OnlineOrdering.Stationery.Business.Service.Queries.Admin
{
    public class GetWorkplaceQueryHandler : IHandleQuery<GetWorkplaceQuery, IEnumerable<WorkplaceDto>>
    {
        private readonly StationeryContext _context;

        public GetWorkplaceQueryHandler(StationeryContext context)
        {
            _context = context;
        }

        public IEnumerable<WorkplaceDto> Execute(GetWorkplaceQuery query)
        {
            
            var result = _context.Units.AsQueryable();

            if (!string.IsNullOrEmpty(query.Region))
            {
                result = result.Where(r => r.Region == query.Region);
            }
            if (!string.IsNullOrEmpty(query.Location))
            {
                result = result.Where(r => r.Location == query.Location);
            }
            if (query.UnitId != null)
            {
                result = result.Where(r => r.UnitId == query.UnitId);
            }

            return result.GroupBy(x => x.Region).Select(x => new WorkplaceDto
            {
                RegionName = x.Key,
                Locations = x.GroupBy(l => l.Location).Select(u => new LocationDto
                {
                    LocationName = u.Key,
                    Units = u.Select(o => new UnitDto { Id = o.UnitId, Name = o.UnitName }).ToList()
                }).ToList()
            });
        }
    }
}
