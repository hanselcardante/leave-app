import axios from 'axios';
import * as actions from './actions';

export function recordLeaveComment(leaveId: number, userId: number, text: string) {
  return async dispatch => {
    try {
      await axios.post('/api/leave_comments', {
        comment_text: text,
        leave_id: leaveId,
        user_id: userId
      }, {
        headers: { 'Content-Type': 'application/json' }
      }).then(response => {
        // do something here        
      });
    } catch (error) {
      throw error;
    }
  }
}