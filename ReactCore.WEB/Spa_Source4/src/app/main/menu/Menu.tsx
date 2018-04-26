import * as React        from 'react';
import { Page }          from '../../../routing/Page';
import { NavLink } from 'react-router-dom';

export class Menu extends React.Component
{
  render()
  {
    return (
      <div className='menu'>
        <div className='item'>
          <NavLink to={Page.requests.path} activeClassName='selected'>Requests</NavLink>
        </div>
        <div className='item'>
          <NavLink to={Page.agencies.path} activeClassName='selected'>Agencies</NavLink>
        </div>
        <div className='item'>
          <NavLink to={Page.deliveries.path} activeClassName='selected'>Deliveries</NavLink>
        </div>
        <div className='item'>
          <NavLink to={Page.volunteers.path} activeClassName='selected'>Volunteers</NavLink>
        </div>
        <div className='item'>
          <NavLink to={Page.managers.path} activeClassName='selected'>Managers</NavLink>
        </div>
      </div>
    );
  }
}
