import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import  {LeaveWizard}  from '../components/LeaveWizard';
import { ModalProps } from '../containers/LeaveModal';
import { initialState } from '../reducers';
import { WizardState } from '../constants';
import * as formActions from '../middleware';
import * as actions from '../actions';
import {closeModal} from '../../widgets/actions';

const mapStateToProps = (state, props: ModalProps) => {
    const applicant = state.regularEmployee.employee ? state.regularEmployee.employee
                      : state.immediateSuperior.employee;
    return {
        superiors: state.immediateSuperior.superiors,
        employee: applicant,
        page: state.wizard.page 
    };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onSubmit : values => {
    	switch (values.leave_type) {
            case 'VL':
                dispatch(actions.toVacation());
                break;
            case 'UL':
                dispatch(actions.toUnpaid());
                break;
            case 'SL':
                dispatch(actions.toSick());
                break;
            case 'BL':
                dispatch(actions.toBereavement());
                break;
            case 'PL':
                dispatch(formActions.sendLeaveForm(values));
                break;
            case 'MatL':
                dispatch(formActions.sendLeaveForm(values));
                break;
            case 'PatL':
                dispatch(formActions.sendLeaveForm(values));
                break;
            default:
                // console.log(values.start)
        }
    },
    submitForm : values => {
        dispatch(formActions.sendLeaveForm(values));
    },
    back : () => {
        dispatch(actions.toMain());
    },
    closeModal: () => {
      dispatch(closeModal());
      dispatch(actions.toMain());
    }
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LeaveWizard as any));
