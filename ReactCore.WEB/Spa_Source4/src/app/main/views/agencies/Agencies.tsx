import * as React                                        from 'react';
import { connect }                                       from 'react-redux';
import { IAppState }                                     from '../../../../store';
import { IAgenciesState }                                from '../../../../store/agencies/types';
import { GetPropsStoreRoute }                            from '../../../types';
import { agenciesAddAction, agenciesClearActionCreator } from '../../../../store/agencies/actions';
import { UserDetails }                                   from '../../../../models/dto.models';

interface AgenciesProps
{
  test: string;
}

type Props = GetPropsStoreRoute<IAgenciesState, AgenciesProps>;

class Agencies extends React.Component<Props>
{
  public constructor(props: Props)
  {
    super(props);
  }

  componentDidMount()
  {
    this.props.dispatch(agenciesAddAction());
  }

  componentWillUnmount()
  {
    this.props.dispatch(agenciesClearActionCreator())
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
