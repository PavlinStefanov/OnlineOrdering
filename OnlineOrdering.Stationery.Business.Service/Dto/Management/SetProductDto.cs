using System;
using System.Collections.Generic;
using System.Text;

namespace OnlineOrdering.Stationery.Business.Service.Dto.Management
{
    public class SetProductDto
    {
        public int orderId { get; set; }
        public int productId { get; set; }
        public string comment { get; set; }
        public int productsCount { get; set; }
        public int statusId { get; set; }
    }
}
