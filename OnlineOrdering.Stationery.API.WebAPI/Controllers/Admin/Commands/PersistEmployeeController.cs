 using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OnlineOrdering.Stationery.API.WebAPI.Model.Admin;
using OnlineOrdering.Stationery.Business.CQRS.Commands;
using OnlineOrdering.Stationery.Business.CQRS.Queries;
using OnlineOrdering.Stationery.Business.Service.Commands.Admin;
using OnlineOrdering.Stationery.Business.Service.Dto.Admin;
using OnlineOrdering.Stationery.Infrastructure.DAL;
using OnlineOrdering.Stationery.Infrastructure.DAL.Helpers;

namespace OnlineOrdering.Stationery.API.WebAPI.Controllers.Admin.Commands
{
    [Produces("application/json")]
    [Route("api/PersistEmployee")]
    public class PersistEmployeeController : Controller
    {
        private readonly IMapper _mapper;
        private readonly StationeryContext _context;
        private readonly IQueryProcessor _queryProcessor;
        private readonly ICommandDispatcher _commandDispatcher;

        public PersistEmployeeController(IMapper mapper, StationeryContext context, IQueryProcessor queryProcessor, ICommandDispatcher commandDispatcher)
        {
            _mapper = mapper;
            _context = context;
            _queryProcessor = queryProcessor;
            _commandDispatcher = commandDispatcher;
        }
        // end point for employee saving
        [HttpPost("persistEmployee")]
        public IActionResult PersistEmployee([FromBody] PersistEmployeeModel model)
        {
            try
            {
                var persistMap = _mapper.Map<PersistEmployeeDto>(model);

                var command = new PersistEmployeeCommand(persistMap);
                _commandDispatcher.DispatchCommand(command);

                return new OkObjectResult("OK");
            }
            catch (AppException ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}