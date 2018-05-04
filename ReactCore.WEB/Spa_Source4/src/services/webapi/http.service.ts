import axios, { AxiosInstance, AxiosPromise, AxiosRequestConfig, AxiosResponse } from 'axios';
import { Observable, throwError }                                                from 'rxjs/index';
import { AuthService }                                                           from '../auth.service';
import { catchError }                                                            from 'rxjs/internal/operators';

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

class Interceptor
{
  private authService = new AuthService();

  public constructor(private httpClient: AxiosInstance)
  {
    httpClient.interceptors.request.use(this.onFulfilled);
    //httpClient.interceptors.response.use(null, this.onFulfilled1);
  }

  private onFulfilled = (config: AxiosRequestConfig) =>
  {
    const accessToken = this.authService.accessToken;

    if (accessToken)
    {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  };

  private onFulfilled1 = (err: any) =>
  {
    console.log('INTER ERR', err);
    throw err;
  };
}

export class BaseHttpService
{
  private _httpClient: AxiosInstance;

  protected constructor(config: IAxiosConfig = {})
  {
    this._httpClient = axios.create(config);

    const interceptor = new Interceptor(this._httpClient);
  }

  protected makeRequest<T>(method: HttpRequestMethod, url: string, data?: any): Observable<T>
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
    })
      .pipe(
      catchError(err =>
      {
        console.log('pipe ERR', err);
        return throwError(err);
      })
    );
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
