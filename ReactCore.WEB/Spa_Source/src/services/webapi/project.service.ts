import { HttpService } from './http.service';
import { Observable } from 'rxjs/Observable';
import { ProjectDetails } from '../../models/dto.models';

export class ProjectService
{
  private http = new HttpService();

  public list() : Observable<ProjectDetails[]>
  {
    return this.http.get<ProjectDetails[]>('api/projects/list');
  }
}
