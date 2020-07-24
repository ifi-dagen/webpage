import React from 'react';
import '../stander.css';

const StengeBanner = ({melding}) => {
  return (
    <div className="stengeBanner display-block">
      <section className='stengeBanner-main'>
        <p>{melding}</p>
      </section>
    </div>
  );
};

export default StengeBanner;
