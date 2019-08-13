import * as React from 'react';
import { LeaveCount } from '../../leaves/components/LeaveCount';
import { LeaveModal } from '../../leaves/containers/LeaveModal';
import { Navbar } from '../../common/containers/Navbar';
import User from '../../models/user';
import { NotificationInterface} from '../../definitions/notification';
import { LeaveListInterface } from '../../definitions/leave';
import { AlertInterface } from '../../definitions/alert';
import Leaves from '../../leaves/containers/Leaves';
import Preloader from '../../common/components/Preloader';
import Employee from '../../models/employee';
import Simplert from 'react-simplert';

interface Props {
  employee: Employee;
  notifications: NotificationInterface;
  alert: AlertInterface;
}

const RegularEmployeeDashboard = (props: Props) => {
  const {employee, notifications, alert} = props;

  if (!employee) {
    return <Preloader/>;
  }

  return (

<div>
    <Simplert 
        showSimplert= {alert.visibility}
        type= {alert.type}
        title={alert.status}
        message={alert.message}
      />
    <div className="container-fluid">
      <div className="row wrapper">
        <Navbar user={employee} notifications={notifications}/>
        <main className="col shadow-lg" id="content">
          <section>
            <div className="row">
              <div className="col">
                <div className="contents">
                  <div className="row">
                    <div className="col">
                      <div className="card border-0 shadow-sm leave-credits-table">
                        <LeaveCount leaveCredits={employee.leaveCredits}/>
                        <LeaveModal user={employee}/>
                      </div>
                    </div>
                  </div>

                  <Leaves/>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
</div>
  );

}
export default RegularEmployeeDashboard;