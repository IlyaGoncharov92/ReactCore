import { Dispatch } from 'react-redux';
import { createStore, Store } from 'redux';

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

const rootReducer = (state: IInitialState = initialState, action: IInitialAction): IInitialState =>
{
  switch (action.type)
  {
    case ActionType.Add:
      const res1 = {...state, users: [...state.users, action.user]};
      return res1;
    case ActionType.Delete:
      const res = state.users.filter(x => x.id != action.user.id);
      return {users: res};
    default:
      return state;
  }
};


export const store: Store<IInitialState> = createStore<IInitialState>(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

//store.subscribe(() => console.log('Store subscribe.'));

export const addUserAction = (user: User): IInitialAction => ({
  type: ActionType.Add,
  user: user
});

export const deleteUserAction = (user: User): IInitialAction => ({
  type: ActionType.Delete,
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
