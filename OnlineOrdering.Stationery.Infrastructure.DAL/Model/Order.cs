using System;
using System.Collections.Generic;
using System.Text;

namespace OnlineOrdering.Stationery.Infrastructure.DAL.Model
{
    public class Order
    {
        public Order()
        {
            OrderDetails = new HashSet<OrderDetails>();
        }
        public void Create(int orderStatusId, decimal totalAmount, int unitId, int userId)
        {
            OrderStatusId = orderStatusId;
            OrderDate = DateTime.Now;
            TotalAmount = totalAmount;
            UnitId = unitId;
            UserId = userId;
        }
        public int OrderId { get; set; }
        public DateTime OrderDate { get; set; }
        public decimal TotalAmount { get; set; }
        public int UnitId { get; set; }
        public Unit Unit { get; set; }
        public int UserId { get; set; }
        public int OrderStatusId { get; set; }
        public OrderStatus OrderStatus { get; set; }
        public string OrderComment { get; set; }
        public bool IsLinkedRm { get; set; }
        public bool IsCompletedRm { get; set; }
        public bool IsLinkedOc { get; set; }
        public bool IsCompletedOc { get; set; }
        public int? LinkId { get; set; }
        public LinkedOrder LinkedOrder { get; set; }
        public virtual ICollection<OrderDetails> OrderDetails { get; set; }
    }
}
