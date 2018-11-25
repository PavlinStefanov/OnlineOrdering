using OnlineOrdering.Stationery.Business.Service.Dto.Shared;
using System;
using System.Collections.Generic;
using System.Text;

namespace OnlineOrdering.Stationery.Business.Service.Dto.Users
{
    public class UserDto
    {
        public int Id { get; set; }
        public string CompanyName { get; set; }
        public string UnitAddress { get; set; }
        public string Location { get; set; }
        public string Region { get; set; }
        public string PhoneNumber { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string ImgName { get; set; }
        public string Email { get; set; }
        public string UserName { get; set; }
        public int CreatedOrders { get; set; }
        public int OrderedProducts { get; set; }
        public decimal TotalCosts { get; set; }
        public List<TeamMemberDto> MembersList { get; set; }
    }
}
