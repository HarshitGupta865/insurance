import React from 'react';
import './Award.css';

const CertificateDataEntry = (props) => {
  return (
    <>
      <div className="col-lg-3 col-md-4 col-6 d-flex justify-content-around">
        <img
          className="award_image"
          src={props.certificate}
          alt="certificate_image"
        />
      </div>
    </>
  );
};

export default CertificateDataEntry;
