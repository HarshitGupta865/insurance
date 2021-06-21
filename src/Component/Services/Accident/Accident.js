import React from 'react';
import '../../../index.css';
import '../Main_services.css';
import './Accident.css';

const Accident = () => {
  return (
    <main className="service_components_container">
      <section className="main_service_section d-flex justify-content-center align-items-center">
        <h1 className="fw-bold text-center main_service_header">
          ACCIDENTAL INSURANCE
        </h1>
      </section>
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col col-md-6 col-12 left_column">
              <article>
                <h1 className="text-center topics_header">
                  What is Accidental Inusrance ?
                </h1>
                <p className="mx-sm-5 mx-3 content_para">
                  Accident insurance helps you pay for{' '}
                  <span className="fw-bold">
                    {' '}
                    medical and other out-of-pocket costs
                  </span>{' '}
                  that you may incur after an accidental injury. This includes{' '}
                  <span className="fw-bold">
                    emergency treatment, hospital stays, medical exams
                  </span>{' '}
                  , as well as other expenses you may face such as
                  transportation and lodging needs.
                </p>
                <p className="mx-sm-5 mx-3 mt-5 content_para">
                  Accident insurance plans are purchased like other types of
                  insurance plans. You will pay a premium for your coverage,
                  which will vary based on your location and the specific plan
                  you choose.{' '}
                  <span className="fw-bold">
                    At Insurance Point Office we offer a variety of accident
                    insurance plans so that you can choose the plan that best
                    suites you.
                  </span>
                </p>
              </article>
              <article>
                <h1 className="text-center topics_header">
                  Benefits Of Accidental Insurances.
                </h1>
                <p className="mx-sm-5 mx-3 content_para">
                  <ol>
                    <li>
                      <span className="blue_content fst-italic fw-bold">
                        {' '}
                        Coverage against accident:
                      </span>{' '}
                      A motor insurance can give you a coverage against damage
                      happened to your vehicle due to some accidents. You can
                      claim the expenses and save more money.
                    </li>
                    <li>
                      <span className="blue_content fst-italic fw-bold">
                        Coverage against natural disaster:
                      </span>{' '}
                      A sudden huge flood can damage your vehicle which will
                      cause you to incur a huge expense. With the motor
                      insurance, you can save few bucks on vehicle repairs.
                    </li>
                    <li>
                      <span className="blue_content fst-italic fw-bold">
                        {' '}
                        Legal protection:
                      </span>{' '}
                      As having no motor insurance is a violation of traffic
                      laws, it can lead to paying penalties. Hence, it’s
                      important you renew your insurance once it gets expired.
                    </li>
                    <li>
                      <span className="blue_content fst-italic fw-bold">
                        {' '}
                        Death Benefits:{' '}
                      </span>
                      As third-party insurance is mandatory, the motor insurance
                      can benefit the survivors when an accident results in
                      death.
                    </li>
                    <li>
                      <span className="blue_content fst-italic fw-bold">
                        {' '}
                        No Claim Bonus:
                      </span>{' '}
                      If you have not made any claims during the policy term,
                      you are eligible for No Claim Bonus upon renewal of the
                      policy. However, you may need to fulfil certain terms and
                      conditions.
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

export default Accident;
