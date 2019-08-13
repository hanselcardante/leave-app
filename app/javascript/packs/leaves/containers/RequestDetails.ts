import RequestDetailsContent from '../components/RequestDetails';
import { closeModal } from '../../widgets/actions';
import { connect } from 'react-redux';
import { recordLeavePermission } from '../middleware';
import { recordLeaveComment } from '../../leaveComments/middleware';


const mapStateToRequestDetailsProps = state => {
  return {
    details: state.widget.modal.details || null
  };
};

const mapDispatchToRequestDetailsProps = dispatch => {
  return {
  	updateLeaveDetails: (data: any) => {
      dispatch(recordLeavePermission(data.permission, data.status));
      dispatch(recordLeaveComment(data.leave, data.user, data.comment));
    },
    closeModal: () => {
      dispatch(closeModal());
    }
  }
}

export const RequestDetails = connect
(mapStateToRequestDetailsProps, mapDispatchToRequestDetailsProps)(RequestDetailsContent);