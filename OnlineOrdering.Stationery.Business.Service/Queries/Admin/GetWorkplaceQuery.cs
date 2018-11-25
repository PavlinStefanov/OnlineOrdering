using OnlineOrdering.Stationery.Business.CQRS.Queries;
using OnlineOrdering.Stationery.Business.Service.Dto.Admin;
using System;
using System.Collections.Generic;
using System.Text;

namespace OnlineOrdering.Stationery.Business.Service.Queries.Admin
{
    public class GetWorkplaceQuery : IQuery<IEnumerable<WorkplaceDto>>
    {
        public GetWorkplaceQuery(string region, string location, int? unitId)
        {
            Region = region;
            Location = location;
            UnitId = unitId;
        }

        public string Region { get; set; }
        public string Location { get; set; }
        public int? UnitId { get; set; }
    }
}
