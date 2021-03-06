export interface IPage
{
  path: string;
}

export const PageDefault: IPage = {
  path: '/'
};

export const PageAuth: IPage = {
  path: ''
};

export const PageDashboard: IPage = {
  path: '/dashboard'
};

export const PageUsers: IPage = {
  path: '/users'
};

export const PageProjects: IPage = {
  path: '/projects'
};

export const PageClients: IPage = {
  path: '/clients'
};

export class Page
{
  public static readonly default: IPage = PageDefault;
  public static readonly dashboard: IPage = PageDashboard;
  public static readonly users: IPage = PageUsers;
  public static readonly projects: IPage = PageProjects;
  public static readonly clients: IPage = PageClients;
}
