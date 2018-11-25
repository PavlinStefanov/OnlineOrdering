using System;
using System.Collections.Generic;
using System.Text;

namespace OnlineOrdering.Stationery.Business.Service.Dto.Shared
{
    public class ValueObjectDto
    {
        public List<StatusDto> StatusList { get; set; }
        public List<UnitDto> UnitList { get; set; }
        public List<JobDto> JobsList { get; set; }
    }
}
