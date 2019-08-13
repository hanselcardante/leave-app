import { History } from 'history';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { reduxForm } from 'redux-form';
import User from '../../models/user';
import AppRoutes from '../../routes';
import Login from '../components/Login';
import { authUser  } from '../middleware';
interface Form {
  email: string;
  password: string;
}

interface LoginProps {
  errorMessage: string;
  redirect_to: string;
  handleSubmit: any;
  authenticated: boolean;
  redirect: () => void;
  history: History;
  requireAuthentication: () => void;
}

const mapStateToProps = state => {
  if (state.auth) {
    return {
      errorMessage: state.auth.error || null,
      authenticated: state.auth.authenticated,
      user: state.auth.user
    };
  }
  return {};
};

const mapDispatchToProps = (dispatch, props: LoginProps) => {
  return {
    onSubmit:(form: Form) => {
      dispatch(authUser(form.email, form.password));
    },
    requireAuthentication: (user: User) => {
      if (user) {
        props.history.push(new AppRoutes().getDashboard(user.role));
      }
    }
  };
};

let reduxFormLogin: any = reduxForm({
  form: 'Login'
})(Login as any);

reduxFormLogin = connect(mapStateToProps, mapDispatchToProps)(reduxFormLogin);
reduxFormLogin = withRouter(reduxFormLogin);
export default reduxFormLogin as any;
