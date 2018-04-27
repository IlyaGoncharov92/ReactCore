import { ActionCreator, Dispatch }                                                           from 'redux';
import { AgenciesActionType, IAgenciesAddAction, IAgenciesClearAction, IAgenciesListAction } from './types';
import { UserDetails }                                                                       from '../../models/dto.models';
import { AgencyService }                                                                     from '../../services/webapi/agency.service';

const service = new AgencyService();

export const agenciesListAction: ActionCreator<IAgenciesListAction> = (users: UserDetails[]) => ({
  type: AgenciesActionType.AGENCIES_LIST,
  payload: users
});

export const agenciesAddAction: ActionCreator<IAgenciesAddAction> = (users: UserDetails[]) => ({
  type: AgenciesActionType.AGENCIES_ADD,
  payload: users
});

export const agenciesClearAction: ActionCreator<IAgenciesClearAction> = () => ({
  type: AgenciesActionType.AGENCIES_CLEAR
});

export const agenciesAdd = () =>
{
  return (dispatch: Dispatch<any>) =>
  {
    service.list().subscribe((users: UserDetails[]) =>
    {
      dispatch(agenciesAddAction(users));
    });
  }
};
