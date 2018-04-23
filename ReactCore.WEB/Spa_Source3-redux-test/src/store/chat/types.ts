import { Action } from 'redux';

export enum ChatActionType
{
  SET_USERNAME = 'SET_USERNAME',
  USERS_LIST_UPDATED = 'USERS_LIST_UPDATED',
  MESSAGE_RECEIVED = 'MESSAGE_RECEIVED',
  THUNK_TEST = 'THUNK_TEST'
}

export interface ChatState
{
  username: string;
  connectedUsers: UserInfo[];
  messages: MessagePayload[];
}

export interface UserInfo
{
  id: number;
  name: string;
}

export interface TemplateItem
{
  item: string;
  text: string;
}

export interface MessagePayload
{
  timestamp: Date;
  user: string;
  message: {
    type: 'text' | 'template';
    content?: string;
    items?: TemplateItem[];
  };
}

export interface SetAction extends Action
{
  type: ChatActionType.SET_USERNAME;
  payload: {};
}

export interface UsersListUpdatedAction extends Action
{
  type: ChatActionType.USERS_LIST_UPDATED;
  payload: {
    users: UserInfo[];
  };
}

export interface MessageReceivedAction extends Action
{
  type: ChatActionType.MESSAGE_RECEIVED;
  payload: {
    timestamp: Date;
    user: string;
    message: MessagePayload;
  };
}

export interface ThunkAction extends Action
{
  type: ChatActionType.THUNK_TEST;
  payload: {};
}

export type ChatActions = SetAction | UsersListUpdatedAction | MessageReceivedAction | ThunkAction;