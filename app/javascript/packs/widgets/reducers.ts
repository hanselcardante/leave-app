import { Reducer } from 'redux';
import * as constants from './constants';

export const initialState: constants.AlertState = {
  status: null,
  message: null,
  type: null,
  visibility: false
};

export const modalInitialState: constants.ModalState = {
  modal: false
};

export const AlertReducer: Reducer<constants.AlertState> = (state: constants.AlertState = initialState, action) => {

  switch ((action as constants.AlertActions).type) {
    case 'success':
      return { ...state, status: constants.SUCCESS_STATUS, message: constants.SUCCESS_MSG,
        type: constants.SUCCESS_TAG , visibility: true };
    case 'failed':
      return { ...state, status: constants.FAILED_STATUS, message: constants.FAILED_MSG,
        type: constants.FAILED_TAG, visibility: true };
    case 'approved':
      return { ...state, status:'APPROVED', message: 'Request has been approved.', type: 'success', visibility: true};
    case 'denied':
      return { ...state, status:'DENIED', message: 'Request has been denied.', type: 'error', visibility: true};
    default:
      return state;
  }
};


export const WidgetReducer: Reducer<any> = (state: constants.ModalState =  modalInitialState , action) => {

  switch ((action as constants.WidgetActions).type) {
    case 'open_modal':
      return { ...state, modal:{
        resource: action.payload.resource,
        isOpen: action.payload.isOpen,
        context: action.payload.context,
        details: action.payload.details
        }};
    case 'close_modal':
      return { ...state, modal: null };
    default:
      return state;
  }
}