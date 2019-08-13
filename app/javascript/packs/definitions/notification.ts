
export interface NotificationListInterface {
  [index: number]: {
    id: NotificationInterface['id'];
    text: NotificationInterface['text'];
    trackable_id: NotificationInterface['trackable_id'];
    notification_type: NotificationInterface['notification_type'];
    status: NotificationInterface['status'];
    recipient_id: NotificationInterface['recipient_id'];
    sender_id: NotificationInterface['sender_id'];
    };
}
export interface NotificationInterface {  
  id: number;
  text: string;
  trackable_id: number;
  notification_type: number;
  status: string;
  recipient_id: number;
  sender_id: number;
}