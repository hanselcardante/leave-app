import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { FormErrors, reduxForm } from 'redux-form';
import Signup from '../components/Signup';
import { SignupState } from '../constants';
import { signUp, verifySignup } from '../middleware';

export interface SignupForm {
  first: string;
  last: string;
  password: string;
  email: string;
  civilStatus: string;
  sex: string;
  confirm: string;
}

const mapStateToProps = (state: SignupState) => {
  return { signedUp: state.signedUp };
};

function isEmailAddress(str: string): boolean {
  const pattern = /^\w+([\.-]?\w+)*@chromedia[\.]com$/;
  return pattern.test(str);  // returns a boolean
}

const validate = (values: Readonly<SignupForm>): FormErrors<SignupForm> => {
  const errors: FormErrors<SignupForm> = {};

  if (values.first === undefined) {
    errors.first = 'First name needed';
  }

  if (values.last === undefined) {
    errors.last = 'Last name needed';
  }

  if (values.email === undefined) {
    errors.email = 'Email address needed';
  }

  if (values.email && !isEmailAddress(values.email)) {
    errors.email = 'Must be a Chromedia email address';
  }

  if (values.civilStatus === undefined || values.civilStatus === '- Please choose one -') {
    errors.civilStatus = '*This field is required';
  }

  if (values.sex === undefined) {
    errors.sex = '*This field is required';
  }

  if (values.password === undefined) {
    errors.password = 'Password needed';
  }

  if (typeof values.password !== 'string') {
    errors.password = 'Must be a string';
  }

  if (values.password && values.password.length < 8) {
    errors.password = 'Must be at least 8 characters long';
  }

  if (values.confirm === undefined) {
    errors.confirm = 'Password confirmation needed';
  }

  if (values.password !== values.confirm) {
    errors.confirm = 'Must match the previous password';
  }
  return errors;
};

const asyncValidate = (values: Readonly<SignupForm>) => {
  return verifySignup(values);
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onSubmit : (values: SignupForm) => {
      dispatch(signUp(values, props.history));
    }
  };
};
let container: any = Signup;
container = reduxForm<Readonly<SignupForm>>({
  validate,
  asyncValidate,
  form: 'SignupForm',
  asyncBlurFields: ['email']
})(container);
container = connect(mapStateToProps, mapDispatchToProps)(container);
export default withRouter(container);
