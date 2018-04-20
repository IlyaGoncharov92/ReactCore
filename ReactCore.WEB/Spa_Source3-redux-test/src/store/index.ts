import { combineReducers, Reducer } from 'redux';
import { ChatState }                from './chat/types';
import { routerReducer }            from 'react-router-redux';
import { Dispatch }                 from 'react-redux';
import { chatReducer }              from './chat/reducer';

export interface ApplicationState
{
  chat?: ChatState;
  //layout: LayoutState
}

// Whenever an action is dispatched, Redux will update each top-level application state property
// using the reducer with the matching name. It's important that the names match exactly, and that
// the reducer acts on the corresponding ApplicationState property type.
export const reducers: Reducer<ApplicationState> = combineReducers<ApplicationState>({
  router: routerReducer,
  chat: chatReducer,
  //layout: layoutReducer,
});

// Additional props for connected React components. This prop is passed by default with `connect()`
export interface ConnectedReduxProps<S>
{
  // Correct types for the `dispatch` prop passed by `react-redux`.
  // Additional type information is given through generics.
  dispatch: Dispatch<S>;
}
