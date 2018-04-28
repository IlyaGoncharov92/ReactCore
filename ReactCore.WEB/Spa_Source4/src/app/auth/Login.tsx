import * as React      from 'react';
import { GetAllProps } from '../types';

type AllProps = GetAllProps;

export class Login extends React.Component<AllProps>
{
  private emailElement: HTMLInputElement;
  private passwordElement: HTMLInputElement;

  public constructor(props: AllProps)
  {
    super(props);

    this.onSend = this.onSend.bind(this);
  }

  onSend(event: React.FormEvent<any>): void
  {
    event.preventDefault();
    console.log('event', event);

    console.log('email', this.emailElement.value);
  }

  render()
  {
    return (
      <div className='auth-container'>
        <div className='header'>
          <div className='text'>Please login</div>
        </div>
        <div className='content'>
          <form onSubmit={this.onSend}>
            <div className='form-item'>
              <label>Email</label>
              <input type="text" name="email" ref={(input) => this.emailElement = input}/>
            </div>
            <div className='form-item'>
              <label>Password</label>
              <input type="password" name="password"/>
            </div>
            <input type="submit" value="Sign in"/>
          </form>
        </div>
      </div>
    );
  }
}
