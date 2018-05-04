import axios, { AxiosInstance, AxiosPromise, AxiosRequestConfig, AxiosResponse } from 'axios';
import { Observable }                                                            from 'rxjs/index';

export enum HttpRequestMethod
{
  Get     = 0,
  Post    = 1,
  Put     = 2,
  Delete  = 3,
  Options = 4,
  Head    = 5,
  Patch   = 6,
}

export interface IAxiosConfig extends AxiosRequestConfig
{
  localCache?: boolean;
}

export class BaseHttpService
{
  private _httpClient: AxiosInstance;

  protected constructor(config: IAxiosConfig = {})
  {
    this._httpClient = axios.create(config);
  }

  protected makeRequest<T>(method: HttpRequestMethod, url: string, data?: any)
  {
    const requestConfig: AxiosRequestConfig = {
      url: url,
      method: HttpRequestMethod[method],
      data: data
    };

    let request: AxiosPromise<T> = this._httpClient.request(requestConfig);

    return new Observable<T>(subscriber =>
    {
      request
        .then(response =>
        {
          subscriber.next(response.data);
          subscriber.complete();
        })
        .catch((error: Error) =>
        {
          subscriber.error(error);
          subscriber.complete();
        });
    });
  }
}

export class HttpService extends BaseHttpService
{
  public constructor()
  {
    const axiosConfig: IAxiosConfig = {
      baseURL: 'http://localhost:2772'
    };

    super(axiosConfig);
  }

  public get<T>(url: string): Observable<T>
  {
    return this.makeRequest(HttpRequestMethod.Get, url);
  }

  public post<T>(url: string, data: any): Observable<T>
  {
    return this.makeRequest(HttpRequestMethod.Post, url, data);
  }
}
