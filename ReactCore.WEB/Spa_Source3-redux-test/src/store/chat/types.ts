// ./src/store/chat/types.ts

// Our chat-level state object
import { Action } from 'redux';

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

// I use the `@@context/ACTION_TYPE` convention for naming action types.

export interface SetAction extends Action
{
  type: '@@chat/SET_USERNAME';
  payload: {};
}

export interface UsersListUpdatedAction extends Action
{
  type: '@@chat/USERS_LIST_UPDATED';
  payload: {
    users: UserInfo[];
  };
}

export interface MessageReceivedAction extends Action
{
  type: '@@chat/MESSAGE_RECEIVED';
  payload: {
    timestamp: Date;
    user: string;
    message: MessagePayload;
  };
}

// Внизу здесь мы создадим дискриминационный тип объединения всех действий, которые будут использоваться для нашего редуктора
export type ChatActions = SetAction | UsersListUpdatedAction | MessageReceivedAction;