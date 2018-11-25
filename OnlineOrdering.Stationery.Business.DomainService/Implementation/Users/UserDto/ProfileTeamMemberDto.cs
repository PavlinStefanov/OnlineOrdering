using System;
using System.Collections.Generic;
using System.Text;

namespace OnlineOrdering.Stationery.Business.DomainService.Implementation.Users.UserDto
{
    public class ProfileTeamMemberDto
    {
        public int MemberId { get; set; }
        public string MemberName { get; set; }
        public string MemberUnit { get; set; }
        public string ImgName { get; set; }
        //public byte[] MemberProfileImage { get; set; }
    }
}
