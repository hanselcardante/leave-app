import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import ImmediateSuperiorDashboard from '../components/ImmediateSuperior';

const mapStateToProps = state => {
  return {
  	employee: state.immediateSuperior.employee,
		alert: state.alerts
	};
};

const mapDispatchToProps = (dispatch, props) => {
  return {

  };
};

const ImmediateSuperior = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ImmediateSuperiorDashboard)
);

export default ImmediateSuperior as any;

