import * as React from 'react';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';

interface Props {
  onSubmit: (data: any) => void;
  permissionId: number;
  leaveId: number;
  userId: number;
}

class LeavePermissionFormComponent extends React.Component<Props & InjectedFormProps<{}, Props>> {
  public render() {
    const { handleSubmit, onSubmit, permissionId, leaveId, userId } = this.props;

    return (
      <form className="border-0 col-sm-12" onSubmit={ handleSubmit!(onSubmit) }>
        <div className="row">
          <div className="col-sm font-weight-bold my-3">Your Comment: </div>
          <Field
            name="comment"
            component="textarea"
            className="no-resize form-control"
            rows={10}
            placeholder="Enter a comment... (optional)"
          />
        </div>
        <div className="row my-5">
          <div className="col-sm d-flex justify-content-around">
            <div className="px-3 w-50">
              <button className="btn btn-lg btn-outline-danger btn-block" onClick={ handleSubmit(values => 
                onSubmit({ 
                  ...values,
                  permission: permissionId,
                  leave: leaveId,
                  user: userId,
                  status: 2
                }))}>DENY</button>
            </div>
            <div className="px-3 w-50">
              <button className="btn btn-lg btn-outline-success btn-block" onClick={ handleSubmit(values => 
                onSubmit({ 
                  ...values,
                  permission: permissionId,
                  leave: leaveId,
                  user: userId,
                  status: 1
                }))}>APPROVE</button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default reduxForm<any, Props>({
  form: 'comment'
})(LeavePermissionFormComponent);