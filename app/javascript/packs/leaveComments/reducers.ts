import { LeaveCommentsActions } from './constants';
import { Reducer } from 'redux';

// TODO: REFACTOR use key mapping instead of using switch statement
export const LeaveCommentsReducer: Reducer<any> = (state= {}, action) => {
  switch ((action as LeaveCommentsActions).type) {
    case 'create_leave_comment':
      return {
      	...state,
        leave_comments: [...state.leave_comments, action.payload]
      };
    default:
      return state;
  }
};