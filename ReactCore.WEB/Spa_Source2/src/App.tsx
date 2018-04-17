import * as React from 'react';
import './App.css';
import { UserFormConnect } from './components/user.form.component';
import { UserListConnect } from './components/user.list.component';

class App extends React.Component
{
  render()
  {
    return (
      <div>
        <UserFormConnect/>
        <UserListConnect/>
      </div>
    );
  }
}

export default App;
