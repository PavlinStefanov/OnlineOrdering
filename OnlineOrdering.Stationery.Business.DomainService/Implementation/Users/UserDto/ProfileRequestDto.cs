using System;
using System.Collections.Generic;
using System.Text;

namespace OnlineOrdering.Stationery.Business.DomainService.Implementation.Users.UserDto
{
    public class ProfileRequestDto
    {
        public string UnitName { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string CorporateEmail { get; set; }
        public string JobPosition { get; set; }
    }
}
