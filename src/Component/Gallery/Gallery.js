import React from 'react';
import '../../index.css';
import './Gallery.css';
import gallerydata from './gallerydata';
import GalleryDataEntry from './GalleryDataEntry';

const Gallery = () => {
  return (
    <main className="gallery_container">
      <section className="gallery_bg d-flex justify-content-center align-items-center">
        <h1 className="fw-bold text-center main_service_header">GALLERY</h1>
      </section>
      <section className="gallery_section">
        <div className="row">
          {gallerydata.map((gallerydata) => (
            <GalleryDataEntry key={gallerydata.id} image={gallerydata.image} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Gallery;
