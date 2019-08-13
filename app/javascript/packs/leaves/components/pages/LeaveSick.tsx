import * as React from 'react';
import { Field, FormProps, InjectedFormProps,
         WrappedFieldProps, reduxForm, FormErrors } from 'redux-form';
import { ModalProps } from '../../containers/LeaveModal';
import { renderField } from '../../../widgets/renderField';
import { validate } from '../../validate';
import PropTypes from 'prop-types';
import Employee from '../../../models/employee';
import { Scrollbars } from 'react-custom-scrollbars';

interface LeaveFormProps{
  employee: Employee|null;
  back: () => void;
  handleSubmit: () => void;
}

const renderSeeDoctor: React.StatelessComponent<WrappedFieldProps &
    React.InputHTMLAttributes<HTMLInputElement>> =
    ({ input, label, type, meta: { touched, error } }) => (
    <div>
      <div className="form-check form-check-inline">
          <input className="form-check-input" {...input} type="radio" value="true" /> Yes<br/>
      </div>
      <div className="form-check form-check-inline">
          <input className="form-check-input" {...input} type="radio" value="false"/> No<br/>
      </div>
      {touched && <small className="text-danger form-text">{error}</small>}
    </div>
);

export const LeaveSickComponent = (props: LeaveFormProps) => {
  
  const { handleSubmit, back } = props;
  return (<div>
            <Scrollbars autoHeight={true}
            autoHeightMin={200}
            autoHeightMax={530}
            autoHide={true}
            autoHideTimeout={400}
            autoHideDuration={200}>
              <div className="modal-body p-4">
              <div className="alert alert-danger">
                <h5 className="font-weight-bold">NOTE:</h5>
                <h6>Sick Leave</h6>
                <small>
                  You will be required to submit a valid doctor's note confirming your absence
                  from work was due to an illness. Failure to submit this document may lead to 
                  your request being delayed or denied.
                </small>
              </div>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <div className="col">
                      <label>What illness required you to miss work?</label>
                      <Field name="reason"
                             component={renderField}
                             type="text"/>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col">
                      <label>Have you already submitted a doctor's note excusing your illness?</label>
                      <Field name="doctor_note"
                             component={renderSeeDoctor}/>
                    </div>
                  </div>
                  <div className="modal-footer">
                      <button type="button" className="btn btn-primary float-left" onClick={back}>
                          Back
                      </button>
                      <button className="btn btn-success float-right" type="submit" >
                          Submit
                      </button>
                  </div>
                </form>
              </div>
            </Scrollbars>
          </div>);
}

const sickPage =  reduxForm({
  validate,
  form: 'LeaveRequest', 
  destroyOnUnmount: false, 
  forceUnregisterOnUnmount: true 
})(LeaveSickComponent as any)

export default (sickPage as any);