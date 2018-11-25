using System;
using System.Collections.Generic;
using System.Text;

namespace OnlineOrdering.Stationery.Infrastructure.DAL.Model
{
    public class OrderDetails
    {
        public int OrderId { get; set; }
        public Order Order { get; set; }
        public int ProductId { get; set; }
        public Product Product { get; set; }
        public int StatustId { get; set; }
        public int Quantity { get; set; }
        public decimal UnitPrice { get; set; }
        public string EComment { get; set; }
        public string RMComment { get; set; }
        public string OCComment { get; set; }

        public void SetProduct(int statusId, string comment, int count, int id)
        {
            StatustId = statusId;
            Quantity = count;
            if (id == 2)
                RMComment = comment;
            else
                OCComment = comment;
        }
    }
}
