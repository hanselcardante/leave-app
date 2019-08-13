import { UsersInterface } from './user';

export interface LeaveListInterface {
  [index: number]: LeaveInterface
}

export interface LeaveInterface {
  id: number;
  name: string;
  start_date: Date;
  end_date: Date;
  credits_left: number;
  reason?: string;
  num_of_halfdays: number;
  immediate_relationship: boolean;
  doctor_note: boolean;
  leave_type: {
    name: string;
    code: string;
  };
  leave_comment: {
    comment_text: string;
    created_at: Date;
    user?: UsersInterface;
  }
  created_at: Date;
  status: string;
  superior: string;
  days_off: number;
}

export interface PermissionListInterface {
  [index: number]: PermissionInterface
}

export interface PermissionInterface {
  id: number;
  status: string;
  user_id: number;
  leave_id: number;
  created_at: Date;
  filed_by: string;
  leave: LeaveInterface;
  leave_type: string;
  days_off: number;
}

export interface LeaveCommentInterface{
  comment_text: string;
  created_at: Date;
  user: UsersInterface;
}

