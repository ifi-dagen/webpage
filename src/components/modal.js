import React from 'react';
import '../stander.css';

const Modal = ({ handleClose, show, bedrift, children }) => {
  if (show){
    console.log(bedrift);
    console.log(bedrift.bedriftnavn);
    return (
      <div className="modal display-block">
        <section className='modal-main'>
          <p className = "bedriftnavn"> {bedrift.bedriftnavn}</p>
          <p> {bedrift.beskrivelse}</p>
          <p href="https://zoom.us"> {bedrift.zoomlink}</p>

          <button onClick={handleClose}>close</button>
        </section>
      </div>
    );
  } else {
    return(
      <div className="modal display-none">
        usynlig modal
      </div>
    );
  }
};

export default Modal;
