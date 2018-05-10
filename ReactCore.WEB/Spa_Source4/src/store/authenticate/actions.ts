import { ActionCreator, Dispatch }                                                           from 'redux';
import { AuthenticationActionType, IAuthenticationLogInAction, IAuthenticationLogOutAction } from './types';
import { Authentication }                                                                    from '../../models/auth.models';

export const authenticationLogInActionCreator: ActionCreator<IAuthenticationLogInAction> = (auth: Authentication) => ({
  type: AuthenticationActionType.AUTHENTICATION_LOG_IN,
  payload: auth
});

export const authenticationLogOutActionCreator: ActionCreator<IAuthenticationLogOutAction> = () => ({
  type: AuthenticationActionType.AUTHENTICATION_LOG_OUT
});

export const authenticationLogInAction = (auth: Authentication) =>
{
  return (dispatch: Dispatch<any>) =>
  {
    dispatch(authenticationLogInActionCreator(auth));
  }
};

export const authenticationLogOutAction = () =>
{
  return (dispatch: Dispatch<any>) =>
  {
    dispatch(authenticationLogOutActionCreator());
  }
};
