import * as React                             from 'react';
import { Page }                               from '../../../routing/Page';
import { Link, NavLink }                      from 'react-router-dom';
import { routeNavigate, store }               from '../../App';
import { authenticationLogOut, REDIRECTTEST } from '../../../store/authenticate/actions';
import { push }                               from 'react-router-redux';
import { Redirect, withRouter }               from 'react-router';

class Menu extends React.Component
{
  constructor(props: any)
  {
    super(props);

    this.onLogout = this.onLogout.bind(this);
  }

  onLogout(e: any): void
  {
    e.preventDefault();

    //routeNavigate(Page.deliveries.path);
    //store.dispatch(push(Page.deliveries.path));
    console.log('this.props', this.props);
  }

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
        <div className='item logout'>
          <div onClick={this.onLogout}>Logout</div>
        </div>
      </div>
    );
  }
}

export default withRouter(Menu);
