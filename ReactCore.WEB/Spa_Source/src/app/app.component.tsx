import * as React from 'react';
import { NavigationMenuComponent } from './menu.component';
import { NavigationMenuRoutes } from './routing';

export class AppComponent extends React.Component
{
  render()
  {
    return (
      <div className="main">
        <div className="menu">
          <NavigationMenuComponent />
        </div>
        <div className="content">
          <NavigationMenuRoutes />
        </div>
      </div>
    );
  }
}