import { BrowserStorage } from '../library/common.library';

export class StorageService
{
  public static readonly VERSION = 3;

  public static readonly NAMESPACE = 'toys.';

  private _global: BrowserStorage;

  constructor()
  {
    this._global = new BrowserStorage([StorageService.VERSION, 'global'].join(':'));
  }

  public get global(): BrowserStorage
  {
    return this._global;
  }
}
