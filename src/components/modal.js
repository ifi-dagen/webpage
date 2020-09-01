import React from 'react';
import '../stander.css';

import ReactPlayer from 'react-player/youtube';


const Modal = ({ handleClose, show, bedrift, active, children }) => {
  if (show){
    console.log(bedrift,handleClose,show,active,children);
    console.log(bedrift.bedriftnavn," yoooo");
    if(active){
      return (
        <div className="modal display-block">
          <section className='modal-main'>
            <p className = "bedriftnavn"> {bedrift.bedriftnavn}</p>
            <p> {bedrift.beskrivelse}</p>
            <a href="https://zoom.us"> {bedrift.zoomlink}<br/></a>

            <button onClick={handleClose}>close</button>
          </section>
        </div>
      )
    }

    const video = () => {
      return(
        <ReactPlayer
          id='video'
          url='https://youtu.be/xnub-hwu4dU'
          playing='true'
          loop='true'
        />
      )
    }
    const videoStyle = {
        justifyContent: 'center',
        alignSelf: 'center'
    };
    console.log(video);
    return (
      <div className="modal display-block">
        <section className='modal-main'>
          <button onClick={handleClose}>close</button>
          <p className = "bedriftnavn"> {bedrift.bedriftnavn}</p>
          <p> {bedrift.beskrivelse}</p>
          <div id='videoContainer'>
            <ReactPlayer
              id='video'
              url='https://www.youtube.com/watch?v=oUFJJNQGwhk'
              playing={true}
              loop={true}
              style={videoStyle}
            />
          </div>
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
