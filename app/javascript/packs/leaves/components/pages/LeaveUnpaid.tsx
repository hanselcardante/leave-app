import * as React from 'react';
import { Field, FormProps, InjectedFormProps,
         WrappedFieldProps, reduxForm, FormErrors } from 'redux-form';
import { ModalProps } from '../../containers/LeaveModal';
import { validate } from '../../validate';
import * as field from '../../../widgets/renderField';
import { Scrollbars } from 'react-custom-scrollbars';

export const LeaveUnpaidComponent = props => {

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
                  <h6>Unpaid Leave</h6>
                  <small>
                    Unpaid Leave must be approved in advance and is not guaranteed.
                  </small>
                </div>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <Field name="reason"
                             component={field.renderReason}
                             type="text"
                             placeholder="Reason (required)" />
                    </div>
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

const unpaidPage =  reduxForm({
  validate,
  form: 'LeaveRequest', 
  destroyOnUnmount: false, 
  forceUnregisterOnUnmount: true 
})(LeaveUnpaidComponent as any)

export default (unpaidPage as any);