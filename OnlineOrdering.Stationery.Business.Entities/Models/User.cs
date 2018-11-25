using System;
using System.Collections.Generic;
using System.Text;

namespace OnlineOrdering.Stationery.Business.Entities.Models
{
    public class User
    {
        public int UserId { get; set; }
        public string FirstName{ get; set; }
        public string LastName { get; set; }
        public string UserName { get; set; }
        public string CorporateEmail { get; set; }
        public byte[] ProfileImage { get; set; }
        public byte[] BackGroundImage { get; set; }
        public int IsActive { get; set; }
        public string ImgName { get; set; }
        public int? ManagerId { get; set; }
        public int UnitId { get; set; }
        public Unit Unit { get; set; }
        public int JobPositionId { get; set; }
        public JobPosition JobPosition { get;set; }
    }
}
