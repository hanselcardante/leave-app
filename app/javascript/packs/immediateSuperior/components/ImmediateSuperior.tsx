import * as React from 'react';
import  { Navbar }from '../../common/containers/Navbar';
import { LeaveCount } from '../../leaves/components/LeaveCount';
import Leaves from '../../leaves/containers/Leaves';
import { LeaveModal } from '../../leaves/containers/LeaveModal';
import User from '../../models/user';
import Preloader from '../../common/components/Preloader'
import Employee from '../../models/employee';
import Simplert from 'react-simplert';
import { AlertInterface } from '../../definitions/alert';

interface  Props {
  employee: Employee;
  alert: AlertInterface;
}

export const ImmediateSuperiorDashboard = (props: Props) =>  {
  const { employee, alert } = props;
  
  if (!employee) {
    return <Preloader/>;
  }

  return (
    <div className="container-fluid">
      <div className="row wrapper">
        <Navbar user={employee}/>
        <Simplert 
          showSimplert={alert.visibility}
          type={alert.type}
          title={alert.status}
          message={alert.message}
        />
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
  );
}

export default ImmediateSuperiorDashboard;