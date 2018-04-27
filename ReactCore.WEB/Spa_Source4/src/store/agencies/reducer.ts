import { AgenciesActionType, IAgenciesState } from './types';
import { IBaseAction }                        from '../index';

const initialState: IAgenciesState = {
  agencies: []
};

export const agenciesReducer = (state: IAgenciesState = initialState, action: IBaseAction<AgenciesActionType>): IAgenciesState =>
{
  switch (action.type)
  {
    case AgenciesActionType.AGENCIES_LIST:
      return state;
    case AgenciesActionType.AGENCIES_ADD:
      return {...state, agencies: [...state.agencies, ...action.payload]};
    case AgenciesActionType.AGENCIES_CLEAR:
      return {...state, agencies: []};
    default:
      return state;
  }
};
