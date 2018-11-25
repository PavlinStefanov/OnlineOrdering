using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace OnlineOrdering.Stationery.Infrastructure.DAL.Model
{
    public class LinkedOrder
    {
        public LinkedOrder()
        {
            Orders = new HashSet<Order>();
        }
        [Key]
        public int LinkId { get; set; }
        public DateTime DateCreated { get; set; }
        public int UserId { get; set; }
        public virtual ICollection<Order> Orders { get; set; }
    }
}
