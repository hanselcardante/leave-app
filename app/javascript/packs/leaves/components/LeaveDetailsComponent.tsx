import  * as React  from 'react';
import Leave from '../../models/leave';
import { humanReadableDate } from '../../helpers/date';

interface LeaveDetailsProps {
  leave: Leave;
  closeModal: () => void;
}

export const LeaveDetailsComponent = (props: LeaveDetailsProps) => {
  const { leave, closeModal } = props;
  return (
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">
          Leave Details
        </h5>
        <button type="button" className="close"
                data-dismiss="modal" aria-label="Close"
                onClick={closeModal}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body p-5">
        {leave &&
        <dl className="row">
          <dt className="col-sm-4 text-right">Date Filed</dt>
          <dd className="col-sm-8">{humanReadableDate(leave.createdAt)}</dd>

          <dt className="col-sm-4 text-right">Leave Type</dt>
          <dd className="col-sm-8">{leave.leaveType}</dd>

          <dt className="col-sm-4 text-right">Start Date</dt>
          <dd className="col-sm-8">
            <dl className="row">
              <dd className="col-sm-4">{humanReadableDate(leave.startDate)}</dd>
              <dt className="col-sm-4">through</dt>
              <dd className="col-sm-4">{humanReadableDate(leave.endDate)}</dd>
            </dl>
          </dd>

          <div className="container row">
            <dt className="col-sm-4 text-right">Number of half days</dt>
            <dd className="col-sm-8">{leave.numOfHalfDays}</dd>
          </div>

          <div className="container row">
            <dt className="col-sm-4 text-right">{leave.leaveType === 'SL' ? 'Illness' :'Reason'}:</dt>
            <dd className="col-sm-8">{ leave.reason ? leave.reason :'No reason needed'}</dd>
          </div>
          {leave.doctorsNote &&
          <div  className="container row">
            <dt className="col-sm-4 text-right">Submitted Doctors note</dt>
            <dd className="col-sm-8">{leave.doctorsNote ? 'Yes' : 'No'}</dd>
          </div>
          }
          {leave.immediateRelationship &&
          <div  className="container row">
            <dt className="col-sm-4 text-right">Relationship to the deceased</dt>
            <dd className="col-sm-8">{leave.immediateRelationship ? 'Immediate' : 'Non-immediate'}</dd>
          </div>
          }
          <div  className="container row">
            <dt className="col-sm-4 text-right">Leave Status</dt>
            <dd className="col-sm-8">
              { leave.status === 'APPROVED' && <span className="text-success">{ leave.status }</span> }
              { leave.status === 'DENIED' && <span className="text-danger">{ leave.status }</span> }
              { leave.status === 'PENDING' && <span className="text-secondary">{ leave.status }</span> }
            </dd>
          </div>
          <hr className="divider"/>
          <h4>Comments</h4>
          {
            leave.leaveComment === null &&
            <dl className="row">
              <caption>No comments yet</caption>
            </dl>
          }
          {
            leave.leaveComment !== null &&
            <dl className="row">
              <dt className="col-sm-4 text-right">Immediate superior</dt>
              <dd className="col-sm-8">
                {leave.leaveComment.user.first_name}
                {leave.leaveComment.user.last_name}</dd>
              <dt className="col-sm-4 text-right">Created at</dt>
              <dd className="col-sm-8">{leave.leaveComment.created_at}</dd>
              <dt className="col-sm-4 text-right">{leave.leaveComment.user.first_name} says:</dt>
              <dd className="col-sm-8">{leave.leaveComment.comment_text}</dd>
            </dl>
          }
        </dl>
        }
      </div>
    </div>

  );
};