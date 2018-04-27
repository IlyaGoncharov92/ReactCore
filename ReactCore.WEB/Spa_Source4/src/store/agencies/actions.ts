import { ActionCreator }                           from 'redux';
import { AgenciesActionType, IAgenciesListAction } from './types';
import { UserDetails }                             from '../../models/dto.models';
import { AgencyService }                           from '../../services/webapi/agency.service';

const service = new AgencyService();

export const agenciesList: ActionCreator<IAgenciesListAction> = (users: UserDetails[]) => ({
  type: AgenciesActionType.AGENCIES_LIST,
  payload: users
});

