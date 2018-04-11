import * as React from 'react';
import { NavigationMenuComponent } from './menu.component';
import { NavigationMenuRoutes } from './routing';

export class AuthComponent extends React.Component
{
  render()
  {
    return (
      <div className="auth-container">
        auth
      </div>
    );
  }
}

export class MainComponent extends React.Component
{
  render()
  {
    return (
      <div className="main">
        <div className="menu">
          <NavigationMenuComponent/>
        </div>
        <div className="content">
          <NavigationMenuRoutes/>
        </div>
      </div>
    );
  }
}

export class AppComponent1 extends React.Component
{
  render()
  {
    return (<MainComponent/>);
  }
}
