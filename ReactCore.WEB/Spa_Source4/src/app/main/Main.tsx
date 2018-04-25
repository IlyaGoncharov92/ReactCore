import * as React     from 'react';
import { Link }       from 'react-router-dom';
import { MainRoutes } from '../../routing/Routes';
import { Page }       from '../../routing/Page';

export class Main extends React.Component
{
  render()
  {
    return (
      <div>
        <Link to={Page.users.path}>Users</Link>
        <Link to={Page.projects.path}>Projects</Link>
        main
        <MainRoutes/>
      </div>
    );
  }
}
