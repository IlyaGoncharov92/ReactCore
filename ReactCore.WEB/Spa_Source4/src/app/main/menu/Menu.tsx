import * as React                     from 'react';
import { Page }                       from '../../../routing/Page';
import { Link, NavLink }              from 'react-router-dom';
import { authenticationLogOutAction } from '../../../store/authenticate/actions';
import { withRouter }                 from 'react-router';
import { State }                      from '../../../store/configureStore';
import { GetPropsRoute }              from '../../types';

type Props = GetPropsRoute;

class Menu extends React.Component<Props>
{
  constructor(props: Props)
  {
    super(props);

    this.onLogout = this.onLogout.bind(this);
  }

  onLogout(): void
  {
    State.dispatch(authenticationLogOutAction());
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
          <Link to={Page.login.path} onClick={this.onLogout}>Logout</Link>
        </div>
      </div>
    );
  }
}

export default withRouter(Menu);
