using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineOrdering.Stationery.API.WebAPI.Model.Management
{
    public class SetProductModel
    {
        public int orderId { get; set; }
        public int productId { get; set; }
        public string comment { get; set; }
        public int productsCount { get; set; }
        public int statusId { get; set; }
    }
}
