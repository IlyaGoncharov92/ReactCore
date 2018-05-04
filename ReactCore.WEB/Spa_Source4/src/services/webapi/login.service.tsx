import { HttpService }                from './http.service';
import { JWTRequest, Authentication } from '../../models/auth.models';
import { OperationResult }            from '../../models/dto.models';
import { AuthService }                from '../auth.service';
import { Observable }                 from 'rxjs/index';
import { map }                        from 'rxjs/operators';

export class LoginService
{
  private http = new HttpService();
  private authService = new AuthService();

  public login(username: string, password: string): Observable<OperationResult<Authentication>>
  {
    const request = new JWTRequest();
    request.grant_type = 'password';
    request.username = username;
    request.password = password;

    return this.http.post('api/token', request)
      .pipe(
        map((response: OperationResult<Authentication>) =>
        {
          console.log('response', response);

          if (response.success)
          {
            this.authService.initialize(response.object);
          }
          return response;
        })
      );
  }
}
