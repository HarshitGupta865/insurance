import React, { useEffect } from 'react';
import AOS from 'aos';
import './Gallery.css';

const GalleryDataEntry = (props) => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
      easing: 'ease',
    });
  });
  return (
    <>
      <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-around">
        <img
          className="gallery_image"
          src={props.image}
          alt="gallery_image"
          data-aos="fade-down"
        />
      </div>
    </>
  );
};

export default GalleryDataEntry;
