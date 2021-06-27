import React from 'react';
import './Gallery.css';

const GalleryDataEntry = (props) => {
  return (
    <>
      <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-around">
        <img className="gallery_image" src={props.image} alt="gallery_image" />
      </div>
    </>
  );
};

export default GalleryDataEntry;
