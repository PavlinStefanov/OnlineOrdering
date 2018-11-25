using System;
using System.Collections.Generic;
using System.Text;

namespace OnlineOrdering.Stationery.Business.DomainService.Implementation.Users.UserDto
{
    public class ProfileDto
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
        public string JobPosition { get; set; }
        public string UnitName { get; set; }
        public List<string> UnitList { get; set; }
        //public byte[] BackgroundImage { get; set; }
        //public byte[] ProfileImage { get; set; }
        public int CreatedOrders { get; set; }
        public int OrderedProducts { get; set; }
        public decimal TotalCosts { get; set; }
        public List<ProfileTeamMemberDto> MembersList { get; set; }
    }

    public class UnitDto
    {
        public int UnitId { get; set; }
        public string Name { get; set; }
    }
}
