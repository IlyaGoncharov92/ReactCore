import { applyMiddleware, compose, createStore, Dispatch, Middleware, Store } from 'redux';
import { composeWithDevTools }                                                from 'redux-devtools-extension';
import { routerMiddleware }                                                   from 'react-router-redux';
import thunk                                                                  from 'redux-thunk';
import { History }                                                            from 'history';
import { IAppState, reducers }                                                from './index';
import createHistory                                                          from 'history/createBrowserHistory';
import { IAuthenticationState }                                     from './authenticate/types';

const isDevelopment =() =>
{
  const nodeEnv = process.env.NODE_ENV;
  return nodeEnv === 'development';
};

const initialState: IAppState = {};

function configureStore(history: History): Store<IAppState>
{
  const composeEnhancers = isDevelopment()
    ? composeWithDevTools({})
    : compose();

  const middlewares: Middleware[] = [
    routerMiddleware(history),
    thunk
  ];

  return createStore<IAppState>(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares)),
  );
}

const history = createHistory();

const store = configureStore(history);

export class State
{
  public static get store(): Store<IAppState>
  {
    return store;
  }

  public static get dispatch(): Dispatch<IAppState>
  {
    return store.dispatch;
  }

  public static get authentication(): IAuthenticationState
  {
    return store.getState().authentication;
  }
}
