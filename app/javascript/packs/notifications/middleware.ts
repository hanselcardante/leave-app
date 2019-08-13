import axios from 'axios';
import Notification from '../models/notification';
import { NotificationListInterface } from '../definitions/notification';
import User from '../models/user';
import * as actions from './actions';

export function getNotifications (store, user: User) {

  try {
    axios.get('/api/notifications', {
      params: {
        id: user.id
      }
    }).then(response => {
      const notificationList: NotificationListInterface = Notification.instance.init(response.data);
      store.dispatch(actions.getNotifications({
        notificationList
      }));
    });
  } catch (error) {
    throw error;
  }
}

export function markAsRead (notifID: number) {
  return async dispatch => {
    try {
      await axios.patch('/api/notifications/' + notifID, {
        id: notifID
      });
    } catch (error) {
      throw error;
    }
  };
}