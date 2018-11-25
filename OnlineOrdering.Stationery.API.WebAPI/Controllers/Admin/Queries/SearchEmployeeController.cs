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
using OnlineOrdering.Stationery.Business.Service.Queries.Admin;
using OnlineOrdering.Stationery.Infrastructure.DAL;

namespace OnlineOrdering.Stationery.API.WebAPI.Controllers.Admin.Queries
{
    [Produces("application/json")]
    [Route("api/ordering")]
    public class SearchEmployeeController : Controller
    {
        private readonly IMapper _mapper;
        private readonly StationeryContext _context;
        private readonly IQueryProcessor _queryProcessor;
        private readonly ICommandDispatcher _commandDispatcher;

        public SearchEmployeeController(IMapper mapper, StationeryContext context, IQueryProcessor queryProcessor, ICommandDispatcher commandDispatcher)
        {
            _mapper = mapper;
            _context = context;
            _queryProcessor = queryProcessor;
            _commandDispatcher = commandDispatcher;
        }

        [HttpPost("getEmployeeByName")]
        public IActionResult GetEmployeeByName([FromBody] EmployeeModel employee)
        {
            try
            {
                var query = new GetEmployeeQuery(employee.Name);
                var result = _queryProcessor.Process(query);

                return new OkObjectResult(result);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}