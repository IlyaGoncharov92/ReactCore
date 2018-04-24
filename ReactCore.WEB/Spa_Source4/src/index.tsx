import * as React                                               from 'react';
import * as ReactDOM                                            from 'react-dom';
import registerServiceWorker                                    from './registerServiceWorker';
import './index.css';
import { Component, Provider }                                  from 'react-redux';
import createHistory, { default as createBrowserHistory }       from 'history/createBrowserHistory';
import { ConnectedRouter, push }                                from 'react-router-redux';
import { BrowserRouter, Link }                                  from 'react-router-dom';
import { Redirect, Route, RouteComponentProps, Router, Switch } from 'react-router';

export interface RouteProps
{
  component?: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
  path?: string;
  str?: string;
}

const PrivateRoute = ({component: Component, ...rest}: RouteProps) => (
  <Route {...rest} render={(props) => (
    5 > 3
      ? <Component {...props} />
      : <Redirect to={{
        pathname: '/login',
        state: {from: props.location}
      }}/>
  )}/>
);

class App extends React.Component
{
  render()
  {
    return (
      5 > 3
        ? <Auth/>
        : <Main/>
    );
  }
}

class Auth extends React.Component
{
  render()
  {
    return (
      <div>
        Auth
        <AuthRoutes/>
      </div>
    );
  }
}

class Login extends React.Component
{
  render()
  {
    return (
      <div>
        Login
      </div>
    );
  }
}

class Register extends React.Component
{
  render()
  {
    return (
      <div>
        Register
      </div>
    );
  }
}

class Main extends React.Component
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

class Users extends React.Component
{
  render()
  {
    return (
      <div>
        users
      </div>
    );
  }
}

class Projects extends React.Component
{
  render()
  {
    return (
      <div>
        projects
      </div>
    );
  }
}


/*-------------------------------------------------------*/


export const AuthRoutes = () => (
  <Switch>
    <Route exact path='/login' component={Login}/>
    <Route exact path='/register' component={Register}/>
  </Switch>
);

export const MainRoutes = () => (
  <Switch>
    <Route exact path='/app/users' component={Users}/>
    <Route exact path='/app/projects' component={Projects}/>
  </Switch>
);

export const Root = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Users}/>
      <Route exact path='/login' component={Login}/>
      <Route exact path='/register' component={Register}/>
      <PrivateRoute path='/app' component={Main}/>
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(
  <Root/>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
