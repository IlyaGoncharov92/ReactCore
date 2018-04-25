import * as React     from 'react';
import { Link }       from 'react-router-dom';
import { MainRoutes } from '../../routing/Routes';

export class Main extends React.Component
{
  render()
  {
    return (
      <div>
        <Link to="/app/users">Users</Link>
        <Link to="/app/projects">Projects</Link>
        main
        <MainRoutes/>
      </div>
    );
  }
}
