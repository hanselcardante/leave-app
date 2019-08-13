import * as React from 'react';
import { WrappedFieldProps } from 'redux-form';

export const renderField: React.StatelessComponent<WrappedFieldProps &
    React.InputHTMLAttributes<HTMLInputElement>> =
    ({ input, label, type, meta: { touched, error } }) => (
    <div>
        <input {...input} type={type} className="form-control"/>
        {touched && <small className="text-danger form-text" id={input.name}>{error}</small>}
    </div>
);


export const renderReason: React.StatelessComponent<WrappedFieldProps &
    React.InputHTMLAttributes<HTMLInputElement>> =
    ({ input, label, type, placeholder, meta: { touched, error } }) => (
    <div>
        <textarea placeholder={placeholder} className="form-control" {...input} rows={4} />
        {touched && <small className="text-danger form-text">{error}</small>}
    </div>
);

export const renderRead: any =
    ({ input, label, type, placeholder, text, meta: { touched, error } }) => (
    <div>
      <div className="form-check">
        <input className="form-check-input" id="checkRead" {...input} type={type} {...input} />
        <label className="form-check-label" data-for="checkRead"> {text} </label><br/>
        
      </div>
      {touched && <small className="text-danger form-text">{error}</small>}
    </div>
);