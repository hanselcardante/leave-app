import { Action } from 'redux';

export const GET_LEAVES = 'get_leaves';
export const GET_REQUESTS = 'get_requests'
export const GET_REQUEST = 'get_request'
export const UPDATE_LEAVE_PERMISSION = 'update_leave_permission';
export const GET_LEAVE = 'get_leave'

export interface GetLeaves extends Action {
  type: 'get_leaves';
}

export interface UpdateLeavePermission extends Action {
	type: 'update_leave_permission';
}

export interface GetRequests extends Action {
  type: 'get_requests';
}

export interface GetRequest extends Action {
  type: 'get_request';
}

export interface GetLeave extends Action {
  type: 'get_leave';
}

export type LeavesActions = GetLeaves | GetRequests | GetRequest | GetLeave | UpdateLeavePermission;

export interface WizardState {
   page: string;
}

export interface Sick extends Action {
  type: 'Sick';
}

export interface Vacation extends Action {
  type: 'Vacation';
}

export interface Unpaid extends Action {
  type: 'Unpaid';
}

export interface Bereavement extends Action {
  type: 'Bereavement';
}
export interface Main extends Action{
  type: 'Main'
}

export const VACATION = 'Vacation';
export const SICK = 'Sick';
export const UNPAID = 'Unpaid';
export const BEREAVEMENT = 'Bereavement';
export const MAIN = 'Main'

export type WizardActions = Sick | Vacation | Unpaid | Bereavement | Main;

// Page constants
export const SL = 'SL'
export const BL = 'BL'
export const VL = 'VL'
export const UL = 'UL'

export const LEAVE_FORM_TITLE = 'Leave Request Form'
export const LEAVE_DETAILS_TITLE = 'Leave Details'

export const customStyles = {
  maxWidth: '800px',
  width: '80%'
};
