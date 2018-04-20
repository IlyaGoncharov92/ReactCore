import * as React            from 'react';
import './App.css';
import { ChatWindowConnect } from './containers/ChatWindow';

class App extends React.Component
{
  render()
  {
    return (
      <div>
        <ChatWindowConnect/>
      </div>
    );
  }
}

export default App;
