import * as React from 'react';
import Popup from 'reactjs-popup';

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  Content: any;
  title: string;
}
const customStyles = {
  maxHeight: '800px',
  overflow: scroll,
  border: '1px solid #404040',
  borderRadius: '5px'
};

const ModalComponent = (props: ModalProps) => {
  const { isOpen, closeModal, Content, title } = props;

  return (
    <Popup
      className= "modal-content"
      open  = {isOpen}
      modal={true}
      onClose = {closeModal}
      contentStyle = {customStyles}
      lockScroll={true}
    >
      <div>
      <div className="modal-header">
        <h5 className="modal-title">{title}</h5>
        <button type="button" className="close"
        data-dismiss="modal" aria-label="Close"
        onClick={closeModal}>
        <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <Content/>
    </div>
    </Popup>
  );
}

export default ModalComponent;