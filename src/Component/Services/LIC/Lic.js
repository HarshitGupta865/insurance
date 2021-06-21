import React from 'react';
import '../../../index.css';
import '../Main_services.css';
import './Lic.css';

const Lic = () => {
  return (
    <main className="service_components_container">
      <section className="main_service_section d-flex justify-content-center align-items-center">
        <h1 className="fw-bold text-center main_service_header">
          LIC INSURANCE
        </h1>
      </section>
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col col-md-6 col-12 left_column">
              <article>
                <h1 className="text-center topics_header">
                  What is LIC Inusrance ?
                </h1>
                <p className="mx-sm-5 mx-3 content_para">
                  The full form of LIC is{' '}
                  <span className="fw-bold">
                    Life Insurance Corporation of India.
                  </span>
                  <br />
                  In our country, which is one of the most populated in the
                  world, the prominence of insurance is not as widely
                  understood, as it ought to be. What follows is an attempt to
                  acquaint readers with some of the concepts of life insurance,
                  with special reference to LIC.{' '}
                </p>
                <p className="mx-sm-5 mx-3 mt-5 content_para">
                  Life insurance is a contract that{' '}
                  <span className="fw-bold">
                    pledges payment of an amount to the person assured
                  </span>{' '}
                  (or his nominee) on the happening of the event insured
                  against.
                  <br />
                  The contract is valid for payment of the insured amount
                  during:
                  <ul className="mt-3 fst-italic">
                    <li>The date of maturity, or</li>
                    <li>Specified dates at periodic intervals, or</li>
                    <li>Unfortunate death, if it occurs earlier.</li>
                  </ul>
                </p>
                <p className="mx-sm-5 mx-3 mt-5 content_para">
                  Among other things, the contract also provides for the{' '}
                  <span className="fw-bold">
                    payment of premium periodically to the Corporation by the
                    policyholder.
                  </span>{' '}
                  Life insurance is universally acknowledged to be an
                  institution, which eliminates 'risk', substituting certainty
                  for uncertainty and comes to the timely aid of the family in
                  the unfortunate event of death of the breadwinner.
                  <br />
                  By and large, life insurance is civilisation's partial
                  solution to the problems caused by death. Life insurance, in
                  short, is concerned with two hazards that stand across the
                  life-path of every person:
                  <ol className="mt-3 fst-italic">
                    <li>
                      That of dying prematurely leaving a dependent family to
                      fend for itself.
                    </li>
                    <li>
                      That of living till old age without visible means of
                      support.
                    </li>
                  </ol>
                </p>
              </article>
              <article>
                <h1 className="text-center topics_header">
                  Benefits Of LIC Insurances.
                </h1>
                <p className="mx-sm-5 mx-3 content_para">
                  <ol>
                    <li>
                      <span className="blue_content fst-italic fw-bold">
                        {' '}
                        Industry leader:
                      </span>{' '}
                      You are assured of being associated with a leader which
                      has a technologically advanced network to provide you the
                      most advanced and efficient services.
                    </li>
                    <li>
                      <span className="blue_content fst-italic fw-bold">
                        {' '}
                        An array of plans:
                      </span>{' '}
                      Innovative plans are designed to ensure the maximum
                      benefit of the policyholder and their family. LIC provides
                      a complete basket of plans from Endowment plans to Money
                      Back plans cover to its customers.
                    </li>
                    <li>
                      <span className="blue_content fst-italic fw-bold">
                        {' '}
                        Easy claim procedure:
                      </span>{' '}
                      LIC provides a simplified claim procedure. This is the
                      reason perhaps why it provided the highest percentage of
                      Claim Settlement Ratio across the industry for the year
                      2015-16.
                    </li>
                    <li>
                      <span className="blue_content fst-italic fw-bold">
                        {' '}
                        Unmatchable customer support:
                      </span>{' '}
                      The customer support of LIC is one of the best in the
                      industry. It provided 100% grievances settlement for the
                      year 2015-16.
                    </li>
                    <li>
                      <span className="blue_content fst-italic fw-bold">
                        {' '}
                        Simplified process:
                      </span>{' '}
                      Simplified processes, especially the online customer
                      services are configured to make life easier for the
                      policyholders. You can get the complete detail of your
                      policy sent on an SMS.
                    </li>
                    <li>
                      <span className="blue_content fst-italic fw-bold">
                        {' '}
                        Most trusted:
                      </span>{' '}
                      LIC is the most trusted insurance company with hundreds of
                      recognitions and awards including the likes of Golden
                      Peacock Award-2015, India’s Most Trusted Brand-2015 and
                      Brand Icon Award among many others.
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

export default Lic;
