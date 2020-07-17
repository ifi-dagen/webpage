import React, { Component } from 'react';
import '../stander.css';

const Modal = ({ handleClose, show, bedrift, children }) => {
  return (
    <div className={show ? "modal display-block" : "modal display-none"}>
      <section className='modal-main'>
        <p>{bedrift}</p>
        <button onClick={handleClose}>close</button>
      </section>
    </div>
  );
};

export default Modal;
