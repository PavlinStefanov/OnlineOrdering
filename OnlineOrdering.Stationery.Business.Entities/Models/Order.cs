using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OnlineOrdering.Stationery.Business.Entities.Models
{
    public class Order
    {
        public Order()
        {
            OrderStatusHistories = new HashSet<OrderStatusHistory>();
            OrderDetails = new HashSet<OrderDetails>();
        }
        public int OrderId { get; set; }
        public DateTime OrderDate { get; set; }
        public decimal TotalAmount { get; set; }
        public int UnitId { get; set; }
        public Unit Unit { get; set; }
        public string OrderComment { get; set; }
        public virtual ICollection<OrderStatusHistory> OrderStatusHistories { get; set; }
        public virtual ICollection<OrderDetails> OrderDetails { get; set; }
    }
}
