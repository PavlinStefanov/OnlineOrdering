using System;
using System.Collections.Generic;
using System.Text;

namespace OnlineOrdering.Stationery.Infrastructure.DAL.Helpers.Dto
{
    public class UpdateUserDto
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string UserName { get; set; }
        public int JobId { get; set; }
        public int UnitId { get; set; }
    }
}
