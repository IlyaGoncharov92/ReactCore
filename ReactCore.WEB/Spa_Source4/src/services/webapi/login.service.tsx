import { Authentication }     from '../../models/auth.models';
import { OperationResult }    from '../../models/dto.models';
import { Observable }         from 'rxjs/index';
import { AccessTokenService } from './access.token.service';

export class LoginService
{
  private accessTokenService = new AccessTokenService();

  public login(email: string, password: string): Observable<OperationResult<Authentication>>
  {
    return this.accessTokenService.authenticate(email, password);
  }
}
