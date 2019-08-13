import { Action } from 'redux';

export interface AlertState {
   status: string;
   message: string;
   type: string;
   visibility: boolean;
}

export interface ModalState {
   modal: boolean;
}

export interface Success extends Action {
  type: 'success';
}

export interface Failed extends Action {
  type: 'failed';
}

export interface NoSuperior extends Action {
  type: 'no_superior';
}

export interface Approved extends Action {
  type: 'approved';
}

export interface Denied extends Action {
  type: 'denied';
}

export const SUCCESS = 'success';
export const FAILED = 'failed';
export const NO_SUPERIOR = 'no_superior';
export const APPROVED = 'approved';
export const DENIED = 'denied';

export type AlertActions = Success | Failed | NoSuperior | Approved | Denied;

// Modal
export const OPEN_MODAL = 'open_modal';
export const CLOSE_MODAL = 'close_modal';

export interface OpenModal extends Action {
  type: 'open_modal';
}

export interface CloseModal extends Action {
  type: 'close_modal';
}

export type WidgetActions = OpenModal | CloseModal;

// Request status
export const SUCCESS_STATUS = 'Success!';
export const FAILED_STATUS = 'Request Failed';

// Request Messages
export const SUCCESS_MSG = 'Your request has been successfuly submitted'
export const FAILED_MSG = 'You have another request with pending/accepted status with the same date'

// Request type
export const SUCCESS_TAG = 'success';
export const FAILED_TAG = 'error';

export const MODAL = {
  fileLeave:  'FILE_LEAVE',
  getDetails: 'GET_DETAILS'
}

