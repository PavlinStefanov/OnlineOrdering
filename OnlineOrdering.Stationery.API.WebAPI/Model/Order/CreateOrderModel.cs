using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineOrdering.Stationery.API.WebAPI.Model.Order
{
    public class CreateOrderModel
    {
        public double TotalAmount { get; set; }
        public List<CreateProductModel> Products { get; set; }
    }
}
