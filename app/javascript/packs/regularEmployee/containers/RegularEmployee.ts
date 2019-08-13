import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import User from '../../models/user';
import AppRoutes from '../../routes';
import RegularEmployeeDashboard from '../components/RegularEmployee';
import { getEmployee } from '../middleware';

const mapStateToProps = state => {
  if (state.auth) {
  	return { user: state.auth.user, 
      notifications: state.notification.notificationList, 
      employee: state.regularEmployee.employee,
      alert: state.alerts };
  }
};

const mapDispatchToProps = (dispatch, props) => {
  return {}
};

const RegularEmployee = withRouter(connect
(mapStateToProps, mapDispatchToProps)(RegularEmployeeDashboard));
export default RegularEmployee as any;
