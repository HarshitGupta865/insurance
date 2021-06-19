import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faWhatsapp,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

import '../../index.css';
import './Footer.css';
import { NavLink } from 'react-router-dom';
import {
  faEnvelope,
  faGem,
  faHome,
  faPhone,
} from '@fortawesome/fontawesome-free-solid';

function Footer() {
  return (
    <>
      {/* <!-- Footer --> */}
      <footer className="text-center main_footer p_over">
        {/* <!-- Section: Social media --> */}
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          {/* <!-- Left --> */}
          <div className="p-4 d-none d-lg-block">
            <span className="fw-bold fst-italic get_connected">
              Get connected with us on social networks:
            </span>
          </div>
          {/* <!-- Left --> */}

          {/* <!-- Right --> */}
          <div className="p-4">
            <a
              href="https://www.facebook.com/aashish.kumar.37454"
              target="_blank"
              className="social_icons fs-1 m-4"
            >
              {/* <i className="fab fa-facebook-f"></i> */}
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              href="https://twitter.com/DIRECTOR_ASHISH?s=08"
              target="_blank"
              className="social_icons fs-1 m-4"
            >
              {/* <i className="fab fa-twitter"></i> */}
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://youtube.com/channel/UCQBM4qKg9_eA2UuE6yG5jug"
              target="_blank"
              className="social_icons fs-1 m-4"
            >
              {/* <i className="fab fa-google"></i> */}
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a
              href="https://instagram.com/ashish_kumar_prasad?igshid=1w806o0g53bu3"
              target="_blank"
              className="social_icons fs-1 m-4"
            >
              {/* <i className="fab fa-instagram"></i> */}
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://www.linkedin.com/in/ashish-kumar-31493b18b"
              target="_blank"
              className="social_icons fs-1 m-4"
            >
              {/* <i className="fab fa-linkedin"></i> */}
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a
              href="https://wa.me/917004596419"
              target="_blank"
              className="social_icons fs-1 m-4"
            >
              {/* <i className="fab fa-whatsapp"></i> */}
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </div>
          {/* <!-- Right --> */}
        </section>
        {/* <!-- Section: Social media --> */}

        {/* <!-- Section: Links  --> */}
        <section className="">
          <div className="container text-center text-md-start mt-5">
            {/* <!-- Grid row --> */}
            <div className="row mt-3">
              {/* <!-- Grid column --> */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-5">
                {/* <!-- Content --> */}
                <h3 className="fw-bold mb-4 footer_header">
                  {/* <i className="fas fa-gem me-3"></i> */}
                  <FontAwesomeIcon icon={faGem} />
                  {'  '}INSURANCE POINT OFFICE
                </h3>
                <p className="footer_para">
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-5">
                {/* <!-- Links --> */}
                <h3 className="fw-bold mb-4 footer_header">QUICK LINKS</h3>
                <p className="footer_para">
                  <a
                    href="#!"
                    className="footer_links text-decoration-none fw-bold"
                  >
                    Angular
                  </a>
                </p>
                <p className="footer_para">
                  <a
                    href="#!"
                    className="footer_links text-decoration-none fw-bold"
                  >
                    React
                  </a>
                </p>
                <p className="footer_para">
                  <a
                    href="#!"
                    className="footer_links text-decoration-none fw-bold"
                  >
                    Vue
                  </a>
                </p>
                <p className="footer_para">
                  <a
                    href="#!"
                    className="footer_links text-decoration-none fw-bold"
                  >
                    Laravel
                  </a>
                </p>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-5">
                {/* <!-- Links --> */}
                <h3 className="fw-bold mb-4 footer_header">SERVICES</h3>
                <p className="footer_para">
                  <a
                    href="#!"
                    className="footer_links text-decoration-none fw-bold"
                  >
                    Pricing
                  </a>
                </p>
                <p className="footer_para">
                  <a
                    href="#!"
                    className="footer_links text-decoration-none fw-bold"
                  >
                    Settings
                  </a>
                </p>
                <p className="footer_para">
                  <a
                    href="#!"
                    className="footer_links text-decoration-none fw-bold"
                  >
                    Orders
                  </a>
                </p>
                <p className="footer_para">
                  <a
                    href="#!"
                    className="footer_links text-decoration-none fw-bold"
                  >
                    Help
                  </a>
                </p>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div className="col-md-4 col-lg-4 col-xl-3 mx-auto mb-md-0 mb-5">
                {/* <!-- Links --> */}
                <h3 className="fw-bold mb-4 footer_header">CONTACT</h3>
                <p className="footer_para">
                  {/* <i className="fas fa-home me-3"></i>  */}
                  <FontAwesomeIcon icon={faHome} />
                  {'  '}H. No.-1, R. No.-1, Laxmi Nagar, Bharat Bhawan, Near
                  Hanuman Mandir(LIC Office), P.O. - Telco, Jamshedpur - 831004
                </p>
                <p className="footer_para">
                  {/* <i className="fas fa-envelope me-3"></i> */}
                  <a
                    href="mailto:insurancepointoffice@gmail.com"
                    className="footer_links text-decoration-none fw-bold"
                  >
                    <FontAwesomeIcon icon={faEnvelope} />
                    {'  '}insurancepointoffice@gmail.com
                  </a>
                </p>
                <p className="footer_para">
                  <a
                    href="tel:++91-7004596419"
                    className="footer_links text-decoration-none fw-bold"
                  >
                    {/* <i className="fas fa-phone me-3"></i> */}
                    <FontAwesomeIcon icon={faPhone} />
                    {'  '}+91-7004596419
                  </a>
                </p>
                <p className="footer_para">
                  <a
                    href="tel:++91-8797266400"
                    className="footer_links text-decoration-none fw-bold"
                  >
                    {/* <i className="fas fa-phone me-3"></i> */}
                    <FontAwesomeIcon icon={faPhone} />
                    {'  '}+91-8797266400
                  </a>
                </p>
              </div>
              {/* <!-- Grid column --> */}
            </div>
            {/* <!-- Grid row --> */}
          </div>
        </section>
        {/* <!-- Section: Links  --> */}

        {/* <!-- Copyright --> */}
        <div className="text-center fw-bold p-4 mb-0 mt-sm-3 copyright">
          &#169; 2021, Insurance Point Office | All Rights Reserved.
        </div>
        {/* <!-- Copyright --> */}
      </footer>
      {/* <!-- Footer --> */}
    </>
  );
}

export default Footer;
