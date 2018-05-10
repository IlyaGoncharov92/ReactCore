import { ActionCreator, Dispatch }                                                           from 'redux';
import { AuthenticationActionType, IAuthenticationLogInAction, IAuthenticationLogOutAction } from './types';
import { Authentication }                                                                    from '../../models/auth.models';
import { push }                                                                              from 'react-router-redux';
import { Page }                                                                              from '../../routing/Page';

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

export const authenticationLogOut = () =>
{
  return (dispatch: Dispatch<any>) =>
  {
    dispatch(authenticationLogOutAction());
  }
};

export const REDIRECTTEST = () =>
{
  return (dispatch: Dispatch<any>) =>
  {
    dispatch(push(Page.login.path));
  }
};
