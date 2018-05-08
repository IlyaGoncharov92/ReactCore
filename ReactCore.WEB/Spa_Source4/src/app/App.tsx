import * as React          from 'react';
import { IAppState }       from '../store';
import createHistory       from 'history/createBrowserHistory';
import { configureStore }  from '../store/configureStore';
import { Provider }        from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { AppRoutes }       from '../routing/Routes';

const history = createHistory();

export const routeNavigate = (url: string): void =>
{
  history.push(url);
};

const initialState: IAppState = {};

const store = configureStore(history, initialState);

export const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <AppRoutes/>
    </ConnectedRouter>
  </Provider>
);
