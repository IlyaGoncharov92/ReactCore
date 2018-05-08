import { AuthenticationActionType, IAuthenticationState } from './types';
import { Authentication }                                 from '../../models/auth.models';
import { IBaseAction }                                    from '../index';

const initialState: IAuthenticationState = {
  authentication: new Authentication()
};

export const authenticationReducer = (state: IAuthenticationState = initialState, action: IBaseAction<AuthenticationActionType>): IAuthenticationState =>
{
  switch (action.type)
  {
    case AuthenticationActionType.AUTHENTICATION_LOG_IN:
      return {...state, authentication: action.payload};
    case AuthenticationActionType.AUTHENTICATION_LOG_OUT:
      return {...state, authentication: null};
    default:
      return state;
  }
};

