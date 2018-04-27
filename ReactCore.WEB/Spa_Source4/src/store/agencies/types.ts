import { UserDetails } from '../../models/dto.models';
import { IBaseAction } from '../index';

export interface IAgenciesState
{
  agencies: UserDetails[];
}

export enum AgenciesActionType
{
  AGENCIES_LIST = 'AGENCIES_LIST',
  AGENCIES_ADD = 'AGENCIES_ADD'
}

export interface IAgenciesListAction extends IBaseAction<AgenciesActionType>
{
  type: AgenciesActionType.AGENCIES_LIST,
  payload: UserDetails[]
}
