import * as React from 'react';
import { Link } from 'react-router-dom';
import { Page } from '../models/page.models';

export class NavigationMenuComponent extends React.Component
{
  render()
  {
    return(
      <nav className="menu-container">
        <Link to={Page.default.path}>Dashboard</Link>
        <Link to={Page.users.path}>Users</Link>
        <Link to={Page.projects.path}>Projects</Link>
        <Link to={Page.clients.path}>Clients</Link>
      </nav>
    );
  }
}