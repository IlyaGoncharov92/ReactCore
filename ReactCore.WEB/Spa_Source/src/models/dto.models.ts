export class UserDetails
{
  public id: number;
  public email: string;
  public password: string;
  public firstName: string;
  public lastName: string;
  public projects: ProjectDetails[] = [];
}

export class ClientDetails
{
  public id: number;
  public name: string;
  public projects: ProjectDetails[] = [];
}

export class ProjectDetails
{
  public id: number;
  public name: string;
  public color: string;
  public users: UserDetails[] = [];
  public client: ClientDetails = new ClientDetails();
}