import * as React                  from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { BrowserRouter }           from 'react-router-dom';
import { PrivateRoute }            from './PrivateRoute';
import { Login }                   from '../app/auth/Login';
import { Register }                from '../app/auth/Register';
import { Users }                   from '../app/main/components/Users';
import { Projects }                from '../app/main/components/Projects';
import { Auth }                    from '../app/auth/Auth';
import { Main }                    from '../app/main/Main';
import { Page }                    from './Page';

export const AppRoutes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={Page.default.path} component={Users}/>
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
    <Route exact path={Page.users.path} component={Users}/>
    <Route exact path={Page.projects.path} component={Projects}/>
  </Switch>
);
