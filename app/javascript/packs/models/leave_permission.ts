import { PermissionInterface, LeaveCommentInterface } from '../definitions/leave';

export class LeavePermission {

  public static instance = new LeavePermission();

  public id: number;
  public userId: number;
  public leaveId: number;
  public createdAt: Date;
  public filedBy: string;
  public leaveType: string;
  public startDate: Date;
  public endDate: Date;
  public doctorsNote: boolean;
  public numOfHalfDays: number;
  public immediateRelationship: string;
  public reason: string;
  public status: string;
  public superior: string;
  public daysOff: number;
  public leaveComment: LeaveCommentInterface|null;

  public init(data: PermissionInterface[]) {
    const list = data.map(obj => {
      return {
        id: obj.id,
        userId: obj.user_id,
        leaveId: obj.leave_id,
        createdAt: obj.created_at,
        filedBy: obj.filed_by,
        leaveType: obj.leave_type,
        startDate: obj.leave.start_date,
        endDate: obj.leave.end_date,
        reason: obj.leave.reason || null,
        numOfHalfDays: obj.leave.num_of_halfdays || null,
        immediateRelationship: obj.leave.immediate_relationship,
        doctorsNote: obj.leave.doctor_note,
        status: obj.leave.status,
        leaveComment: obj.leave.leave_comment,
        daysOff: obj.days_off
      };
    });
    return list;
  }

  public initPermission(data: PermissionInterface) {
      return {
        id: data.id,
        userId: data.user_id,
        leaveId: data.leave_id,
        createdAt: data.created_at,
        filedBy: data.filed_by,
        leaveType: data.leave_type,
        startDate: data.leave.start_date,
        endDate: data.leave.end_date,
        reason: data.leave.reason,
        numOfHalfDays: data.leave.num_of_halfdays || null,
        immediateRelationship: data.leave.immediate_relationship,
        doctorsNote: data.leave.doctor_note,
        status: data.leave.status,
        leaveComment: data.leave.leave_comment,
        daysOff: data.days_off
      };
  }
}
export default LeavePermission;