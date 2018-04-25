import * as React     from 'react';
import { AuthRoutes } from '../../routing/Routes';

export class Auth extends React.Component
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