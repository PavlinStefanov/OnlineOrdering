using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineOrdering.Stationery.API.WebAPI.Model.Admin
{
    public class PersistEmployeeModel
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int JobId { get; set; }
        public string Location { get; set; }
        public string Region { get; set; }
        public int? UnitId { get; set; }
    }
}
