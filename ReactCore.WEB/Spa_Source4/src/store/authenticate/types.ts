import { Authentication } from '../../models/auth.models';
import { IBaseAction }    from '../index';

export interface IAuthenticationState
{
  authentication: Authentication;
}

export enum AuthenticationActionType
{
  AUTHENTICATION_LOG_IN = 'AUTHENTICATION_LOG_IN',
  AUTHENTICATION_LOG_OUT = 'AUTHENTICATION_LOG_OUT'
}

export interface IAuthenticationLogInAction extends IBaseAction<AuthenticationActionType>
{
  type: AuthenticationActionType.AUTHENTICATION_LOG_IN,
  payload: Authentication
}

export interface IAuthenticationLogOutAction extends IBaseAction<AuthenticationActionType>
{
  type: AuthenticationActionType.AUTHENTICATION_LOG_OUT
}
