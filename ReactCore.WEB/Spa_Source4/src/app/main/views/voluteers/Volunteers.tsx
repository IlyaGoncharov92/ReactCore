import * as React                                            from 'react';
import { GetPropsStoreRoute }                                from '../../../types';
import { IVolunteersState }                                  from '../../../../store/volunteers/types';
import { UserDetails }                                       from '../../../../models/dto.models';
import { IAppState }                                         from '../../../../store';
import { connect }                                           from 'react-redux';
import { volunteersAddAction, volunteersClearActionCreator } from '../../../../store/volunteers/actions';

type Props = GetPropsStoreRoute<IVolunteersState>;

class Volunteers extends React.Component<Props>
{
  componentDidMount()
  {
    this.props.dispatch(volunteersAddAction());
  }

  componentWillUnmount()
  {
    this.props.dispatch(volunteersClearActionCreator());
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
