import * as React from 'react';
import Leave from '../../models/leave';
import { humanReadableDate } from '../../helpers/date';


interface LeaveItemProps {
  key?: number;
  details?: Leave;
  handleClick: any;
}
export const LeaveRow = (props: LeaveItemProps) => {

  const { details, handleClick } = props;

  return(
      <div className="row" onClick={handleClick}>
          <div className="col-sm">{humanReadableDate(details.createdAt)}</div>
          <div className="col-sm">{details.leaveType}</div>
          <div className="col-sm">{details.reason}</div>
          <div className="col-sm font-weight-bold">
            { details.status === 'APPROVED' && <span className="text-success">{ details.status }</span> }
            { details.status === 'DENIED' && <span className="text-danger">{ details.status }</span> }
            { details.status === 'PENDING' && <span className="text-secondary">{ details.status }</span> }
          </div>
      </div>
  );
}
