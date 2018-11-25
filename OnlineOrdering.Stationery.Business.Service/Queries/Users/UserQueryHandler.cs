using OnlineOrdering.Stationery.Business.CQRS.Queries;
using OnlineOrdering.Stationery.Infrastructure.DAL;
using OnlineOrdering.Stationery.Infrastructure.DAL.Model;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace OnlineOrdering.Stationery.Business.Service.Queries.Users
{
    //public class UserQueryHandler :
    //     IHandleQuery<AllUsersQuery, IEnumerable<User>>
    //     //IHandleQuery<UserByIdQuery, User>
    //{
    //    private readonly StationeryContext _context;

    //    public UserQueryHandler(StationeryContext context)
    //    {
    //        _context = context;
    //    }

    //    public IEnumerable<User> Execute(AllUsersQuery query)
    //    {
    //        var result = _context.Users;
    //        return result;
    //    }

    //    //public User Execute(UserByIdQuery query)
    //    //{
    //    //    var result = _context.Users.Find(query.Id);
    //    //    return result;
    //    //}
    //}
}
