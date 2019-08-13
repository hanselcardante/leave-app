import * as React from 'react';
import User from '../../models/user';
import { NotificationInterface } from '../../definitions/notification';

interface NotificationProps {
  text: string;
  onClick;
}

export const Notification = (props: NotificationProps) => {
  const {text, onClick} = props;

  return(
  <a className="dropdown-item" onClick={onClick} href="#">
    <h6>{text}</h6>
  </a>
  );
}
