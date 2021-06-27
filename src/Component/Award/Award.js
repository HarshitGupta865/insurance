import React from 'react';
import '../../index.css';
import './Award.css';
import awarddata from './awarddata';
import AwardDataEntry from './AwardDataEntry';

const Award = () => {
  return (
    <main className="award_container">
      <section className="award_bg d-flex justify-content-center align-items-center">
        <h1 className="fw-bold text-center main_service_header">GALLERY</h1>
      </section>
      <section className="award_section">
        <div className="row">
          {awarddata.map((awarddata) => (
            <AwardDataEntry key={awarddata.id} image={awarddata.image} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Award;
