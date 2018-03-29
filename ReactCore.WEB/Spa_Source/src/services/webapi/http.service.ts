import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';


export abstract class ContentType
{
  public static APPLICATION_JSON: string = 'application/json';
  public static APPLICATION_FORM_URLENCODED: string = 'application/x-www-form-urlencoded';
  public static MULTIPART_FORM_DATA: string = 'multipart/form-data';
}

export abstract class HttpHeader
{
  public static CONTENT_TYPE: string = 'Content-Type';
  public static AUTHORIZATION: string = 'Authorization';
  public static ACCEPT: string = 'Accept';
  public static REVISION: string = 'X-Revision';
  public static BUILD_NUMBER: string = 'X-BuildNumber';
  public static CLIENT: string = 'X-Client';
  public static MESSAGE_ID: string = 'X-MessageId';
}

export type HttpResponseBody = ArrayBuffer | Blob | Document | object | string;

export type HttpRequestBody = ArrayBufferView | Blob | Document | string | FormData;

export enum HttpReadyState
{
  Unsent          = 0,
  Open            = 1,
  HeadersReceived = 2,
  Loading         = 3,
  Done            = 4,
  Cancelled       = 5,
}

export enum HttpResponseType
{
  unknown     = '',
  arraybuffer = 'arraybuffer',
  blob        = 'blob', //Partial support
  document    = 'document',
  json        = 'json', //Partial support
  text        = 'text'
}

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

export enum HttpEventType
{
  readyStateChanged = 0,
  loadStart         = 1,
  downloadProgress  = 2,
  uploadProgress    = 3,
  load              = 4,
  timeout           = 5,
  error             = 6,
  abort             = 7,
  loadEnd           = 8
}

export class HttpEvent
{
  public id: number;
  public type: HttpEventType;
  public name: string;
  public event: Event | ProgressEvent;

  public url: string;

  public request: XMLHttpRequest;

  public responseType: HttpResponseType = HttpResponseType.unknown;
  public completed: boolean = false;
  public success: boolean = false;
  public failure: boolean = false;
  public aborted: boolean = false;
  public timeouted: boolean = false;

  public total: number = 0;
  public loaded: number = 0;

  constructor(type?: HttpEventType, event?: Event | ProgressEvent)
  {
    this.type = type;
    this.name = HttpEventType[this.type];
    this.event = event;
  }

  public toString(): string
  {
    return `HttpEvent(type='${HttpEventType[this.type]}', event=${this.event})`;
  }
}

export class HttpService
{
  public get()
  {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'http://localhost:2772/api/projects/list', true);
    //xhr.open('GET', 'http://localhost:27478/api/clients/lookup', true); // attend

    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.send();

    xhr.onload = () =>
    {
      const result = xhr.responseText;

      console.log('onload', result);
    };

    xhr.onerror = () =>
    {
      const result = xhr.responseText;

      console.log('onerror', result);
    };

  }

  public send(): Observable<any>
  {
    return new Observable<any>((observer: Subscriber<any>) =>
    {
      const url = 'http://localhost:2772/api/projects/list';

      const request = new XMLHttpRequest();

      let responseType: HttpResponseType = HttpResponseType.unknown;
      let completed: boolean = false;
      let success: boolean = false;
      let failure: boolean = false;
      let aborted: boolean = false;
      let timeouted: boolean = false;

      const create = (type: HttpEventType, e: Event): HttpEvent =>
      {
        const event = new HttpEvent();

        event.type = type;
        event.event = e;
        event.url = url;

        event.request = request;

        event.responseType = responseType;
        event.completed = completed;
        event.success = success;
        event.failure = failure;
        event.aborted = aborted;
        event.timeouted = timeouted;

        if (type === HttpEventType.downloadProgress || type === HttpEventType.uploadProgress)
        {
          event.total = (<ProgressEvent>e).total;
          event.loaded = (<ProgressEvent>e).loaded;
        }

        return event;
      };

      const listener = (e: Event, upload: boolean = false): void =>
      {
        switch (e.type)
        {
          case 'load':
            let body: any = request.response;

            body = JSON.parse(request.response);

            console.log('load', body);

            success = true;
            observer.next(create(HttpEventType.load, e));
            break;
          case 'error':
            failure = true;
            observer.next(create(HttpEventType.error, e));
            break;
          default:
            throw new Error(`Unknown event type: '${e.type}'`);
        }
      };

      request.addEventListener('load', listener);
      request.addEventListener('error', listener);

      request.open('GET', url, true);

      request.send();
    });
  }
}
