import React from 'react';
import './Award.css';

const AwardDataEntry = (props) => {
  return (
    <>
      <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-around">
        <img className="award_image" src={props.image} alt="award_image" />
      </div>
    </>
  );
};

export default AwardDataEntry;
