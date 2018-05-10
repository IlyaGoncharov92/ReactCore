import { StorageService }                                 from './storage.service';
import { Authentication }                                 from '../models/auth.models';
import { store }                                          from '../app/App';
import { authenticationLogIn, authenticationLogInAction } from '../store/authenticate/actions';

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
    store.dispatch(authenticationLogIn(auth));

    this.storage.global.setObject<Authentication>(AuthService.AUTHENTICATION, auth);
  }
}
