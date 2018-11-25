using System;
using System.Collections.Generic;
using System.Text;

namespace OnlineOrdering.Stationery.Business.Service.Dto.Orders
{
    public class OrderSearchCriteriaDto
    {
        public int? StatusId { get; set; }
        public int? UnitId { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public int pageNumber { get; set; }
    }
}
