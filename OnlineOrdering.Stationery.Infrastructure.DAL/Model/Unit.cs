using System;
using System.Collections.Generic;
using System.Text;

namespace OnlineOrdering.Stationery.Infrastructure.DAL.Model
{
    public class Unit
    {
        public Unit()
        {
            Orders = new HashSet<Order>();
            Users = new HashSet<User>();
        }
        public int UnitId { get; set; }
        public string UnitName { get; set; }
        public string Address { get; set; }
        public string Email { get; set; }
        public string Region { get; set; }
        public string Location { get; set; }
        public string PhoneNumber { get; set; }
        public virtual ICollection<Order> Orders { get; set; }
        public virtual ICollection<User> Users { get; set; }
    }
}
