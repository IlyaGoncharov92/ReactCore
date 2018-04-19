import * as React from 'react';
import { addUserAction, deleteUserAction, IInitialAction, IInitialState, User } from './reducer';
import { connect, Dispatch, DispatchProp } from 'react-redux';
import { UserComponent } from './user.item.component';

interface IDispatchToProps extends DispatchProp<IInitialState>
{
  deleteUser: (user: User) => IInitialAction;
  addUser: (user: User) => IInitialAction;
}

interface IProps extends IDispatchToProps
{
  users: User[];
}

export class UserListComponent extends React.Component<IProps>
{
  public constructor(props: IProps)
  {
    super(props);

    this.onEmittedId = this.onEmittedId.bind(this);
  }

  onEmittedId(user: User)
  {
    this.props.deleteUser(user);
    //this.props.dispatch(deleteUserAction(user));
  }

  render()
  {
    console.log('props.users', this.props.users);

    return (
      <div>
        Users:
        {
          this.props.users.map((user: User) =>
            <UserComponent key={user.id} user={user} emittedId={this.onEmittedId}/>
          )
        }
      </div>
    );
  }
}

const mapStateToProps = (state: IInitialState) => state;

const mapDispatchToProps = (dispatch: Dispatch<IInitialState>): IDispatchToProps => ({
  deleteUser: (user: User): IInitialAction => dispatch(deleteUserAction(user)),
  addUser: (user: User): IInitialAction => dispatch(addUserAction(user))
});

export const UserListConnect = connect(mapStateToProps, mapDispatchToProps)(UserListComponent);

export const UserListConnect1 = connect(
  state => ({}),
  dispatch => ({})
)(UserListComponent);
