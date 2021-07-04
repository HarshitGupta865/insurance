import React, { useEffect } from 'react';
import AOS from 'aos';
import { NavLink } from 'react-router-dom';

const ServiceDataEntry = (props) => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
      easing: 'ease',
    });
  });
  return (
    <div
      className="col-md-2 col-sm-4 col-6 my-3 d-flex justify-content-center"
      data-aos="fade-down"
    >
      <NavLink to={props.link}>
        <div className="service_card shadow-lg">
          <img
            className="d-block mx-auto homeservice_image"
            src={props.image}
            alt="service_image"
          />
          <br />
          <p className="h4 text-center homeservice_para pt-3">{props.name}</p>
        </div>
      </NavLink>
    </div>
  );
};

export default ServiceDataEntry;
