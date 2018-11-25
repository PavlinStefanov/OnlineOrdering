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
using OnlineOrdering.Stationery.Business.Service.Dto.Management;
using OnlineOrdering.Stationery.Infrastructure.DAL;

namespace OnlineOrdering.Stationery.API.WebAPI.Controllers.Management.Commands
{
    [Produces("application/json")]
    [Route("api/ordering")]
    public class ProcessOrderController : Controller
    {
        private readonly IMapper _mapper;
        private readonly StationeryContext _context;
        private readonly IQueryProcessor _queryProcessor;
        private readonly ICommandDispatcher _commandDispatcher;

        public ProcessOrderController(IMapper mapper, StationeryContext context, IQueryProcessor queryProcessor, ICommandDispatcher commandDispatcher)
        {
            _mapper = mapper;
            _context = context;
            _queryProcessor = queryProcessor;
            _commandDispatcher = commandDispatcher;
        }

        [HttpPatch("setProduct")]
        public IActionResult SetProductByOrder([FromBody] SetProductModel model)
        {
            try
            {
                var userId = 2;
                var productMap = _mapper.Map<SetProductDto>(model);

                var command = new SetProductCommand(productMap, userId);
                _commandDispatcher.DispatchCommand(command);

                return new OkObjectResult("OK");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPatch("setOrder")]
        public IActionResult SetOrder([FromBody] SetOrderModel model)
        {
            try
            {
                //var userId = 2;
                var orderMap = _mapper.Map<SetOrderDto>(model);

                var command = new SetOrderCommand(orderMap);
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