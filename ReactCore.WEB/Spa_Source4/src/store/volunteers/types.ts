import { UserDetails } from '../../models/dto.models';
import { IBaseAction } from '../index';

export interface IVolunteersState
{
  volunteers: UserDetails[];
}

export enum VolunteersActionType
{
  VOLUNTEERS_ADD = 'VOLUNTEERS_ADD',
  VOLUNTEERS_CLEAR = 'VOLUNTEERS_CLEAR'
}

export interface IVolunteersAddAction extends IBaseAction<VolunteersActionType>
{
  type: VolunteersActionType.VOLUNTEERS_ADD,
  payload: UserDetails[];
}

export interface IVolunteersClearAction extends IBaseAction<VolunteersActionType>
{
  type: VolunteersActionType.VOLUNTEERS_CLEAR,
}
