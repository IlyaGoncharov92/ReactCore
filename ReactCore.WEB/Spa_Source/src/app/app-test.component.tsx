import * as React from 'react';
import { Redirect, Route, RouteComponentProps, Router, withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

export interface RouteProps1
{
  component?: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
  path?: string;
}

const PrivateRoute = ({component: Component, ...rest}: RouteProps1) => (
  <Route {...rest} render={(props) => (
    fakeAuth.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to={{
        pathname: '/login',
        state: {from: props.location}
      }}/>
  )}/>
);

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

class Login extends React.Component<RouteComponentProps<any>, any>
{
  state = {
    redirectToReferrer: false
  };

  login = () =>
  {
    fakeAuth.authenticate(() =>
    {
      this.setState(() => ({
        redirectToReferrer: true
      }));
    });
  };

  render()
  {
    const {from} = this.props.location.state || {from: {pathname: '/'}};
    const {redirectToReferrer} = this.state;

    if (redirectToReferrer === true)
    {
      return (<Redirect to={from} />)
    }

    return (
      <div>
        <p>You must log in to view the page</p>
        <button onClick={this.login}>Log in</button>
      </div>
    );
  }
}

const AuthButton = withRouter(({history}) => (
  fakeAuth.isAuthenticated ? (
    <p>
      Welcome!
      <button onClick={() =>
      {
        fakeAuth.signout(() => history.push('/'));
      }}>
        Sign out
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  )
));

export function AuthExample()
{
  const history = createBrowserHistory();

  return (
    <Router history={history} key={Math.random()}> //this.props.history
      <div>
        {/*<AuthButton/>*/}
        {/*<ul>*/}
          {/*<li><Link to="/public">Public Page</Link></li>*/}
          {/*<li><Link to="/protected">Protected Page</Link></li>*/}
        {/*</ul>*/}
        {/*<Route path="/public" component={Public}/>*/}
        {/*<Route path="/login" component={Login}/>*/}
        {/*<PrivateRoute path='/protected' component={Protected}/>*/}
      </div>
    </Router>
  );
}





// const routeConfig = (type) => {
//   console.log("at route", type)
//   return (
//     <Route>
//       <Route path='/' component={Template}>
//         <Route path='/pageform(/:id)' component={PageForm} />
//       </Route>
//
//       <Route path='/:pageSlug' component={Page} slug=type/>
//     </Route>
//   );
// }
// class App extends React.Component {
//   render() {
//     const slug = this.props
//     console.log("at app", slug)
//
//     return (
//       <MuiThemeProvider muiTheme={getMuiTheme()}>
//         <Provider store={store}>
//           <Router history={browserHistory} routes={routeConfig(slug)} />
//         </Provider>
//       </MuiThemeProvider>
//     );
//   };
// };