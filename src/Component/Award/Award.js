import React from 'react';
import '../../index.css';
import './Award.css';
import awarddata from './awarddata';
import certificatedata from './certificatedata';
import AwardDataEntry from './AwardDataEntry';
import CertificateDataEntry from './CertificateDataEntry';

const Award = () => {
  return (
    <main className="award_container">
      <section className="award_bg d-flex justify-content-center align-items-center">
        <h1 className="fw-bold text-center main_service_header">
          AWARDS & CERTIFICATES
        </h1>
      </section>
      <section>
        <h2 className="text-center topics_header">
          Awards Bestowed on Insurance Point Office
        </h2>
      </section>
      <section className="award_section">
        <div className="row">
          {awarddata.map((awarddata) => (
            <AwardDataEntry key={awarddata.id} image={awarddata.image} />
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-center topics_header">
          Certificates that proves our excellence !
        </h2>
      </section>
      <section className="award_section">
        <div className="row">
          {certificatedata.map((certificatedata) => (
            <CertificateDataEntry
              key={certificatedata.id}
              certificate={certificatedata.certificate}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Award;
