import * as React from 'react';

export const LeaveCount = props => {
  const { leaveCredits } = props;

  if (leaveCredits === null) {
    return (
      <div className="row">
        <div className="col-9 offset-2">
            <div className="alert alert-info alert-dismissible fade show" role="alert">
              <h4 className="alert-heading">System can't retrieve leave credits!</h4>
              <p>It appears that your account is still not completely setup. Please wait for the
              administrator to finish setting up your account before going any further. While
              waiting, feel free to explore the system.</p>
              <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
        </div>
      </div>
    );
  }
  return(
        <div>
          <div className="card-header border-0 bg-transparent">
            <h3>Leaves Credits Remaining: </h3>
            <hr className="divider"/>
          </div>
          <div className="card-body">
            <div className="col-9 offset-2">
              <div className="card-deck">
                <div className="card">
                  <div className="card-body text-center">
                    <h2 className="card-title">{ leaveCredits.VL }</h2>
                    <p className="card-text">Vacation Leave</p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body text-center">
                    <h2 className="card-title">{ leaveCredits.SL }</h2>
                    <p className="card-text">Sick Leave</p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body text-center">
                    <h2 className="card-title">{ leaveCredits.PL }</h2>
                    <p className="card-text">Personal Leave</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  );
};
