import { createStore, applyMiddleware, Store } from 'redux';
import { routerMiddleware }                    from 'react-router-redux';
import { composeWithDevTools }                 from 'redux-devtools-extension';
import { History }                             from 'history';
import { ApplicationState, reducers }          from './index';
import createBrowserHistory                    from 'history/createBrowserHistory';

const initialState: ApplicationState = {};
const history = createBrowserHistory();
export const store = configureStore(history, initialState);


export function configureStore(history: History, initialState: ApplicationState): Store<ApplicationState>
{
  const composeEnhancers = composeWithDevTools({});

  return createStore<ApplicationState>(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(routerMiddleware(history))),
  );
}