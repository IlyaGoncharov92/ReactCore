export interface IPage
{
  path: string;
}

export const PageDefault: IPage = {
  path: '/'
};

export const PageAuth: IPage = {
  path: '/auth'
};

export const PageLogin: IPage = {
  path: PageAuth.path + '/login'
};

export const PageRegister: IPage = {
  path: PageAuth.path + '/register'
};

export const PageMain: IPage = {
  path: '/main'
};

export const PageRequests: IPage = {
  path: PageMain.path + '/requests'
};

export const PageAgencies: IPage = {
  path: PageMain.path + '/agencies'
};

export const PageDeliveries: IPage = {
  path: PageMain.path + '/deliveries'
};

export const PageVolunteers: IPage = {
  path: PageMain.path + '/volunteers'
};

export const PageManagers: IPage = {
  path: PageMain.path + '/managers'
};

export class Page
{
  public static readonly default: IPage = PageDefault;

  public static readonly auth: IPage = PageAuth;
  public static readonly login: IPage = PageLogin;
  public static readonly register: IPage = PageRegister;

  public static readonly main: IPage = PageMain;
  public static readonly requests: IPage = PageRequests;
  public static readonly agencies: IPage = PageAgencies;
  public static readonly deliveries: IPage = PageDeliveries;
  public static readonly volunteers: IPage = PageVolunteers;
  public static readonly managers: IPage = PageManagers;
}
