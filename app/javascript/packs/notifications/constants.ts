import { Action } from 'redux';
import Notification from '../models/notification';
import { NotificationListInterface} from '../definitions/notification';

export const GET_NOTIFICATIONS = 'get_notifications';

export interface GetNotification extends Action {
  type: 'get_notifications';
  payload: NotificationListInterface;
}


export type NotificationActions = GetNotification;
