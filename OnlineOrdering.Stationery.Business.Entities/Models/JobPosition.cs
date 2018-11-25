using System;
using System.Collections.Generic;
using System.Text;

namespace OnlineOrdering.Stationery.Business.Entities.Models
{
    public class JobPosition
    {

        public JobPosition()
        {
            Users = new HashSet<User>();
        }
        public int JobPositionId { get; set; }
        public string Name { get; set; }
        public bool IsActive { get; set; }
        public virtual ICollection<User> Users { get; set; }
    }
}
