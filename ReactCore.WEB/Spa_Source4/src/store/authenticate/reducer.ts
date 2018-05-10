import { AuthenticationActionType, IAuthenticationState } from './types';
import { IBaseAction }                                    from '../index';
import { AuthService }                                    from '../../services/auth.service';

const authService = new AuthService();

const initialState: IAuthenticationState = {
  authentication: authService.auth
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
