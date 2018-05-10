import * as React                       from 'react';
import createHistory                    from 'history/createBrowserHistory';
import { State } from '../store/configureStore';
import { Provider }                     from 'react-redux';
import { ConnectedRouter }              from 'react-router-redux';
import { AppRoutes }                    from '../routing/Routes';

const history = createHistory();

export const App = () => (
  <Provider store={State.store}>
    <ConnectedRouter history={history}>
      <AppRoutes/>
    </ConnectedRouter>
  </Provider>
);
