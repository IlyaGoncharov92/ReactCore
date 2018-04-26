using AutoMapper;
using ReactCore.DAL.Models;
using ReactCore.Domain.Request;

namespace ReactCore.DAL.Mapping
{
    public class RequestProfile : Profile
    {
        public RequestProfile()
        {
            CreateMap<BaseRequest, BaseRequestDetails>();
            CreateMap<BaseRequestDetails, BaseRequest>();

            CreateMap<Request, RequestDetails>();
            CreateMap<RequestDetails, Request>();

            CreateMap<Order, OrderDetails>();
            CreateMap<OrderDetails, Order>();
        }
    }
}
