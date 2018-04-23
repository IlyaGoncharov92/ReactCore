import * as React                                      from 'react';
import * as ReactDOM                                   from 'react-dom';
import App                       from './App';
import registerServiceWorker     from './registerServiceWorker';
import './index.css';
import { Provider }              from 'react-redux';
import { configureStore }        from './store/configureStore';
import { ApplicationState }      from './store';
import createHistory             from 'history/createBrowserHistory';
import { ConnectedRouter, push } from 'react-router-redux';

const history = createHistory();
const initialState: ApplicationState = {};

const store = configureStore(history, initialState);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App/>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
