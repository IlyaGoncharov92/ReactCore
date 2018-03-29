import * as React from 'react';
import { HttpService } from '../../services/webapi/http.service';

export class ProjectsComponent extends React.Component
{
  componentDidMount()
  {
    console.log('componentDidMount');

    const http = new HttpService();

    //http.get();

    http.send().subscribe(res =>
    {
      console.log('res', res);
    });
  }

  render()
  {
    return (
      <div>Projects</div>
    );
  }
}