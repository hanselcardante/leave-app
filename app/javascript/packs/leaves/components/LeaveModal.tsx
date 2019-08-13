import  * as React  from 'react';
import { Field, FormProps, InjectedFormProps } from 'redux-form';
import * as ReactDOM from 'react-dom';
import Popup from 'reactjs-popup';
import { User } from '../../models/user';
import { ModalProps } from '../containers/LeaveModal';
import Employee from '../../models/employee';
import Modal from '../../widgets/containers/Modal';
import LeaveWizard from '../containers/LeaveWizard';
import { LEAVE_FORM_TITLE, customStyles } from '../constants';
import {MODAL} from '../../widgets/constants';

interface LeaveModalProps {
  employee: Employee|null;
  modal?: ModalInterface;
  resetModal: () => void;
  openModal: () => void;
}
interface ModalInterface {
  context?: string;
  isOpen?: boolean;
  resource?: string;
}



export const LeaveModalComponent = (props: LeaveModalProps) => {
    const { employee, modal, resetModal, openModal } = props;
    return (
      <div className="row">
        {modal && modal.context === MODAL.fileLeave &&
          <Modal isOpen={modal.isOpen} Content = {LeaveWizard} title={LEAVE_FORM_TITLE}/>}
        <div className="col-9 offset-2">
          <div className="sub-container">
            <div className="col-9 offset-2">
              <div className="row">
                <div className="col" />

                <div className="col d-flex justify-content-center m-auto">
                <button onClick={openModal} className="btn btn-info leave-btn btn-block">File a leave</button>
                  
                </div>
                <div className="col"/>

              </div>
            </div>
          </div>
        </div>
        <div className="col"/>
      </div>
    );
};