import * as React from 'react';
import { Page }   from '../../../routing/Page';
import { Link }   from 'react-router-dom';

export class Menu extends React.Component
{
  render()
  {
    return (
      <div>
        <Link to={Page.requests.path}>Requests</Link>
        <Link to={Page.agencies.path}>Agencies</Link>
        <Link to={Page.deliveries.path}>Deliveries</Link>
        <Link to={Page.volunteers.path}>Volunteers</Link>
        <Link to={Page.managers.path}>Managers</Link>
      </div>
    );
  }
}
