import * as React from 'react';
import LeavePermission from '../../models/leave_permission';
import { humanReadableDate } from '../../helpers/date';

interface RequestItemProps {
  key?: number;
  details?: LeavePermission;
  handleClick: any;
}

export const RequestRow = (props: RequestItemProps) => {

  const { details, handleClick } = props;

  return(
    <div className="row" onClick={handleClick}>
      <div className="col-sm">{humanReadableDate(details.createdAt)}</div>
      <div className="col-sm">{details.leaveType}</div>
      <div className="col-sm">{details.reason}</div>
      <div className="col-sm">{details.filedBy}</div>
    </div>
  );
}
