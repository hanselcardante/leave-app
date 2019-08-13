import * as React from 'react';
import { Field, FormProps, InjectedFormProps, WrappedFieldProps } from 'redux-form';
import { SignupForm } from '../containers/Signup';
import { renderField } from '../../widgets/renderField';

const renderSex: React.StatelessComponent<WrappedFieldProps &
    React.InputHTMLAttributes<HTMLInputElement>> =
    ({ input, label, type, meta: { touched, error } }) => (
    <div className="form-check">
        <input className="form-check-input" {...input} type="radio" value="male" /> Male<br/>
        <input className="form-check-input" {...input} type="radio" value="female"/> Female<br/>
        {touched && <span className="text-danger">{error}</span>}
    </div>
);

const renderCivilStatus: React.StatelessComponent<WrappedFieldProps &
    React.InputHTMLAttributes<HTMLInputElement>> =
    ({ input, label, type, meta: { touched, error } }) => (
    <div>
        <select {...input} id="civilStatus" className="form-control">
                <option value={undefined} hidden={true}> - Please choose one - </option>
                <option value="single">Single</option>
                <option value="married">Married</option>
                <option value="divorced">Divorced</option>
                <option value="widowed">Widowed</option>
            </select>
        {touched && <span className="text-danger">{error}</span>}
    </div>
);

export default class Signup extends React.Component<FormProps<SignupForm, {}> & InjectedFormProps > {

  public render() {
    const { handleSubmit, submitting } = this.props;
    return (
        <div className="form login container">
            <div className="card card-container ml-auto mr-auto mt-5 p-5 shadow">
                <div className="card-header bg-transparent">
                    <div className="row pl-2 d-flex justify-content-center">
                        <img src={window.AutomatedLeave.images.icon} width="250" height="50"/>
                        <h4>Chromedia Far East Inc.</h4>
                    </div>
                </div>
                <div className="form-group card-body">
                    <div className="card-title">
                        <h3>Sign up</h3>
                    </div>
                    <form className="form-signin" onSubmit={handleSubmit}>
                        <label>First Name</label>
                        <Field name="first"
                               component={renderField}
                               type="text"/>
                        <label>Last Name</label>
                        <Field name="last"
                               component={renderField}
                               type="text"/>
                        <label>Company Email</label>
                        <Field name="email"
                               component={renderField}
                               type="text"/>
                        
                        <div className="form-group">
                          <label>Civil Status</label>
                          <Field name="civilStatus"
                                 component={renderCivilStatus}/>
                        </div>
                        <div className="form-group">
                          <label>Sex</label>
                          <Field name="sex"
                                 component={renderSex}/>
                        </div>
                        <label>Password</label>
                        <Field name="password"
                               component={renderField}
                               type="password"/>
                        <label>Confirm Password</label>
                        <Field name="confirm"
                               component={renderField}
                               type="password"/><br/>
                        <div>
                            <button className="btn btn-success btn-block"
                                type="submit" disabled={submitting}>
                                Sign up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
          </div>
    )
  }
}
