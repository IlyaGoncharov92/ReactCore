import * as React                               from 'react';
import { Redirect, Route, RouteComponentProps } from 'react-router';
import { Component }                            from 'react-redux';
import { Page }                                 from './Page';

export interface RouteProps
{
  component?: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
  path?: string;
}

export const PrivateRoute = ({component: Component, ...rest}: RouteProps) => (
  <Route {...rest} render={(props) => (
    5 > 3
      ? <Component {...props} />
      : <Redirect to={{
        pathname: Page.login.path,
        state: {from: props.location}
      }}/>
  )}/>
);
