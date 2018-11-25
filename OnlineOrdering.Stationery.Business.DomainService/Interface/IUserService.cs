
using OnlineOrdering.Stationery.Business.DomainService.Implementation.Users.UserDto;
using System;
using System.Threading.Tasks;

namespace OnlineOrdering.Stationery.Business.DomainService.Interface
{
    public interface IUserService
    {
        Task<ProfileDto> CreateProfile(ProfileRequestDto createProfile);
        ProfileDto GetProfile(int userId);
    }
}
