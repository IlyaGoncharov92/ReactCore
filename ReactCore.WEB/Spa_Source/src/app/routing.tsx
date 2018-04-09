import * as React from 'react';
import { Route, Switch } from 'react-router';
import { UsersComponent } from './content/users/users.component';
import { Page } from '../models/page.models';
import { ProjectsComponent } from './content/projects/projects.component';
import { DashboardComponent } from './content/dashboard/dashboard.component';
import { ClientsComponent } from './content/clients/clients.component';

export const NavigationMenuRoutes = () => (
  <Switch>
    <Route exact path={Page.default.path} component={DashboardComponent}/>
    <Route exact path={Page.users.path} component={UsersComponent}/>
    <Route exact path={Page.projects.path} component={ProjectsComponent}/>
    <Route exact path={Page.clients.path} component={ClientsComponent}/>
  </Switch>
);
