import * as React          from 'react';
import { GetAllProps }     from '../types';
import { LoginService }    from '../../services/webapi/login.service';
import { Authentication }  from '../../models/auth.models';
import { OperationResult } from '../../models/dto.models';
import { Page }            from '../../routing/Page';

type AllProps = GetAllProps;

export class Login extends React.Component<AllProps>
{
  private loginService = new LoginService();

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

    this.loginService.login(this.emailElement.value, this.passwordElement.value)
      .subscribe((result: OperationResult<Authentication>) =>
      {
        if (result.success)
        {
          this.props.history.push(Page.requests.path);
        }
      });
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
              <input type="password" name="password" ref={(input) => this.passwordElement = input}/>
            </div>
            <input type="submit" value="Sign in"/>
          </form>
        </div>
      </div>
    );
  }
}
