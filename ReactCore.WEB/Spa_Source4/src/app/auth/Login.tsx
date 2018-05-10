import * as React          from 'react';
import { GetPropsRoute }   from '../types';
import { LoginService }    from '../../services/webapi/login.service';
import { Authentication }  from '../../models/auth.models';
import { OperationResult } from '../../models/dto.models';
import { Page }            from '../../routing/Page';

type Props = GetPropsRoute;

export class Login extends React.Component<Props>
{
  private loginService = new LoginService();

  private emailElement: HTMLInputElement;
  private passwordElement: HTMLInputElement;

  public constructor(props: Props)
  {
    super(props);

    this.onSend = this.onSend.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  onSend(event: React.FormEvent<any>): void
  {
    event.preventDefault();

    this.loginService.login(this.emailElement.value, this.passwordElement.value)
      .subscribe((result: OperationResult<Authentication>) =>
      {
        if (result.success)
        {
          this.props.history.push(Page.requests.path);
        }
      });
  }

  onSelect(user: string): void
  {
    this.emailElement.value = user;
    this.passwordElement.value = user;
  }

  render()
  {
    return (
      <div className='auth-container'>
        <div className='auth-wrapper'>
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

        <div className='user-list-wrapper'>
          <button onClick={() => this.onSelect('admin@itmint.ca')}>Super Admin</button>
          <button onClick={() => this.onSelect('adminmanager1@itmint.ca')}>Admin Manager</button>
          <button onClick={() => this.onSelect('agency1@itmint.ca')}>Agency</button>
          <button onClick={() => this.onSelect('agencyManager1@itmint.ca')}>Agency Manager</button>
          <button onClick={() => this.onSelect('volunteer1@itmint.ca')}>Volunteer</button>
        </div>
      </div>
    );
  }
}
