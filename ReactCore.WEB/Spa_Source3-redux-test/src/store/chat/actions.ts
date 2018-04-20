import { ActionCreator }                                                           from 'redux';
import { MessagePayload, MessageReceivedAction, UserInfo, UsersListUpdatedAction } from './types';

// Введите этих создателей действия с помощью: ActionCreator <ActionTypeYouWantToPass> `.
// Помните, вы также можете передавать параметры в создателя действия. Обязательно введите их правильно.

export const updateUsersList: ActionCreator<UsersListUpdatedAction> = (users: UserInfo[]) => ({
  type: '@@chat/USERS_LIST_UPDATED',
  payload: {
    users,
  },
});

export const messageReceived: ActionCreator<MessageReceivedAction> = (user: string, message: MessagePayload) => ({
  type: '@@chat/MESSAGE_RECEIVED',
  payload: {
    timestamp: new Date(),
    user,
    message,
  },
});
