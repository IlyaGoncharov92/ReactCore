import { Observable }                 from 'rxjs/Rx';
import { Authentication, JWTRequest } from '../../models/auth.models';
import { OperationResult }            from '../../models/dto.models';
import { HttpService }                from './http.service';
import { AuthService }                from '../auth.service';
import { map }                        from 'rxjs/operators';
import { State }                      from '../../store/configureStore';

export class AccessTokenService
{
  private http = new HttpService();
  private authService = new AuthService();

  public authenticate(email: string, password: string): Observable<OperationResult<Authentication>>
  {
    const request = new JWTRequest();
    request.grant_type = 'password';
    request.username = email;
    request.password = password;

    return this.http.post('api/token', request).pipe(
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

  public refresh(): Observable<OperationResult<Authentication>>
  {
    const auth = State.authentication;

    if (!auth.authentication)
    {
      // TODO: redirect
    }

    const request = new JWTRequest();
    request.grant_type = 'refresh_token';
    request.username = auth.authentication.user.email;
    request.refresh_token = auth.authentication.refresh_token;

    return this.http.post('api/token', request).pipe(
      map((response: OperationResult<Authentication>) =>
      {
        console.log('response', response);

        if (response.success)
        {
          this.authService.initialize(response.object);
        }
        else
        {
          new Error(response.message);
        }
        return response;
      })
    );
  }
}
