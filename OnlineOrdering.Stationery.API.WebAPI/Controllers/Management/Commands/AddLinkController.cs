using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OnlineOrdering.Stationery.Business.CQRS.Commands;
using OnlineOrdering.Stationery.Business.CQRS.Queries;
using OnlineOrdering.Stationery.Business.Service.Commands.Management;
using OnlineOrdering.Stationery.Infrastructure.DAL;

namespace OnlineOrdering.Stationery.API.WebAPI.Controllers.Management.Commands
{
    [Produces("application/json")]
    [Route("api/ordering")]
    public class AddLinkController : Controller
    {
        private readonly IMapper _mapper;
        private readonly StationeryContext _context;
        private readonly IQueryProcessor _queryProcessor;
        private readonly ICommandDispatcher _commandDispatcher;

        public AddLinkController(IMapper mapper,
            StationeryContext context,
            IQueryProcessor queryProcessor,
            ICommandDispatcher commandDispatcher)
        {
            _mapper = mapper;
            _context = context;
            _queryProcessor = queryProcessor;
            _commandDispatcher = commandDispatcher;
        }

        [HttpPatch("addToLink")]
        public IActionResult AddToLink([FromBody] OrdersLinkModel model)
        {
            try
            {
                int rmId = 17;
                List<int> orders = new List<int>();
                orders = model.Orders;

                var command = new AddToLinkCommand(orders, rmId);
                _commandDispatcher.DispatchCommand(command);

                return new OkObjectResult("Orders to Link added successfully!");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }

    public class OrdersLinkModel
    {
        public List<int> Orders { get; set; }
    }
}