import * as React                 from 'react';
import { connect }                from 'react-redux';
import { IAppState }              from '../../../../store';
import { IAgenciesState }         from '../../../../store/agencies/types';
import { GetAllProps } from '../../../types';

interface AgenciesProps
{

}

type AllProps = GetAllProps<AgenciesProps, IAgenciesState>;

class Agencies extends React.Component<AllProps, {}>
{
  public constructor(props: AllProps)
  {
    super(props);
  }

  componentDidMount()
  {
     console.log('props', this.props);
  }

  render()
  {
    return (
      <div className='flex-container'>
        Agencies
      </div>
    );
  }
}

const mapStateToProps = (state: IAppState) => state.agencies;

export default connect(mapStateToProps)(Agencies);
