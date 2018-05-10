import * as React                               from 'react';
import { Redirect, Route, RouteComponentProps } from 'react-router';
import { Component }                            from 'react-redux';
import { Page }                                 from './Page';
import { State }                                from '../store/configureStore';

export interface RouteProps
{
  component?: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
  path?: string;
}

export const PrivateRoute = ({component: Component, ...rest}: RouteProps) => (
  <Route {...rest} render={(props) => (
    State.authentication.authentication
      ? <Component {...props} />
      : <Redirect to={{
        pathname: Page.login.path,
        state: {from: props.location}
      }}/>
  )}/>
);
