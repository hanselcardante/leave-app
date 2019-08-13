import { connect } from 'react-redux';
import LeavesComponent from '../components/Leaves';
import {openModal} from '../../widgets/actions';
import {MODAL} from '../../widgets/constants';

const getPendingLeaves = leaves => {
  return leaves.filter(leave => leave.status === 'PENDING');
}

const mapStateToLeavesProps = state => {
  return {
    user: state.auth ? state.auth.user : null,
    leaves: state.leaves.list ? getPendingLeaves(state.leaves.list) : null,
    requests: state.auth && state.auth.user.role === 'superior' && state.leaves.requests
    ? getPendingLeaves(state.leaves.requests) : null,
    modal: state.widget.modal || null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getDetails: (details, resource) => () => {
      dispatch(openModal({
        resource,
        details,
        isOpen: true,
        context: MODAL.getDetails
      }));
    }
  }
};

const Leaves = connect(mapStateToLeavesProps,
  mapDispatchToProps)(LeavesComponent);
export default Leaves;
