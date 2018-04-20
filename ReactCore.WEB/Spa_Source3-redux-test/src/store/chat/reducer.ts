import { ChatActions, ChatActionType, ChatState } from './types';
import { Reducer }                                from 'redux';

export const initialState: ChatState = {
  username: '',
  connectedUsers: [],
  messages: [],
};

export const chatReducer: Reducer<ChatState> = (state: ChatState = initialState, action): ChatState =>
{
  switch ((action as ChatActions).type)
  {
    case ChatActionType.SET_USERNAME:
      return {...state, username: action.payload.username};
    case ChatActionType.USERS_LIST_UPDATED:
      return {...state, connectedUsers: action.payload.users};
    case ChatActionType.MESSAGE_RECEIVED:
      return {...state, messages: [...state.messages, action.payload]};
    default:
      return state;
  }
};
