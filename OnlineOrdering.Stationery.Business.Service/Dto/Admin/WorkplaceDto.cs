using System;
using System.Collections.Generic;
using System.Text;

namespace OnlineOrdering.Stationery.Business.Service.Dto.Admin
{
    public class WorkplaceDto
    {
        public string RegionName { get; set; }
        public List<LocationDto> Locations { get; set; }
    }

    public class LocationDto
    {
        public string LocationName { get; set; }
        public List<UnitDto> Units { get; set; }
    }

    public class UnitDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
}
