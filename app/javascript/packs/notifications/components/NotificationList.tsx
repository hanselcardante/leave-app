import * as React from 'react';
import User from '../../models/user';
import { NotificationInterface } from '../../definitions/notification';
import { Notification } from './Notification';

interface NotificationListProps {
  user: User|null;
  notifications: NotificationInterface[]|null;
  markAsRead: (num) => void;
}

export const NotificationList = (props: NotificationListProps) => {
    const { markAsRead, notifications } = props;
    
    return(
      <div className="dropdown-menu">
        <h6 className="dropdown-header">Notifications</h6>
          { notifications && notifications instanceof Array &&
            notifications.map(obj => {
              return <Notification key={obj.id} text={obj.text} onClick={markAsRead(obj.id)}/>
            })
          }       
      </div>
    );

}
