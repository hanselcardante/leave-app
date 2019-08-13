import { User } from './user'
import { EmployeesInterface } from '../definitions/employee';

class Employee extends User {
  public static instance = new Employee();

  public leaveCredits: {};

  public init(data: EmployeesInterface) {
    super.init(data);
    this.leaveCredits = data.leave_credits;
    return this;
  }
}

export default Employee;