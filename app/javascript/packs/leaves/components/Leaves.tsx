import * as React from 'react';
import User from '../../models/user';
import Leave from '../../models/leave';
import {LeaveRow} from './LeaveRow';
import Modal from '../../widgets/containers/Modal';
import {RequestRow} from './RequestRow';
import LeavePermission from '../../models/leave_permission';
import Table from '../../widgets/components/Table';
import {RequestDetails} from '../containers/RequestDetails';
import {MODAL} from '../../widgets/constants';
import { LEAVE_DETAILS_TITLE } from '../constants';

interface ModalInterface {
  context?: string;
  isOpen?: boolean;
  resource?: string;
}

interface LeaveProps {
  user?: User;
  leaves?: Leave[];
  requests?: LeavePermission[];
  modal?: ModalInterface;
  getDetails?: (details: Leave|LeavePermission) => void;
}

const LeavesComponent= (props: LeaveProps) => {
  const {leaves, modal, getDetails, requests} = props;
  return (
    <div>
      { modal && modal.context === MODAL.getDetails &&
      <Modal isOpen={modal.isOpen} Content={RequestDetails} title={LEAVE_DETAILS_TITLE}/>}
      <Table title={'Leave Requests:'}
             headers={['Date Filed', 'Leave Type',
               'Leave Details', 'Status']}
             Row={LeaveRow}
             data={leaves}
             getDetails={getDetails}
             resource={'Leave'}
              />
      {requests &&
      <Table title={'Permission Requests:'}
             headers={['Date Filed', 'Leave Type',
               'Leave Details', 'Filed By']}
             Row={RequestRow}
             data={requests}
             getDetails={getDetails}
             resource={'LeavePermission'}
      />
      }
    </div>
  );
};

export default LeavesComponent;