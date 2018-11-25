using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineOrdering.Stationery.API.WebAPI.Model.Order
{
    public class CreateProductModel
    {
        public int ProductId { get; set; }
        public string Comment { get; set; }
        public int Quantity { get; set; }
        public decimal UnitPrice { get; set; }
    }
}
