import axios from 'axios';
import { History } from 'history';
import User from '../models/user';
import * as actions from './actions';
import { SignupForm } from './containers/Signup';

export function authUser(email: string, password: string) {
  return async dispatch => {
    try {
      await axios.post('/login', { email, password })
        .then(response => {
          const user: User = User.instance.init(response.data);
          dispatch(actions.authenticate({ user }));
        });
    } catch (error) {
      dispatch(actions.authenticationError());
    }
  };
}

export function didSignOut(cb: () => void) {
  return async dispatch => {
    try {
      await axios.delete(`/users/sign_out`)
        .then(() => {
          dispatch(actions.unauthenticate());
          cb();
        });
    } catch (error) {
      dispatch(actions.authenticationError());
    }
  };
}

export function signUp(values: Readonly<SignupForm>, history: History) {

  return dispatch => {
    axios.post(`/signup`, {
      first_name: values.first,
      last_name: values.last,
      civil_status: values.civilStatus,
      sex: values.sex,
      password: values.password,
      email: values.email
    },{
      headers: { 'Content-Type': 'application/json' }
    }).then(response => {
      const user: User = User.instance.init(response.data);
      dispatch(actions.authenticate({ user }));
      history.push('/employee/dashboard');
    });
  };
}

export function verifySignup(values: Readonly<SignupForm>) {
  return new Promise((resolve, reject) => {
    axios.get(`/email`).then(response => {
      if (response.data.values.includes(values.email)) {
        throw {email: 'Email has existed'};
      } else {
        resolve();
      }
    }).catch(error => {
      reject(error);
    })
  })
}

