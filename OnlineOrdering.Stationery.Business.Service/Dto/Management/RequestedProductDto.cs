using System;
using System.Collections.Generic;
using System.Text;

namespace OnlineOrdering.Stationery.Business.Service.Dto.Management
{
    public class RequestedProductDto
    {
        public int ProductId { get; set; }
        public int? ArticuleId { get; set; }
        public string ProductName { get; set; }
        public decimal UnitPrice { get; set; }
        public decimal TotalPrice { get; set; }
        public int ProductsCount { get; set; }
        public int StatusId { get; set; }
        public string Comment { get; set; }
    }
}
