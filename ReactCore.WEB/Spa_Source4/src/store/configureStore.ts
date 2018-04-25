import { applyMiddleware, compose, createStore, Middleware, Store } from 'redux';
import { composeWithDevTools }                                      from 'redux-devtools-extension';
import { routerMiddleware }                                         from 'react-router-redux';
import thunk                                                        from 'redux-thunk';
import { History }                                                  from 'history';
import { ApplicationState, reducers }                               from './index';

const isDevelopment =() =>
{
  const nodeEnv = process.env.NODE_ENV;
  return nodeEnv === 'development';
};

export function configureStore(history: History, initialState: ApplicationState): Store<ApplicationState>
{
  const composeEnhancers = isDevelopment()
    ? composeWithDevTools({})
    : compose();

  const middlewares: Middleware[] = [
    routerMiddleware(history),
    thunk
  ];

  return createStore<ApplicationState>(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares)),
  );
}
