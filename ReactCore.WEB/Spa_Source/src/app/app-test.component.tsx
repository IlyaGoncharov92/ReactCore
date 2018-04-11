import * as React from 'react';

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb: any)
  {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb: any)
  {
    this.isAuthenticated = false;
    setTimeout(cb, 100); // fake async
  }
};

const Public = () => <h3>Public</h3>;
const Protected = () => <h3>Protected</h3>;

class Login extends React.Component
{
  render()
  {
    return (
      <div>
        Login
      </div>
    );
  }
}

export class MainComponent extends React.Component
{
  render()
  {
    return (
      <div>
        z
      </div>
    );
  }
}

export class AppComponent extends React.Component
{
  render()
  {
    return (<MainComponent/>);
  }
}