import { ActionCreator, Dispatch }                                                           from 'redux';
import { AuthenticationActionType, IAuthenticationLogInAction, IAuthenticationLogOutAction } from './types';
import { Authentication }                                                                    from '../../models/auth.models';

export const authenticationLogInAction: ActionCreator<IAuthenticationLogInAction> = (auth: Authentication) => ({
  type: AuthenticationActionType.AUTHENTICATION_LOG_IN,
  payload: auth
});

export const authenticationLogOutAction: ActionCreator<IAuthenticationLogOutAction> = () => ({
  type: AuthenticationActionType.AUTHENTICATION_LOG_OUT
});

export const authenticationLogIn = (auth: Authentication) =>
{
  return (dispatch: Dispatch<any>) =>
  {
    dispatch(authenticationLogInAction(auth));
  }
};
