import { ActionCreator }                                                                           from 'redux';
import { ChatActionType, MessagePayload, MessageReceivedAction, UserInfo, UsersListUpdatedAction } from './types';

// Введите этих создателей действия с помощью: ActionCreator <ActionTypeYouWantToPass> `.
// Помните, вы также можете передавать параметры в создателя действия. Обязательно введите их правильно.

export const updateUsersList: ActionCreator<UsersListUpdatedAction> = (users: UserInfo[]) => ({
  type: ChatActionType.USERS_LIST_UPDATED,
  payload: {
    users,
  },
});

export const messageReceived: ActionCreator<MessageReceivedAction> = (user: string, message: MessagePayload) => ({
  type: ChatActionType.MESSAGE_RECEIVED,
  payload: {
    timestamp: new Date(),
    user,
    message,
  },
});
