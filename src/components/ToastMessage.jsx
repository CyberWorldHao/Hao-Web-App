import React from 'react';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

function ToastMessage({ message, show }) {
  return (
    <ToastContainer
      className="p-3"
      position={'top-end'}
      style={{ zIndex: 1, position: 'fixed' }}
    >
      <Toast
        style={{
          maxHeight: '50px',
          maxWidth: '200px',
          color: 'white',
        }}
        bg={'warning'}
        show={show}
        animation={true}
      >
        <Toast.Body>{message}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

export default ToastMessage;
