import * as React from 'react';
import { IInitialState, User } from './reducer';
import { connect } from 'react-redux';

interface IPropsUser
{
  user: User;
}

export class UserComponent extends React.Component<IPropsUser>
{
  public constructor(props: any)
  {
    super(props);
  }

  render()
  {
    return (
      <div className="user-container" style={{width: '200px'}}>
        <span>{this.props.user.email}</span>
        <span style={{float: 'right'}}>X</span>
      </div>
    )
  }
}

interface IProps
{
  users: User[];
}

export class UserListComponent extends React.Component<IProps, any>
{
  public constructor(props: any)
  {
    super(props)
  }

  render()
  {
    return (
      <div>
        Users:

        {
          this.props.users.map((user: User) =>
            <UserComponent key={user.id} user={user}/>
          )
        }
      </div>
    )
  }
}

const mapStateToProps = (state: IInitialState) => state;

export const UserListConnect = connect(mapStateToProps)(UserListComponent);
