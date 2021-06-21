import React from 'react';
import '../../../index.css';
import '../Main_services.css';
import './Health.css';

const Health = () => {
  return (
    <main className="service_components_container">
      <section className="main_service_section d-flex justify-content-center align-items-center">
        <h1 className="fw-bold text-center main_service_header">
          HEALTH INSURANCE
        </h1>
      </section>
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col col-md-6 col-12 left_column">
              <article>
                <h1 className="text-center topics_header">
                  What is Health Inusrance ?
                </h1>
                <p className="mx-sm-5 mx-3 content_para">
                  A health insurance policy extends{' '}
                  <span className="fw-bold">
                    coverage against medical expenses incurred owing to
                    accidents, illness or injury.
                  </span>{' '}
                  An individual can avail such a policy against monthly or
                  annual premium payments, for a specified tenure.
                </p>
                <p className="mx-sm-5 mx-3 mt-5 content_para">
                  During this period, if an insured meets with an accident or is
                  diagnosed with a severe ailment, the expenses incurred for
                  treatment purposes are borne by the insurance provider.
                </p>
              </article>
              <article>
                <h1 className="text-center topics_header">
                  Benefits Of Health Insurances.
                </h1>
                <p className="mx-sm-5 mx-3 content_para">
                  <ol>
                    <li>
                      <span className="blue_content fst-italic fw-bold">
                        {' '}
                        Cashless Treatment:{' '}
                      </span>
                      If you are insured, you can get cashless treatments as
                      your insurance company would work in collaboration with
                      various hospital networks.
                    </li>
                    <li>
                      <span className="blue_content fst-italic fw-bold">
                        {' '}
                        Pre and post hospitalization cost coverage:{' '}
                      </span>
                      Insurance policy also covers pre and post hospitalization
                      charges up to the period of 60 days, depending on the
                      insurance plans purchased.
                    </li>
                    <li>
                      <span className="blue_content fst-italic fw-bold">
                        {' '}
                        Transportation Charges:{' '}
                      </span>
                      Insurance policy also covers the amount paid to ambulance
                      towards the transportation of insured.
                    </li>
                    <li>
                      <span className="blue_content fst-italic fw-bold">
                        {' '}
                        No Claim Bonus (NCB):{' '}
                      </span>
                      This is the bonus element which is paid to the insured if
                      the insured does not file a claim for any treatment in the
                      previous year.
                    </li>
                    <li>
                      <span className="blue_content fst-italic fw-bold">
                        {' '}
                        Medical Checkup:{' '}
                      </span>
                      Insurance policy also provide options for health checkups.
                      Free health checkup is also provided by some insurers
                      based on your previous NCBs.
                    </li>
                    <li>
                      <span className="blue_content fst-italic fw-bold">
                        {' '}
                        Room Rent:{' '}
                      </span>
                      Insurance policy also covers room expenses depending on
                      the premium being paid by the insured.
                    </li>
                    <li>
                      <span className="blue_content fst-italic fw-bold">
                        {' '}
                        Tax Benefit:{' '}
                      </span>
                      Premium paid on Health insurance is tax deductible under
                      section 80D of the Income Tax Act.
                    </li>
                  </ol>
                </p>
              </article>
            </div>
            <div className="col col-md-6 col-12 right_column">
              <h1 className="text-center topics_header">Quick links !</h1>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Health;
