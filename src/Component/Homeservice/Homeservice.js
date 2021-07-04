import React from 'react';
import './Homeservice.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ServiceDataEntry from './ServiceDataEntry';
import servicedata from './servicedata';
import './Homeservice.css';

export default function Heroservice() {
  return (
    <div className="homeservice_container">
      <div>
        <h1 className="topics_header fw-bold text-center mt-5">
          Types of Insurance Offered
        </h1>
      </div>

      <div className="row mx-3">
        {servicedata.map((servicedata) => (
          <ServiceDataEntry
            key={servicedata.id}
            link={servicedata.link}
            image={servicedata.image}
            name={servicedata.name}
          />
        ))}
      </div>
    </div>
  );
}
