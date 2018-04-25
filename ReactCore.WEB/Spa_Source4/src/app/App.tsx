import * as React           from 'react';
import { ApplicationState } from '../store';
import createHistory        from 'history/createBrowserHistory';
import { configureStore }   from '../store/configureStore';
import { Provider }         from 'react-redux';
import { ConnectedRouter }  from 'react-router-redux';
import { AppRoutes }        from '../routing/Routes';

const history = createHistory();
const initialState: ApplicationState = {};

const store = configureStore(history, initialState);

export const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <AppRoutes/>
    </ConnectedRouter>
  </Provider>
);
