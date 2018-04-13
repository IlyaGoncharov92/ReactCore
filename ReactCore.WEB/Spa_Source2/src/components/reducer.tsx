import { createStore, Store } from 'redux';

interface IInitialState
{
  users: string[];
}

const initialState: IInitialState = {
  users: []
};

enum ActionType {
  Add,
  Delete
}

interface IInitialAction
{
  type: ActionType;
  user: string;
}

const rootReducer = function (state: IInitialState = initialState, action: IInitialAction): IInitialState
{
  switch (action.type)
  {
    case ActionType.Add:
      const addState = {...state, users: [...state.users, action.user]};
      console.log('addState', addState);
      return addState;
    case ActionType.Delete:
      return state;
    default:
      return state;
  }
};

export const store: Store<IInitialState> = createStore(rootReducer);

store.subscribe(() => console.log('Store subscribe.'));

let res = store.getState();

console.log('res', res);

const val: IInitialAction = {
  type: ActionType.Add,
  user: 'zzz'
};

store.dispatch(val);

let res2 = store.getState();

console.log('res2', res2);
