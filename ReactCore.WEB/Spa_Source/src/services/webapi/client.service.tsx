import { Observable } from 'rxjs/Observable';
import { HttpService } from './http.service';
import { ClientDetails } from '../../models/dto.models';

export class ClientService
{
  private http = new HttpService();

  public list() : Observable<ClientDetails[]>
  {
    return this.http.get<ClientDetails[]>('api/clients/list');
  }
}
