import { HttpService } from './http.service';
import { Observable }  from 'rxjs/Observable';
import { UserDetails } from '../../models/dto.models';

export class AgencyService
{
  private http = new HttpService();

  public list(): Observable<UserDetails[]>
  {
    return this.http.get<UserDetails[]>('api/agencies/list');
  }
}
