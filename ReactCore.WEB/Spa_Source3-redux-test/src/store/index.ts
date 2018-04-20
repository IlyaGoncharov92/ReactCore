import { combineReducers, Reducer } from 'redux';
import { routerReducer }            from 'react-router-redux';
import { Dispatch }                 from 'react-redux';
import { ChatState }                from './chat/types';
import { chatReducer }              from './chat/reducer';

export interface ApplicationState
{
  chat?: ChatState;
  //layout: LayoutState
}

export const reducers: Reducer<ApplicationState> = combineReducers<ApplicationState>({
  router: routerReducer,
  chat: chatReducer,
  //layout: layoutReducer,
});

export interface ConnectedReduxProps<S>
{
  dispatch: Dispatch<S>;
}
