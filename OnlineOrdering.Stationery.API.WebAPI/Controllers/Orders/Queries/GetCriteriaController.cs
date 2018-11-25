using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OnlineOrdering.Stationery.Business.CQRS.Commands;
using OnlineOrdering.Stationery.Business.CQRS.Queries;
using OnlineOrdering.Stationery.Business.Service.Queries.Orders;
using OnlineOrdering.Stationery.Infrastructure.DAL;

namespace OnlineOrdering.Stationery.API.WebAPI.Controllers.Orders.Queries
{
    [Produces("application/json")]
    [Route("api/ordering")]
    public class GetCriteriaController : Controller
    {
        private readonly IMapper _mapper;
        private readonly StationeryContext _context;
        private readonly IQueryProcessor _queryProcessor;
        private readonly ICommandDispatcher _commandDispatcher;

        public GetCriteriaController(IMapper mapper, StationeryContext context, IQueryProcessor queryProcessor, ICommandDispatcher commandDispatcher)
        {
            _mapper = mapper;
            _context = context;
            _queryProcessor = queryProcessor;
            _commandDispatcher = commandDispatcher;
        }

        [HttpGet("getCriteria")]
        public IActionResult getCriteria()
        {
            try
            {
                var query = new CriteriaQuery();
                var criteria = _queryProcessor.Process(query);

                return new OkObjectResult(criteria);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}