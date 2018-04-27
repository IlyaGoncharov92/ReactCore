import { IVolunteersState, VolunteersActionType } from './types';
import { IBaseAction }                            from '../index';

const initialState: IVolunteersState = {
  volunteers: []
};

export const volunteersReducer = (state: IVolunteersState = initialState, action: IBaseAction<VolunteersActionType>): IVolunteersState =>
{
  switch (action.type)
  {
    case VolunteersActionType.VOLUNTEERS_ADD:
      return {...state, volunteers: [...state.volunteers, ...action.payload]};
    case VolunteersActionType.VOLUNTEERS_CLEAR:
      return {...state, volunteers: []};
    default:
      return state;
  }
};
