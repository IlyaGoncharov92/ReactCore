import { StorageService }            from './storage.service';
import { Authentication }            from '../models/auth.models';
import { authenticationLogInAction } from '../store/authenticate/actions';
import { State }                     from '../store/configureStore';

export class AuthService
{
  private static readonly AUTHENTICATION = StorageService.NAMESPACE + 'authentication';

  private storage = new StorageService();

  public get auth(): Authentication
  {
    return this.storage.global.getObject<Authentication>(AuthService.AUTHENTICATION);
  }

  public initialize(auth: Authentication): void
  {
    State.dispatch(authenticationLogInAction(auth));

    this.storage.global.setObject<Authentication>(AuthService.AUTHENTICATION, auth);
  }
}
