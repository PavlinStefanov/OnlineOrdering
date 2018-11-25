using System;
using System.Collections.Generic;
using System.Text;

namespace OnlineOrdering.Stationery.Business.Service.Dto.Orders
{
    public class ProductDto
    {
        public string View { get; set; }
        public int VendorId { get; set; }
        public int? ArticulId { get; set; }
        public int ProductId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal UnitPrice { get; set; }
        public string Measure { get; set; }
        public int CountOfProducts { get; set; }
        public decimal TotalPrice { get; set; }
    }
}
