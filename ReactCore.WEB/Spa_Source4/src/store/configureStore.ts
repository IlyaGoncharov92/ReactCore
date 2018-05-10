import { applyMiddleware, compose, createStore, Middleware, Store } from 'redux';
import { composeWithDevTools }                                      from 'redux-devtools-extension';
import { routerMiddleware }                                         from 'react-router-redux';
import thunk                                                        from 'redux-thunk';
import { History }                                                  from 'history';
import { IAppState, reducers }                                      from './index';

const isDevelopment =() =>
{
  const nodeEnv = process.env.NODE_ENV;
  return nodeEnv === 'development';
};

const initialState: IAppState = {};

export function configureStore(history: History): Store<IAppState>
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
