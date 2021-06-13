import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faWhatsapp,
  faGoogle,
} from '@fortawesome/free-brands-svg-icons';

import '../../index.css';
import './Footer.css';
import Brandlogo from '../../Assets/Images/logo.png';
import { NavLink } from 'react-router-dom';
import {
  faEnvelope,
  faGem,
  faHome,
  faMobile,
  faPhone,
} from '@fortawesome/fontawesome-free-solid';

function Footer() {
  return (
    <>
      {/* <!-- Footer --> */}
      <footer className="text-center main_footer">
        {/* <!-- Section: Social media --> */}
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          {/* <!-- Left --> */}
          <div className="p-4 d-none d-lg-block">
            <span className="get_connected">
              Get connected with us on social networks:
            </span>
          </div>
          {/* <!-- Left --> */}

          {/* <!-- Right --> */}
          <div className="p-4">
            <a href="" className="social_icons">
              {/* <i className="fab fa-facebook-f"></i> */}
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="" className="social_icons">
              {/* <i className="fab fa-twitter"></i> */}
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="" className="social_icons">
              {/* <i className="fab fa-google"></i> */}
              <FontAwesomeIcon icon={faGoogle} />
            </a>
            <a href="" className="social_icons">
              {/* <i className="fab fa-instagram"></i> */}
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="" className="social_icons">
              {/* <i className="fab fa-linkedin"></i> */}
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href="" className="social_icons">
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
                <p>
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
                <p>
                  <a href="#!" className="footer_links">
                    Angular
                  </a>
                </p>
                <p>
                  <a href="#!" className="footer_links">
                    React
                  </a>
                </p>
                <p>
                  <a href="#!" className="footer_links">
                    Vue
                  </a>
                </p>
                <p>
                  <a href="#!" className="footer_links">
                    Laravel
                  </a>
                </p>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-5">
                {/* <!-- Links --> */}
                <h3 className="fw-bold mb-4 footer_header">SERVICES</h3>
                <p>
                  <a href="#!" className="footer_links">
                    Pricing
                  </a>
                </p>
                <p>
                  <a href="#!" className="footer_links">
                    Settings
                  </a>
                </p>
                <p>
                  <a href="#!" className="footer_links">
                    Orders
                  </a>
                </p>
                <p>
                  <a href="#!" className="footer_links">
                    Help
                  </a>
                </p>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-5">
                {/* <!-- Links --> */}
                <h3 className="fw-bold mb-4 footer_header">CONTACT</h3>
                <p>
                  {/* <i className="fas fa-home me-3"></i>  */}
                  <FontAwesomeIcon icon={faHome} />
                  {'  '}H. No.-1, R. No.-1, Laxmi Nagar, Bharat Bhawan, Near
                  Hanuman Mandir(LIC Office), P.O. - Telco, Jamshedpur - 831004
                </p>
                <p>
                  {/* <i className="fas fa-envelope me-3"></i> */}
                  <a
                    href="mailto:insurancepointoffice@gmail.com"
                    className="footer_links"
                  >
                    <FontAwesomeIcon icon={faEnvelope} />
                    {'  '}insurancepointoffice@gmail.com
                  </a>
                </p>
                <p>
                  <a href="tel:++91-7004596419" className="footer_links">
                    {/* <i className="fas fa-phone me-3"></i> */}
                    <FontAwesomeIcon icon={faPhone} />
                    {'  '}+91-7004596419
                  </a>
                </p>
                <p>
                  <a href="tel:++91-7004596419" className="footer_links">
                    {/* <i className="fas fa-phone me-3"></i> */}
                    <FontAwesomeIcon icon={faPhone} />
                    {'  '}+91-7004596419
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
        <div className="text-center p-4 mb-0 mt-sm-3 copyright">
          &#169; 2021, Insurance Point Office
        </div>
        {/* <!-- Copyright --> */}
      </footer>
      {/* <!-- Footer --> */}
    </>
  );
}

export default Footer;
