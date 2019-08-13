import * as React from 'react';
import { Field } from 'redux-form';
import { History } from 'history';
import { Link } from 'react-router-dom';
import User from '../../models/user';

interface LoginProps {
  errorMessage: string;
  handleSubmit: any;
  user: User;
  requireAuthentication: (user: User) => void;
  history: History;
}

export default class Login extends React.Component<LoginProps, any> {
  constructor(props: LoginProps) {
    super(props);
  }

  public componentDidMount() {
    this.props.requireAuthentication(this.props.user);
  }

  public componentDidUpdate() {
    this.props.requireAuthentication(this.props.user);
  }

  public render() {
    const { handleSubmit } = this.props;

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
              <h3>Sign in</h3>
            </div>
            <form className="form-signin" onSubmit={handleSubmit}>
              <label>Company Email</label>
              <Field
                type="email"
                name="email"
                component="input"
                placeholder="Email"
                className="form-control"
              />
              <label>Password</label>
              <Field
                type="password"
                name="password"
                component="input"
                placeholder="Password"
                className="form-control"
              />
              <p className="text-center">Don't have an account?
                <Link to={{ pathname: '/signup' }}> Sign up now!</Link>{' '}
              </p><br/>
              <button className="btn btn-success btn-block" type="submit">Login</button>
            </form>
            {this.props.errorMessage &&
            <div className="info-red">
              {this.props.errorMessage}
            </div>
            }
          </div>
        </div>
      </div>
    );
  }
}
