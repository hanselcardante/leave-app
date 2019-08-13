import { Action } from 'redux';

export const CREATE_LEAVE_COMMENT = 'create_comment';

export interface CreateLeaveComment extends Action {
	type: 'create_leave_comment';
}

export type LeaveCommentsActions = CreateLeaveComment;