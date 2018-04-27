import { UserDetails } from '../../models/dto.models';
import { IBaseAction } from '../index';

export interface IAgenciesState
{
  agencies: UserDetails[];
}

export enum AgenciesActionType
{
  AGENCIES_LIST = 'AGENCIES_LIST',
  AGENCIES_ADD = 'AGENCIES_ADD',
  AGENCIES_CLEAR = 'AGENCIES_CLEAR'
}

export interface IAgenciesListAction extends IBaseAction<AgenciesActionType>
{
  type: AgenciesActionType.AGENCIES_LIST,
  payload: UserDetails[]
}

export interface IAgenciesAddAction extends IBaseAction<AgenciesActionType>
{
  type: AgenciesActionType.AGENCIES_ADD,
  payload: UserDetails[]
}

export interface IAgenciesClearAction extends IBaseAction<AgenciesActionType>
{
  type: AgenciesActionType.AGENCIES_CLEAR
}
