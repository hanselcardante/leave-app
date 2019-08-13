import { Reducer } from 'redux';
import { NotificationActions } from './constants';

export const NotificationReducer: Reducer<any> = (state= {}, action) => {
  switch ((action as NotificationActions).type) {
    case 'get_notifications':
      return { ...state, notificationList: action.payload.notificationList };
    default:
      return state;
  }
};