using System;
using System.Collections.Generic;
using System.Text;

namespace OnlineOrdering.Stationery.Business.Service.Dto.Orders
{
    public class AddProductDto
    {
        //public int OrderId { get; set; }
        public int ProductId { get; set; }
        public string Comment { get; set; }
        //public bool IsApproved { get; set; }
        public int Quantity { get; set; }
        public decimal UnitPrice { get; set; }
    }
}
