import { createAction } from 'redux-actions';
import * as alert from './constants';

export const alertSuccess = createAction(alert.SUCCESS);
export const alertFailed = createAction(alert.FAILED);
export const alertNoSuperior = createAction(alert.NO_SUPERIOR);
export const alertApproved = createAction(alert.APPROVED);
export const alertDenied = createAction(alert.DENIED);

export const openModal = createAction(alert.OPEN_MODAL);
export const closeModal = createAction(alert.CLOSE_MODAL);
