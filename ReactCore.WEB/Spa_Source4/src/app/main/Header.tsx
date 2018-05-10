import * as React               from 'react';
import { UserRole }             from '../../models/dto.enums';
import { IAppState }            from '../../store';
import { connect }              from 'react-redux';
import { GetPropsStore }        from '../types';
import { IAuthenticationState } from '../../store/authenticate/types';
import { UserDetails }          from '../../models/dto.models';

type Props = GetPropsStore<IAuthenticationState>;

class Header extends React.Component<Props>
{
  private user = new UserDetails();

  public constructor(props: Props)
  {
    super(props);
  }

  render()
  {
    const auth = this.props.authentication;

    this.user = auth ? auth.user : new UserDetails();

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

const mapStateToProps = (state: IAppState) => state.authentication;

export default connect(mapStateToProps)(Header);
