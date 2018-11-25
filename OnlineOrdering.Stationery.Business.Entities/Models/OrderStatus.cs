using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OnlineOrdering.Stationery.Business.Entities.Models
{
    public class OrderStatus
    {
        public OrderStatus()
        {
            OrderStatusHistories = new HashSet<OrderStatusHistory>();
        }
        public int OrderStatusId { get; set; }
        public string Name { get; set; }
        public string Flow { get; set; }
        public string Description { get; set; }
        public virtual ICollection<OrderStatusHistory> OrderStatusHistories { get; set; }
    }
}
