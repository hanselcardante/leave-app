import * as React from 'react';
import { Field, FormProps, InjectedFormProps,
         WrappedFieldProps, reduxForm, FormErrors } from 'redux-form';
import { ModalProps } from '../../containers/LeaveModal';
import { renderField } from '../../../widgets/renderField';
import { validate } from '../../validate';
import { Scrollbars } from 'react-custom-scrollbars';

const renderRelation: React.StatelessComponent<WrappedFieldProps &
    React.InputHTMLAttributes<HTMLInputElement>> =
    ({ input, label, type, meta: { touched, error } }) => (
    <div>
      <div className="form-check">
        <input className="form-check-input" {...input} type="radio" value="true" />Immediate Family Member<br/>
      </div>
      <div className="form-check">
        <input className="form-check-input" {...input} type="radio" value="false" />Non-immediate Family Member<br/>
      </div>
      {touched && <small className="text-danger form-text">{error}</small>}
    </div>
);


   interface Props {
     back: () => void;
   }

export const LeaveBereaveComponent = props => {

  const { handleSubmit, back } = props;
  return <div className="">
          <Scrollbars autoHeight={true}
          autoHeightMin={200}
          autoHeightMax={530}
          autoHide={true}
          autoHideTimeout={400}
          autoHideDuration={200}>  
             <div className="modal-body p-4">  
             <div className="alert alert-danger">
               <h5 className="font-weight-bold">NOTE:</h5>
               <h6>Bereavement Leave</h6>
               <small>   Full-time employees who have worked for at least three (3) months are permitted up to
               5 consecutive days with pay to attend the wake and funeral of an immediate family member, 
               which includes a spouse, child, brother, sister, parent or grandparent.<br/><br/>
               Eligible employees may be permitted 2 days with pay for the death of a 
               relative who is not an immediate member-including an aunt, uncle, first cousin, nephew, niece, 
               brother-in-law, sister-in-law or parent-in-law.<br/><br/>
               Your supervisor must approve all bereavement time,
               and the Company may request verification of the facts surrounding the leave and grant or deny the leave
               as deemed appropriate. Bereavement leave will not be paid if it occurs when the employee is on vacation,
                absent due to illness or injury, or not working due to a paid holiday."</small></div>                  
               <form onSubmit={handleSubmit}>
                 <div className="form-group">    
                   <label className="form-label">Relationship to the deceased</label>
                     <Field name="relation"
                          component={renderRelation}
                          type="text"/><br/>
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
          </div>;
  
}

const bereavePage =  reduxForm({
  validate,
  form: 'LeaveRequest', 
  destroyOnUnmount: false, 
  forceUnregisterOnUnmount: true
})(LeaveBereaveComponent as any)

export default (bereavePage as any);