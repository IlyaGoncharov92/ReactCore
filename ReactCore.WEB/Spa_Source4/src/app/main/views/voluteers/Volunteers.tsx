import * as React                               from 'react';
import { GetStoreAllProps }                     from '../../../types';
import { IVolunteersState }                     from '../../../../store/volunteers/types';
import { UserDetails }                          from '../../../../models/dto.models';
import { IAppState }                            from '../../../../store';
import { connect }                              from 'react-redux';
import { volunteersAdd, volunteersClearAction } from '../../../../store/volunteers/actions';

type AllProps = GetStoreAllProps<{}, IVolunteersState>;

class Volunteers extends React.Component<AllProps>
{
  componentDidMount()
  {
    this.props.dispatch(volunteersAdd());
  }

  componentWillUnmount()
  {
    this.props.dispatch(volunteersClearAction());
  }

  render()
  {
    console.log('Volunteers render', this.props.volunteers);
    return (
      <div className='flex-container'>
        <div className='title'>Volunteers</div>

        {
          this.props.volunteers.map((user: UserDetails) =>
          {
            return <div key={user.id}>{user.email}</div>;
          })
        }
      </div>
    );
  }
}

const mapStateToProps = (state: IAppState) => state.volunteers;

export default connect(mapStateToProps)(Volunteers);
