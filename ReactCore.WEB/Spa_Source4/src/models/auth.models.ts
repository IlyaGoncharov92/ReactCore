type GrantType = 'password' | 'refresh_token'

export class JWTRequest
{
  public grant_type: GrantType;
  public refresh_token: string;
  public username: string;
  public password: string;
}

export class Authentication
{
  public access_token: string;
  public expires_in: number;
  public refresh_token: string;
  public username: string;
}
