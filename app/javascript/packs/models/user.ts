import { UserRolesInterface, UsersInterface } from '../definitions/user';

export class User {
  public static instance = new User();

  public id: number;
  public firstName: string;
  public lastName: string;
  public email: string;
  public employmentDate: Date;
  public token: string;
  public role: string|null;
  public roles: UserRolesInterface;
  public civilStatus: string;
  public sex: string;
  public notificationCount: number;

  public init(data: UsersInterface) {
    this.id = data.id;
    this.email = data.email;
    this.firstName = data.first_name;
    this.lastName = data.last_name;
    this.employmentDate = data.employment_date;
    this.civilStatus = data.civil_status;
    this.sex = data.sex
    this.token = data.authentication_token;
    this.role = data.user_role_type
      ? data.user_role_type.role_type
      :'regular_employee';
    this.notificationCount = data.notificationCount;
    return this;
  }

  public getRole(roles): string {
    let superior = roles[0].role_type === 'regular_employee'
      ? 'regular_employee'
      : 'admin';
    if (roles.length > 1) {
      superior = 'superior';
    }
    return superior;
  }

}

export default User;
