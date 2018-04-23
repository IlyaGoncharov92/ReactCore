import { createStore, applyMiddleware, Store, Middleware, compose } from 'redux';
import { routerMiddleware }                                         from 'react-router-redux';
import { composeWithDevTools }                                      from 'redux-devtools-extension';
import { History }                                                  from 'history';
import thunk                                                        from 'redux-thunk';
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
