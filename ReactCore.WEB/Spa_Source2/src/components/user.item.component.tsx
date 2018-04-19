import { User } from './reducer';
import * as React from 'react';

interface IPropsUser
{
  user: User;
  emittedId: (user: User) => void;
}

export class UserComponent extends React.Component<IPropsUser>
{
  public constructor(props: IPropsUser)
  {
    super(props);
  }

  onRemove()
  {
    this.props.emittedId(this.props.user);
  }

  render()
  {
    return (
      <div className="user-container" style={{width: '200px'}}>
        <span>{this.props.user.email}</span>
        <span style={{float: 'right'}} onClick={this.onRemove.bind(this)}>X</span>
      </div>
    )
  }
}
