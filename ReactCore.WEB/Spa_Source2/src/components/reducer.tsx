import { createStore, Store } from 'redux';
import { Dispatch } from 'react-redux';

export class User
{
  public id: string;
  public email: string;
  public firstName: string;
  public lastName: string;
  public age: number;

  public constructor(init?: Partial<User>)
  {
    Object.assign(this, init);
  }
}

export interface IInitialState
{
  users: User[];
}

const initialState: IInitialState = {
  users: []
};

enum ActionType
{
  Add,
  Delete
}

export interface IInitialAction
{
  type: ActionType;
  user: User;
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

export const addUserAction = (user: User): IInitialAction => ({
  type: ActionType.Add,
  user: user
});


let res = store.getState();
console.log('res', res);

store.dispatch(
  addUserAction(new User({id: '1', email: 'admin@gmail.com'}))
);

// res = store.getState();
// console.log('res2', res);
//
//
// store.dispatch(
//   addUserReducer(new User({id: 2, email: 'test@gmail.com'}))
// );
//
// res = store.getState();
// console.log('res2', res);
