import React, { useEffect } from 'react';
import AOS from 'aos';
import './Award.css';

const CertificateDataEntry = (props) => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
      easing: 'ease',
    });
  });
  return (
    <>
      <div className="col-lg-3 col-md-4 col-6 d-flex justify-content-around">
        <img
          className="award_image"
          src={props.certificate}
          alt="certificate_image"
          data-aos="fade-down"
        />
      </div>
    </>
  );
};

export default CertificateDataEntry;
