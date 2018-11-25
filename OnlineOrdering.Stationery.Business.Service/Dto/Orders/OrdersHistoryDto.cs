using System;
using System.Collections.Generic;
using System.Text;

namespace OnlineOrdering.Stationery.Business.Service.Dto.Orders
{
    public class OrdersHistoryDto
    {
        public int OrderId { get; set; }
        public string Employee { get; set; }
        public string CreatedDate { get; set; }
        public decimal Total { get; set; }
        public string Status { get; set; }
        public List<ProductsHistoryDto> Products { get; set; }
    }
}
