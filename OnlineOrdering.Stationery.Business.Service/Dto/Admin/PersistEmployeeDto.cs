using System;
using System.Collections.Generic;
using System.Text;

namespace OnlineOrdering.Stationery.Business.Service.Dto.Admin
{
    public class PersistEmployeeDto
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int JobId { get; set; }
        public string Location { get; set; }
        public string Region { get; set; }
        public int UnitId { get; set; }
    }
}
