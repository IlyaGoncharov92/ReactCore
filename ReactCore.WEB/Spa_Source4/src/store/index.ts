import { combineReducers, Dispatch, Reducer } from 'redux';
import { routerReducer, RouterState }         from 'react-router-redux';

export interface ApplicationState
{
  routing?: Reducer<RouterState>;
  //chat?: ChatState;
  //layout: LayoutState
}

export const reducers: Reducer<ApplicationState> = combineReducers<ApplicationState>({
  routing: routerReducer,
  //chat: chatReducer,
  //layout: layoutReducer,
});

export interface ConnectedReduxProps<S>
{
  dispatch: Dispatch<S>;
}
