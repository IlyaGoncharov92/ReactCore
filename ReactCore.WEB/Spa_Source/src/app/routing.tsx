import * as React from 'react';
import { Route, Switch } from 'react-router';
import { DashboardComponent } from './content/dashboard.component';
import { UsersComponent } from './content/users.component';
import { ProjectsComponent } from './content/projects.component';
import { Page } from '../models/page.models';

export const NavigationMenuRoutes = () => (
  <Switch>
    <Route exact path={Page.default.path} component={DashboardComponent}/>
    <Route exact path={Page.users.path} component={UsersComponent}/>
    <Route exact path={Page.projects.path} component={ProjectsComponent}/>
  </Switch>
);
