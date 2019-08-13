import { NotificationListInterface } from '../definitions/notification';

class Notification {

  public static instance = new Notification();

  public list: NotificationListInterface;
  public id: number;
  public text: string;
  public trackableId: number;
  public trackableType: string;
  public status: string;
  public recipientId: number;
  public senderId: number;

  public init(notificationList: NotificationListInterface) {
    return this.list = notificationList;
  }
}

export default Notification;
