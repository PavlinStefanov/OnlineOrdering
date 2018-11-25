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
using OnlineOrdering.Stationery.Business.Service.Commands.Orders;
using OnlineOrdering.Stationery.Business.Service.Dto.Orders;
using OnlineOrdering.Stationery.Infrastructure.DAL;

namespace OnlineOrdering.Stationery.API.WebAPI.Controllers.Orders.Commands
{
    [Produces("application/json")]
    [Route("api/ordering")]
    public class AddOrderController : Controller
    {
        private readonly IMapper _mapper;
        private readonly StationeryContext _context;
        private readonly IQueryProcessor _queryProcessor;
        private readonly ICommandDispatcher _commandDispatcher;

        public AddOrderController(IMapper mapper, StationeryContext context, IQueryProcessor queryProcessor, ICommandDispatcher commandDispatcher)
        {
            _mapper = mapper;
            _context = context;
            _queryProcessor = queryProcessor;
            _commandDispatcher = commandDispatcher;
        }

        [HttpPost("createOrder")]
        public IActionResult CreateOrder([FromBody] CreateOrderModel order)
        {
            try
            {
                var userId = 17;
                var orderMap = _mapper.Map<AddOrderDto>(order);

                var command = new CreateOrderCommand(orderMap, userId);
                _commandDispatcher.DispatchCommand(command);

                return new OkObjectResult("OK");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}