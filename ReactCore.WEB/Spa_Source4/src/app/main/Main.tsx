import * as React     from 'react';
import { MainRoutes } from '../../routing/Routes';
import { Menu }       from './menu/Menu';

export class Header extends React.Component
{
  render()
  {
    return (
      <div className='header-container'>
        <div className='header-wrapper'>
          <div className='user-info'>
            <div>Max T.</div>
            <div>Administrator</div>
          </div>
        </div>
      </div>
    )
  }
}

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
