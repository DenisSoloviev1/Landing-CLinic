import React from 'react';
import './Modal.scss';

export default function Modal ({ show, handleClose, children }) {
  return (
    <div className={`modal ${show ? 'show' : ''}`}>
        {children}
    </div>
  );
};