import React from 'react';
import './Award.css';

const AwardDataEntry = (props) => {
  return (
    <>
      <div className="col-lg-3 col-md-4 col-6 d-flex justify-content-around">
        <img className="award_image" src={props.image} alt="award_image" />
      </div>
    </>
  );
};

export default AwardDataEntry;
