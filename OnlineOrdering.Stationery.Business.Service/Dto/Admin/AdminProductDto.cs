using System;
using System.Collections.Generic;
using System.Text;

namespace OnlineOrdering.Stationery.Business.Service.Dto.Admin
{
    public class AdminProductDto
    {
        public int? ArticuleId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Vendor { get; set; }
        public string Category { get; set; }
        public string SubCategory { get; set; }
        public string Measure { get; set; }
        public decimal UnitPrice { get; set; }
        public string View { get; set; }
    }
}
