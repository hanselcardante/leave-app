import { LeaveDetailsComponent } from '../components/LeaveDetailsComponent';
import { connect } from 'react-redux';
import { closeModal } from '../../widgets/actions';

const mapStateToLeaveDetailsProps = state => {
  return {
    leave: state.leaves.leave_detail || null
  };
};

const mapDispatchToDetailsProps = dispatch => {
  return {
    closeModal: () => {
      dispatch(closeModal());
    }
  }
}

export const LeaveDetails = connect(mapStateToLeaveDetailsProps, mapDispatchToDetailsProps)(LeaveDetailsComponent);