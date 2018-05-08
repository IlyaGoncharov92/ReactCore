import axios, { AxiosError, AxiosInstance, AxiosPromise, AxiosRequestConfig } from 'axios';
import { Observable, throwError }                                             from 'rxjs/index';
import { AuthService }                                                        from '../auth.service';
import { catchError, map, mergeMap }                                          from 'rxjs/internal/operators';
import { AccessTokenService }                                                 from './access.token.service';

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
}

class HttpErrorHandler<T>
{
  private accessTokenService = new AccessTokenService();

  public constructor(private observable: Observable<T>)
  {
  }

  public handle(): Observable<T>
  {
    return this.observable.pipe(
      catchError((error: AxiosError) =>
      {
        switch (error.response.status)
        {
          case 401:
            return this.accessTokenService.refresh().pipe(
              mergeMap(() => this.observable)
            );
          case 500:
            console.log('error', error.response);
            break;
        }

        return throwError(error);
      })
    );
  }
}

class BaseHttpService
{
  private authService = new AuthService();

  private _httpClient: AxiosInstance;

  protected constructor(config: IAxiosConfig = {})
  {
    this._httpClient = axios.create(config);

    const interceptor = new Interceptor(this._httpClient);
  }

  protected makeRequest<T>(method: HttpRequestMethod, url: string, data?: any): Observable<T>
  {
    const accessToken = this.authService.accessToken;

    const requestConfig: AxiosRequestConfig = {
      url: url,
      method: HttpRequestMethod[method],
      data: data,
      headers: {
        Test: 'zzzz',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`
      }
    };

    let request: AxiosPromise<T> = this._httpClient.request(requestConfig);

    const observable = new Observable<T>(subscriber =>
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
    }).pipe(
      map(x => x)
    );

    return new HttpErrorHandler<T>(observable).handle();
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
