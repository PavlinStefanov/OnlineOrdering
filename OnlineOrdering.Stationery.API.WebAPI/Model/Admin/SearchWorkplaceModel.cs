using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineOrdering.Stationery.API.WebAPI.Model.Admin
{
    public class SearchWorkplaceModel
    {
        public string Region { get; set; }
        public string Location { get; set; }
        public int? UnitId { get; set; }
    }
}
