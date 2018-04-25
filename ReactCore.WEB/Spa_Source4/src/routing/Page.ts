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

export const PageUsers: IPage = {
  path: PageMain.path + '/users'
};

export const PageProjects: IPage = {
  path: PageMain.path + '/projects'
};

export class Page
{
  public static readonly default: IPage = PageDefault;

  public static readonly auth: IPage = PageAuth;
  public static readonly login: IPage = PageLogin;
  public static readonly register: IPage = PageRegister;

  public static readonly main: IPage = PageMain;
  public static readonly users: IPage = PageUsers;
  public static readonly projects: IPage = PageProjects;
}
