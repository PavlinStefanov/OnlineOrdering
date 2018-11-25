using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OnlineOrdering.Stationery.Business.CQRS.Commands;
using OnlineOrdering.Stationery.Business.CQRS.Queries;
using OnlineOrdering.Stationery.Business.Service.Queries.Users;
using OnlineOrdering.Stationery.Infrastructure.DAL;

namespace OnlineOrdering.Stationery.API.WebAPI.Controllers.Users.Queries
{
    [Produces("application/json")]
    [Route("api/ordering")]
    public class GetUserByIdController : Controller
    {
        private readonly IMapper _mapper;
        private readonly StationeryContext _context;
        private readonly IQueryProcessor _queryProcessor;
        private readonly ICommandDispatcher _commandDispatcher;

        public GetUserByIdController(IMapper mapper, StationeryContext context, IQueryProcessor queryProcessor, ICommandDispatcher commandDispatcher)
        {
            _mapper = mapper;
            _context = context;
            _queryProcessor = queryProcessor;
            _commandDispatcher = commandDispatcher;
        }

        // GET api/ordering/getUser
        [HttpGet("getUser")]
        public IActionResult GetUserAsync()
        {
            try
            {
                var query = new UserByIdQuery(17);
                var user = _queryProcessor.Process(query);

                return new OkObjectResult(user);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}