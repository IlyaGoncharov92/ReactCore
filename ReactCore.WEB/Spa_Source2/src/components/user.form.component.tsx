import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { addUserAction, IInitialAction, IInitialState, User } from './reducer';
import { v4 as uuid } from 'uuid';

interface IUserFormState
{
  email: string;
}

interface IDispatchToProps
{
  dispatch?: Dispatch<IInitialState>;
  addUser: (user: User) => IInitialAction;
}

interface IProps extends IDispatchToProps
{

}

class UserFormComponent extends React.Component<IProps, IUserFormState>
{
  private inputElement: HTMLInputElement;

  public constructor(props: any)
  {
    super(props);

    this.state = {email: ''};

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event: any)
  {
    const email = this.inputElement.value;

    const user = new User({id: uuid(), email: email});

    this.props.addUser(user);
    //this.props.dispatch(addUserAction(user));

    this.inputElement.value = '';
  }

  render()
  {
    return (
      <div>
        <input type="text" ref={(input) =>
        {
          this.inputElement = input;
        }}/>
        <button onClick={this.onSubmit}>Add</button>
      </div>
    );
  }
}

const mapStateToProps = (state: IInitialState) => state;

const mapDispatchToProps = (dispatch: Dispatch<IInitialState>): IDispatchToProps => ({
  addUser: (user: User): IInitialAction => dispatch(addUserAction(user))
});

export const UserFormConnect = connect(mapStateToProps, mapDispatchToProps)(UserFormComponent);
