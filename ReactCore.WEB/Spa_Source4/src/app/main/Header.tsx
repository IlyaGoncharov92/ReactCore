import * as React      from 'react';
import { UserDetails } from '../../models/dto.models';
import { UserRole }    from '../../models/dto.enums';
import { AuthService } from '../../services/auth.service';

export class Header extends React.Component<any>
{
  private authService = new AuthService();
  private user: UserDetails;

  public constructor(props: any)
  {
    super(props);

    this.user = this.authService.authentication.user;
  }

  render()
  {
    return (
      <div className='header-container'>
        <div className='header-wrapper'>
          <div className='user-info'>
            <div>{this.user.fullName}</div>
            <div>{UserRole[this.user.role]}</div>
          </div>
        </div>
      </div>
    )
  }
}
