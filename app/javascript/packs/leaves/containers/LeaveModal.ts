import { User } from '../../models/user';
import Employee from '../../models/employee';
import { connect } from 'react-redux';
import { LeaveModalComponent } from '../components/LeaveModal';
import * as modalActions from '../../widgets/actions'
import {MODAL} from '../../widgets/constants';

export interface ModalProps {
  employee?: Employee;
}

const mapStateToProps = (state, props: ModalProps) => {
    return { employee: props.employee,
    		 modal: state.widget.modal || null };
};

const mapDispatchToProps = dispatch => {
  return {
    openModal: () => {
      dispatch(modalActions.openModal({
      	resource: null,
      	details: null,
        isOpen: true,
        context: MODAL.fileLeave
      }));
    }
  };
};

export const LeaveModal: any = connect(mapStateToProps, mapDispatchToProps)(LeaveModalComponent as any);


