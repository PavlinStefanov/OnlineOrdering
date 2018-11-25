using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OnlineOrdering.Stationery.API.WebAPI.Model.Management;
using OnlineOrdering.Stationery.Business.CQRS.Commands;
using OnlineOrdering.Stationery.Business.CQRS.Queries;
using OnlineOrdering.Stationery.Business.Service.Commands.Management;
using OnlineOrdering.Stationery.Infrastructure.DAL;
using OnlineOrdering.Stationery.Infrastructure.DAL.Helpers;

namespace OnlineOrdering.Stationery.API.WebAPI.Controllers.Management.Commands
{
    [Produces("application/json")]
    [Route("api/ordering")]
    public class EndOrderController : Controller
    {
        private readonly IMapper _mapper;
        private readonly StationeryContext _context;
        private readonly IQueryProcessor _queryProcessor;
        private readonly ICommandDispatcher _commandDispatcher;

        public EndOrderController(IMapper mapper, StationeryContext context, IQueryProcessor queryProcessor, ICommandDispatcher commandDispatcher)
        {
            _mapper = mapper;
            _context = context;
            _queryProcessor = queryProcessor;
            _commandDispatcher = commandDispatcher;
        }

        [HttpPatch("completeOrder")]
        public IActionResult EndOrderByID([FromBody] CompleteOrderModel model)
        {
            try
            {
                var command = new CompleteOrderCommand(model.orderId);
                _commandDispatcher.DispatchCommand(command);

                return new OkObjectResult("Order complete successfully!");
            }
            catch (AppException ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}