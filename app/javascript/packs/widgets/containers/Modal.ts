import {connect} from 'react-redux';
import ModalComponent from '../components/Modal';
import {closeModal} from '../actions';
import * as actions from '../../leaves/actions';

const mapDispatchToProps = (dispatch, props) => {
  return {
    closeModal: () => {
      dispatch(closeModal());
      dispatch(actions.toMain());
    }
  }
}
export const Modal = connect
(null, mapDispatchToProps)(ModalComponent);

export default Modal;