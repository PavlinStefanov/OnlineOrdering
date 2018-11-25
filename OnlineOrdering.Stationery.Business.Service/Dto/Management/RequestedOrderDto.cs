using System;
using System.Collections.Generic;
using System.Text;

namespace OnlineOrdering.Stationery.Business.Service.Dto.Management
{
    public class RequestedOrderDto
    {
        public int OrderId { get; set; }
        public string Unit { get; set; }
        public string Region { get; set; }
        public string Employee { get; set; }
        public int StatusId { get; set; }
        public int ProductsCount { get; set; }
        public bool IsLinked { get; set; }
        public bool IsCompleted { get; set; }
        public decimal TotalPrice { get; set; }
        public List<RequestedProductDto> Products { get; set; }
    }
}
