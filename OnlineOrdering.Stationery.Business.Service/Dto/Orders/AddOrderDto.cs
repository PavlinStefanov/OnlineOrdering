using System;
using System.Collections.Generic;
using System.Text;

namespace OnlineOrdering.Stationery.Business.Service.Dto.Orders
{
    public class AddOrderDto
    {
        public decimal TotalAmount { get; set; }
        public List<AddProductDto> Products { get; set; }
    }
}
