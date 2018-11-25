using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OnlineOrdering.Stationery.Business.CQRS.Commands;
using OnlineOrdering.Stationery.Business.CQRS.Queries;
using OnlineOrdering.Stationery.Business.Service.Queries.Shared;

namespace OnlineOrdering.Stationery.API.WebAPI.Controllers.Shared.Queries
{
    [Produces("application/json")]
    [Route("api/ordering")]
    public class GetValueObjectsController : Controller
    {
        private readonly IQueryProcessor _queryProcessor;
        private readonly ICommandDispatcher _commandDispatcher;

        public GetValueObjectsController(IQueryProcessor queryProcessor, ICommandDispatcher commandDispatcher)
        {
            _queryProcessor = queryProcessor;
            _commandDispatcher = commandDispatcher;
        }

        // GET api/ordering/getValueObjects
        [HttpGet("getValueObjects")]
        public IActionResult GetValueObjects()
        {
            try
            {
                int userId = 17;

                var query = new ValueObjectQuery(userId);
                var values = _queryProcessor.Process(query);

                return new OkObjectResult(values);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}