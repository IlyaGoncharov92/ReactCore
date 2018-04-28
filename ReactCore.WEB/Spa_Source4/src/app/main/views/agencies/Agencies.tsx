import * as React                           from 'react';
import { connect }                          from 'react-redux';
import { IAppState }                        from '../../../../store';
import { IAgenciesState }                   from '../../../../store/agencies/types';
import { GetStoreAllProps }                 from '../../../types';
import { agenciesAdd, agenciesClearAction } from '../../../../store/agencies/actions';
import { UserDetails }                      from '../../../../models/dto.models';

interface AgenciesProps
{

}

type AllProps = GetStoreAllProps<AgenciesProps, IAgenciesState>;

class Agencies extends React.Component<AllProps>
{
  public constructor(props: AllProps)
  {
    super(props);
  }

  componentDidMount()
  {
    this.props.dispatch(agenciesAdd());
  }

  componentWillUnmount()
  {
    this.props.dispatch(agenciesClearAction())
  }

  render()
  {
    console.log('Agencies render', this.props.agencies);
    return (
      <div className='flex-container'>
        Agencies
        {
          this.props.agencies.map((user: UserDetails) =>
          {
            return <div key={user.id}>{user.email}</div>;
          })
        }
      </div>
    );
  }
}

const mapStateToProps = (state: IAppState) => state.agencies;

export default connect(mapStateToProps)(Agencies);
