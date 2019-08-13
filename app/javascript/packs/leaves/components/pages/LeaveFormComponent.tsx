import * as React from 'react';
import { Field, FormProps, InjectedFormProps,
         WrappedFieldProps, reduxForm, FormErrors } from 'redux-form';

import { ModalProps } from '../../containers/LeaveModal';
import { renderField } from '../../../widgets/renderField';
import Employee from '../../../models/employee';
import { validate } from '../../validate';
import PropTypes from 'prop-types';
import { ImmediateSuperiorInterface} from '../../../definitions/immediateSuperior';
import { Scrollbars } from 'react-custom-scrollbars';

export interface FormInterface {
  handleSubmit: PropTypes.func; 
  submitting?: PropTypes.bool;
  error?: PropTypes.bool;
}

interface LeaveFormProps extends FormInterface{
    onSubmit: () => void;
    back: () => void;
    closeModal: () => void;
    employee: Employee;
    superiors: ImmediateSuperiorInterface[];
}

const renderLeaveType: any =
    ({ input, label, type, sex, meta: { touched, error } }) => (
    <div>
        <select {...input} id="leave_type" className="form-control">
                <option value={undefined} hidden={true}> - Please choose one - </option>
                <option value="VL">Vacation Leave</option>
                <option value="SL">Sick Leave</option>
                <option value="PL">Personal Leave</option>
                <option value="UL">Unpaid Leave</option>
                <option value="BL">Bereavement Leave</option>
                {sex === 'male' &&
                  <option value="PatL">Paternity Leave</option>
                }
                
                {sex === 'female' &&
                  <option value="MatL">Maternity Leave</option>
                }
                
            </select>
        {touched && <small className="text-danger form-text">{error}</small>}
    </div>
);

const renderSuperiors: any =
    ({ input, label, type, superiors, meta: { touched, error } }) => (
    <div>
        
        <select {...input} id="superior" className="form-control">
                <option value={null} hidden={true}> - Please choose one - </option>
                { superiors && superiors instanceof Array && superiors.map(obj => {
                  return <option key={obj.id} value={obj.id}>{obj.first_name} {obj.last_name}</option>
                })}
            </select>
        {touched && <small className="text-danger form-text">{error}</small>}
    </div>
);

const LeaveRequestComponent = (props: LeaveFormProps) => {
    const { handleSubmit, employee, superiors,closeModal } = props;
    return (<div className="">
              <Scrollbars autoHeight={true}
          autoHeightMin={200}
          autoHeightMax={530}
          autoHide={true}
          autoHideTimeout={400}
          autoHideDuration={200}>  
              <div className="modal-body p-5">
                  <form onSubmit={handleSubmit}>
                    <div className="col">
                      <div className="form-group">
                        <div className="row">
                          <div className="form-group">
                            <div className="col">
                              <label className="form-label">Start date</label>
                              <Field name="start"
                                 component={renderField}
                                 type="date"/>
                            </div>
                          </div>
                    
                          <div className="form-group">
                            <div className="col">
                              <label className="form-label">End date</label>
                              <Field name="end"
                                 component={renderField}
                                 type="date"/>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                        <div className="col">
                            <label className="form-label">Number of half days</label>
                            <Field name="half_days"
                                 component={renderField}
                                 type="number"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col">
                            <label className="form-label">What type of leave are you requesting?</label>
                            <Field name="leave_type"
                                 component={renderLeaveType}
                                 sex={employee.sex}/><br/>
                        </div>
                    </div>
                     
                    <div className="form-group">
                        <div className="col">
                            <label className="form-label">Superior</label>
                            <Field name="superior"
                                 component={renderSuperiors}
                                 superiors={superiors}/><br/>
                        </div>
                    </div>
                    
                    <div className="form-group">
                        <div className="col">              
                          <button className="btn btn-success float-right" type="submit">
                                Proceed
                          </button>
                        </div>
                    </div>
                  </form>
                    
                </div></Scrollbars>
            </div>);
  }


const mainPage = reduxForm({
  validate,
  form: 'LeaveRequest', 
  destroyOnUnmount: false, 
  forceUnregisterOnUnmount: true
})(LeaveRequestComponent as any)

export default (mainPage as any);