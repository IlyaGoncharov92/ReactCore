import { AgenciesActionType, IAgenciesState } from './types';

const initialState: IAgenciesState = {
  agencies: []
};

export const agenciesReducer = (state: IAgenciesState = initialState, action: any): IAgenciesState =>
{
  switch (action.type)
  {
    case AgenciesActionType.AGENCIES_LIST:
      return state;
    default:
      return state;
  }
};
