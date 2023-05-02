import React, { useState } from 'react';
import './Styles.scss';

const Modal = ({ children,isOpen,close ,trigger, title }) => {
//   const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    // setIsOpen(true);
  };

  const handleClose = () => {
    // setIsOpen(false);
  };

  return (
    <>
      <button onClick={handleOpen}>{trigger}</button>
      {isOpen && (
        <div className="modal">
          <div className="modal-header">
            <h3>{title}</h3>
            <button onClick={close}>X</button>
          </div>
          <div className="modal-body">
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
