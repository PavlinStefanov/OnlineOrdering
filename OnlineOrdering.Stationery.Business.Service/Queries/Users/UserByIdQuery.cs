using OnlineOrdering.Stationery.Business.CQRS.Queries;
using OnlineOrdering.Stationery.Business.Service.Dto.Users;
using OnlineOrdering.Stationery.Infrastructure.DAL.Model;
using System;

namespace OnlineOrdering.Stationery.Business.Service.Queries.Users
{
    public class UserByIdQuery : IQuery<UserDto>
    {
        public UserByIdQuery(int id)
        {
            Id = id;
        }

        public int Id { get; set; }
    }
}
