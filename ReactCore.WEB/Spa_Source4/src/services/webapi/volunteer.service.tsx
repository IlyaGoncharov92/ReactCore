import { UserDetails } from '../../models/dto.models';
import { Observable }  from 'rxjs/Observable';
import { HttpService } from './http.service';

export class VolunteerService
{
  private http = new HttpService();

  public list(): Observable<UserDetails>
  {
    return this.http.get<UserDetails>('api/volunteers/list');
  }
}
