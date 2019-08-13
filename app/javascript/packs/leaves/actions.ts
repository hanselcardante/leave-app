import { createAction } from 'redux-actions';
import * as type from './constants';

export const toVacation = createAction(type.VACATION);
export const toSick = createAction(type.SICK);
export const toBereavement = createAction(type.BEREAVEMENT);
export const toUnpaid = createAction(type.UNPAID);
export const toMain = createAction(type.MAIN);

export const getLeaves = createAction(type.GET_LEAVES);
export const getRequests = createAction(type.GET_REQUESTS);
export const getRequest = createAction(type.GET_REQUEST);
export const getLeave = createAction(type.GET_LEAVE);

export const updateLeavePermission = createAction(type.UPDATE_LEAVE_PERMISSION);