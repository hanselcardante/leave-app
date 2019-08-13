import * as React from 'react';
import LeavePermission from '../../models/leave_permission';
import LeavePermissionForm from './LeavePermissionFormComponent';
import { humanReadableDate } from '../../helpers/date';

interface RequestDetailsProps {
  details?: LeavePermission;
  closeModal: () => void;
  updateLeaveDetails: (data: any) => void;
}

const RequestDetailsContent = (props: RequestDetailsProps) => {
  const {details, closeModal, updateLeaveDetails} = props;
  return (
    <div className="">
      <div className="modal-body p-5">
        {details &&
        <div className="container">
          <div className="row my-3">
            <div className="col-sm">Date Filed</div>
            <div className="col-sm font-weight-bold">
              {humanReadableDate(details.createdAt)}
              </div>
          </div>
          <div className="row my-3">
            <div className="col-sm">Leave Type</div>
            <div className="col-sm font-weight-bold">{details.leaveType}</div>
          </div>
          <div className="row my-3">
            <div className="col-sm">Start Date</div>
            <div className="col-sm font-weight-bold">
              {humanReadableDate(details.startDate)}
              </div>
          </div>
          <div className="row my-3">
            <div className="col-sm">End Date</div>
            <div className="col-sm font-weight-bold">
              {humanReadableDate(details.endDate)}
              </div>
          </div>
          <div className="row my-3">
            <div className="col-sm">Days Off</div>
            <div className="col-sm font-weight-bold">
              {details.daysOff}
            </div>
          </div>
          {details.doctorsNote &&
          <div className="row my-3">
            <div className="col-sm">Submitted Doctor's Note</div>
            <div className="col-sm font-weight-bold">
              {details.doctorsNote ? 'Yes' : 'No'}
            </div>
          </div>
          }
          {details.immediateRelationship &&
          <div className="row my-3">
            <div className="col-sm">Immediate Relationship</div>
            <div className="col-sm font-weight-bold">
              {details.immediateRelationship ? 'Yes' : 'No'}
              </div>
            </div>
          }

          {details.status &&
          <div className="row my-3">
            <div className="col-sm">Status</div>
            <div className="col-sm font-weight-bold">
              { details.status === 'APPROVED' && <span className="text-success">{ details.status }</span> }
              { details.status === 'DENIED' && <span className="text-danger">{ details.status }</span> }
              { details.status === 'PENDING' && <span className="text-secondary">{ details.status }</span> }
            </div>
          </div>
          }
          {details.reason &&
          <div className="row my-2">
            <div className="col-sm font-weight-bold">Reason</div>
            <div className="row mx-2 my-2">
              <div className="col-sm">
                <p className="text-justify">{details.reason}</p>
              </div>
            </div>
          </div>
          }
          <hr/>
          {details.filedBy &&
          <div className="row my-3">
            <div className="col-sm">Filed By</div>
            <div className="col-sm font-weight-bold">{details.filedBy}</div>
          </div>
          }
          {details.superior &&
          <div className="row my-3">
            <div className="col-sm">Superior</div>
            <div className="col-sm font-weight-bold">{details.superior}</div>
          </div>
          }
          {details.leaveComment &&
          <div>
            <div className="row my-3">
              <div className="col-sm font-weight-bold">Comment</div>
            </div>
            <div className="row my-3">
                <div className="col-sm px-3">
                    <p className="text-justify">{details.leaveComment.comment_text}</p>
                </div>
            </div>
            <div className="row my-3">
              <div className="col-sm px-3">
                <p className="text-right font-italic"
                   data-style="font-size: .75rem;">{details.leaveComment.created_at}</p>
              </div>
            </div>
          </div>
          }
          {details.filedBy &&
            <div>
              <hr className="my-5"/>
              <LeavePermissionForm onSubmit={ updateLeaveDetails }
                                   permissionId={ details.id }
                                   leaveId={ details.leaveId }
                                   userId={ details.userId }/>
            </div>
          }
        </div> 
        }
      </div>

    </div>
  );
}

export default RequestDetailsContent;