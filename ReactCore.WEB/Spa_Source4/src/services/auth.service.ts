import { StorageService } from './storage.service';
import { Authentication } from '../models/auth.models';

export class AuthService
{
  private static readonly AUTHENTICATION = StorageService.NAMESPACE + 'authentication';

  private storage = new StorageService();
  private auth: Authentication;

  public constructor()
  {
    this.auth = this.storage.global.getObject<Authentication>(AuthService.AUTHENTICATION);
  }

  public get refreshToken(): string
  {
    return this.auth ? this.auth.refresh_token : null;
  }

  public get accessToken(): string
  {
    return this.auth ? this.auth.access_token : null;
  }

  public get authentication(): Authentication
  {
    return this.auth;
  }

  public initialize(auth: Authentication): void
  {
    this.auth = auth;
    this.storage.global.setObject<Authentication>(AuthService.AUTHENTICATION, auth);
  }
}
