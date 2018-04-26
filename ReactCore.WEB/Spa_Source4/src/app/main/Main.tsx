import * as React     from 'react';
import { MainRoutes } from '../../routing/Routes';
import { Menu }       from './menu/Menu';

export class Main extends React.Component
{
  render()
  {
    return (
      <div className='main'>
        <Menu/>
        <div className='content-wrapper'>
          <div className='content'>
            <MainRoutes/>
          </div>
        </div>
      </div>
    );
  }
}
