import * as React     from 'react';
import { MainRoutes } from '../../routing/Routes';
import Header         from './Header';
import Menu           from './menu/Menu';

export class Main extends React.Component
{
  render()
  {
    return (
      <div className='main'>
        <Menu/>
        <Header/>
        <div className='content-wrapper'>
          <div className='content'>
            <MainRoutes/>
          </div>
        </div>
      </div>
    );
  }
}
