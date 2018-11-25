using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OnlineOrdering.Stationery.API.WebAPI.Model.Order;
using OnlineOrdering.Stationery.Business.CQRS.Commands;
using OnlineOrdering.Stationery.Business.CQRS.Queries;
using OnlineOrdering.Stationery.Business.Service.Dto.Orders;
using OnlineOrdering.Stationery.Business.Service.Queries.Orders;
using OnlineOrdering.Stationery.Infrastructure.DAL;

namespace OnlineOrdering.Stationery.API.WebAPI.Controllers.Orders.Queries
{
    [Produces("application/json")]
    [Route("api/ordering")]
    public class GetProductsController : Controller
    {
        private readonly IMapper _mapper;
        private readonly StationeryContext _context;
        private readonly IQueryProcessor _queryProcessor;
        private readonly ICommandDispatcher _commandDispatcher;

        public GetProductsController(IMapper mapper, StationeryContext context, IQueryProcessor queryProcessor, ICommandDispatcher commandDispatcher)
        {
            _mapper = mapper;
            _context = context;
            _queryProcessor = queryProcessor;
            _commandDispatcher = commandDispatcher;
        }

        [HttpPost("getProducts")]
        public IActionResult GetProducts([FromBody]ProductSearchCriteriaModel criteria)
        {
            try
            {
                var criteriaMp = _mapper.Map<ProductSearchCriteriaDto>(criteria);

                var query = new ProductsQuery(criteriaMp);
                var products = _queryProcessor.Process(query);

                return new OkObjectResult(products);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}