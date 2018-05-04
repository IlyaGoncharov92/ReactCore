import { DeliveryType, GenderType, OrderStatus, RequestStatus, UserRole } from './dto.enums';

export class OperationResult<T>
{
  public object: T;
  public success: boolean;
  public message: string;
}

export class Entity
{
  public id: number;
}

export class UserDetails extends Entity
{
  public email: number;
  public password: string;
  public firstName: string;
  public lastName: string;
  public role: UserRole;
  public agency: AgencyDetails;
  public agencyManager: AgencyManagerDetails;
  public volunteer: VolunteerDetails;
}

export class AgencyDetails
{
  public userId: number;
  public contactName: string;
  public location: string;
  public bulk: number;
  public individual: number;
  public pickup: number;
  public requests: RequestDetails[] = [];
}

export class AgencyManagerDetails
{
  public userId: number;
  public agencyId: number;
}

export class VolunteerDetails
{
  public userId: number;
  public orders: OrderDetails[] = [];
}

export class ChildDetails extends Entity
{
  public name: string;
  public age: number;
  public gender: GenderType;
  public requestId: number;
  public orderId: number;
}

class BaseRequestDetails extends Entity
{
  public familyName: string;
  public streetAddress: string;
  public city: string;
  public deliveryType: DeliveryType;
  public agencyId: number;
  public children: ChildDetails[] = [];
}

export class OrderDetails extends BaseRequestDetails
{
  public volunteerId: number;
  public status: OrderStatus;
}

export class RequestDetails extends BaseRequestDetails
{
  public status: RequestStatus;
}
