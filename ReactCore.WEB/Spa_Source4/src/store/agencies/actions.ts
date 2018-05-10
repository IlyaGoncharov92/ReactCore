import { ActionCreator, Dispatch }                                      from 'redux';
import { AgenciesActionType, IAgenciesAddAction, IAgenciesClearAction } from './types';
import { UserDetails }                                                  from '../../models/dto.models';
import { AgencyService }                                                from '../../services/webapi/agency.service';

const service = new AgencyService();

export const agenciesAddActionCreator: ActionCreator<IAgenciesAddAction> = (users: UserDetails[]) => ({
  type: AgenciesActionType.AGENCIES_ADD,
  payload: users
});

export const agenciesClearActionCreator: ActionCreator<IAgenciesClearAction> = () => ({
  type: AgenciesActionType.AGENCIES_CLEAR
});

export const agenciesAddAction = () =>
{
  return (dispatch: Dispatch<any>) =>
  {
    service.list().subscribe((users: UserDetails[]) =>
    {
      dispatch(agenciesAddActionCreator(users));
    });
  }
};
