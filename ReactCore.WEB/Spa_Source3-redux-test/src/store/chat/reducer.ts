import { ChatActions, ChatState } from './types';
import { Reducer }                from 'redux';

export const initialState: ChatState = {
  username: '',
  connectedUsers: [],
  messages: [],
};

export const chatReducer: Reducer<ChatState> = (state: ChatState = initialState, action): ChatState =>
{
  switch ((action as ChatActions).type)
  {
    case '@@chat/SET_USERNAME':
      return {...state, username: action.payload.username};
    case '@@chat/USERS_LIST_UPDATED':
      return {...state, connectedUsers: action.payload.users};
    case '@@chat/MESSAGE_RECEIVED':
      return {...state, messages: [...state.messages, action.payload]};
    default:
      return state;
  }
};
