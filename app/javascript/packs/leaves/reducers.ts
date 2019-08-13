import { Reducer } from 'redux';
import {
  LeavesActions,
  WizardState,
  WizardActions
} from './constants';

export const LeavesReducer: Reducer<any> = (state= {}, action) => {
  switch ((action as LeavesActions).type) {
    case 'get_leaves':
      return { ...state, list: action.payload.list };
    case 'get_requests':
      return { ...state, requests: action.payload.list };
    case 'get_request':
      return { ...state, permission: action.payload.request };
    case 'update_leave_permission':
      return { ...state,
               requests: [ ...state.requests.filter(leavePermission =>
                           leavePermission.id !== action.payload.request.id),
                           Object.assign({}, action.payload.request)]
      };
    case 'get_leave':
      return { ...state, leave_detail: action.payload.leave };
    default:
      return state;
  }
};

export const initialState: WizardState = {
  page: 'Main'
};

export const WizardReducer: Reducer<WizardState> = (state: WizardState = initialState, action) => {
    // We'll augment the action type on the switch case to make sure we have
    // all the cases handled.
  switch ((action as WizardActions).type) {
    case 'Sick':
      return { ...state, page:'SL' };
    case 'Vacation':
      return { ...state, page:'VL' };
    case 'Bereavement':
      return { ...state, page:'BL' };
    case 'Unpaid':
      return { ...state, page:'UL' };
    case 'Main':
      return { ...state, page: 'Main'}
    default:
      return state;
  }
};

