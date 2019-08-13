import { LeaveListInterface, LeaveCommentInterface, LeaveInterface } from '../definitions/leave';

export default class Leave {

  public static instance = new Leave();

  public id: number;
  public startDate: Date;
  public endDate: Date;
  public reason?: string;
  public numOfHalfDays: number;
  public immediateRelationship: boolean | null;
  public doctorsNote: boolean | null;
  public leaveType: string;
  public createdAt: Date;
  public status: string;
  public leaveComment: LeaveCommentInterface|null;
  public filedBy: string | null;
  public superior: string;
  public daysOff: number;

  public init(data: LeaveInterface[]) {
    const list = data.map(obj => {
      return {
        id: obj.id,
        startDate: obj.start_date,
        endDate: obj.end_date,
        creditsLeft: obj.credits_left,
        reason: obj.reason,
        numOfHalfDays: obj.num_of_halfdays,
        immediateRelationship: obj.immediate_relationship,
        doctorsNote: obj.doctor_note,
        leaveType: obj.leave_type.name,
        createdAt: obj.created_at,
        status: obj.status,
        leaveComment: obj.leave_comment,
        superior: obj.superior,
        daysOff: obj.days_off
      };
    });
    return list;
  }
  public initLeave(obj: LeaveInterface) {
      return {
        id: obj.id,
        startDate: obj.start_date,
        endDate: obj.end_date,
        creditsLeft: obj.credits_left,
        reason: obj.reason,
        numOfHalfDays: obj.num_of_halfdays,
        immediateRelationship: obj.immediate_relationship,
        doctorsNote: obj.doctor_note,
        leaveType: obj.leave_type.name,
        createdAt: obj.created_at,
        status: obj.status,
        leaveComment: obj.leave_comment,
        superior: obj.superior,
        daysOff: obj.days_off
      };
  }
}
