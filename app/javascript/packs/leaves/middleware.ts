import * as actions from './actions';
import User from '../models/user';
import LeavePermission from '../models/leave_permission';
import axios from 'axios';
import { History } from 'history';
import * as widgetActions from '../widgets/actions';
import { LeaveForm } from './components/LeaveWizard';
import Leave from '../models/leave';
import { LeaveListInterface } from '../definitions/leave';
// import { getApiRequest, ApiRequest} from '../helpers/utils';

export function sendLeaveForm (form: LeaveForm) {
  return async dispatch => {
      try {
          await axios.post('/api/leaves',{
            
              data: form
            
          }).then(response => {
            dispatch(widgetActions.closeModal())
            dispatch(widgetActions.alertSuccess())
            // temporary for demo, should append only the response data
            dispatch(getLeaves(response.data.user));
           
            });
        } catch (error) {
          switch (error.response.status) {
            case 403:
              if (error.response.data.status === 'FAILED') {
                dispatch(widgetActions.closeModal())
                dispatch(widgetActions.alertFailed())
              }
              break;
            default:
          }
        }
    };
}

function getLeaves (user: User) {
  return async dispatch => {
    try {
      await axios.get('/api/leaves', {
        params: {
          id: user.id
        }
      }).then(response => {
        const list = Leave.instance.init(response.data);
        dispatch(actions.getLeaves({
          list
        }));
      });
    } catch (error) {
      throw error;
    }
  };
}

function getRequests (user: User) {
  return async dispatch => {
    try {
      await axios.get('/api/leave_permissions', {
        params: {
          id: user.id
        }
      }).then(response => {
        const list = LeavePermission.instance.init(response.data);
        dispatch(actions.getRequests({
          list
        }));
      });
    } catch (error) {
      throw error;
    }
  };
}

export function getLeave (permission: string) {
  return async dispatch => {
    try {
      await axios.get('/api/leaves/'.concat(permission))
        .then(response => {
          const leave = Leave.instance.initLeave(response.data);
          dispatch(widgetActions.openModal());
          dispatch(actions.getLeave({
            leave
          }));
      });
    } catch (error) {
      throw error;
    }
  };
}

export function initializeLeaves(store) {
    const user: User = store.getState().auth.user;
    store.dispatch(getLeaves(user));
}

export function initializeRequests(store) {
  const user: User = store.getState().auth.user;
  store.dispatch(getRequests(user));
}

export function recordLeavePermission(permissionId: number, permissionStatus: number) {
  return async dispatch => {
    try {
      await axios.patch('/api/leave_permissions/' + permissionId, {
        id: permissionId,
        status: permissionStatus
      }, {
        headers: { 'Content-Type': 'application/json' }
      }).then(response => {
        const request = LeavePermission.instance.initPermission(response.data);
        dispatch(actions.updateLeavePermission({
          request
        }));

        dispatch(widgetActions.closeModal())

        if (permissionStatus === 1) {
          dispatch(widgetActions.alertApproved());
        } else {
          dispatch(widgetActions.alertDenied());
        }
      });
    } catch (error) {
      throw error;
    }
  }
}
