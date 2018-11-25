using System;
using System.Collections.Generic;
using System.Text;

namespace OnlineOrdering.Stationery.Business.Service.Dto.Orders
{
    public class ProductsHistoryDto
    {
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public int CountOfProducts { get; set; }
        public string EComment { get; set; }
        public string RMComment { get; set; }
        public string OCComment { get; set; }
    }
}
