import * as React                  from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { BrowserRouter }           from 'react-router-dom';
import { PrivateRoute }            from './PrivateRoute';
import { Login }                   from '../app/auth/Login';
import { Register }                from '../app/auth/Register';
import { Auth }                    from '../app/auth/Auth';
import { Main }                    from '../app/main/Main';
import { Page }                    from './Page';
import { Requests }                from '../app/main/views/requests/Requests';
import { Agencies }                from '../app/main/views/agencies/Agencies';
import { Deliveries }    from '../app/main/views/deliveries/Deliveries';
import { Volunteers }    from '../app/main/views/voluteers/Volunteers';
import { Managers }      from '../app/main/views/managers/Managers';

export const AppRoutes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={Page.default.path} render={() => (<Redirect to={Page.requests.path}/>)}/>
      <Route path={Page.auth.path} component={Auth}/>
      <PrivateRoute path={Page.main.path} component={Main}/>
    </Switch>
  </BrowserRouter>
);

export const AuthRoutes = () => (
  <Switch>
    <Route exact path={Page.login.path} component={Login}/>
    <Route exact path={Page.register.path} component={Register}/>
  </Switch>
);

export const MainRoutes = () => (
  <Switch>
    <Route exact path={Page.requests.path} component={Requests}/>
    <Route exact path={Page.agencies.path} component={Agencies}/>
    <Route exact path={Page.deliveries.path} component={Deliveries}/>
    <Route exact path={Page.volunteers.path} component={Volunteers}/>
    <Route exact path={Page.managers.path} component={Managers}/>
  </Switch>
);
