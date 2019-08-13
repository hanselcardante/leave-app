import * as React from 'react';
import { Field, FormProps, InjectedFormProps,
         WrappedFieldProps, reduxForm, FormErrors } from 'redux-form';
import { ModalProps } from '../../containers/LeaveModal';
import { validate } from '../../validate';
import * as field from '../../../widgets/renderField';
import { Scrollbars } from 'react-custom-scrollbars';

export const LeaveVacationComponent = props => {

    const { handleSubmit, back } = props;
    return (<div className="">
              
              <Scrollbars autoHeight={true}
              autoHeightMin={200}
              autoHeightMax={530}
              autoHide={true}
              autoHideTimeout={400}
              autoHideDuration={200}>  
                <div className="modal-body p-4">
                <div className="alert alert-danger">
                  <h5 className="font-weight-bold">NOTE:</h5><h6>Vacation Leave</h6> <small>
                    Requests for time off must be made at least two (2) weeks in advance of the start of the time off, 
                    and are subject to approval.  The Company reserves the right not to approve a vacation request if 
                    it will interfere with Company operations or adversely affect coverage of job and staff 
                    requirements. Vacation Leave may not be used in succession with Personal Leave or Sick Leave.
                  </small>
                </div>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      
                      <Field name="reason"
                             component={field.renderReason}
                             type="text"
                             placeholder="Reason (optional)" />
                    </div>
                    
                      <Field name="read"
                             component={field.renderRead}
                             type="checkbox"
                             text="I agree that I've read the note stated above" />
                    <br/>
                    <div className="modal-footer"> 
                      <button type="button" className="btn btn-primary float-left" onClick={back}>
                          Back
                      </button>
                      <button className="btn btn-success float-right" type="submit">
                          Submit
                      </button>
                    </div>
                  </form>
                </div>
              </Scrollbars>
            </div>);
  
}

const vacationPage =  reduxForm({
  validate,
  form: 'LeaveRequest', 
  destroyOnUnmount: false, 
  forceUnregisterOnUnmount: true
})(LeaveVacationComponent as any)

export default (vacationPage as any);