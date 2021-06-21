import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import '../../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Logo from '../../Assets/Images/logo.png';
import { faBars } from '@fortawesome/fontawesome-free-solid';
export default function navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar_css">
        <div className="container-fluid nav-width">
          <NavLink className="navbar-brand" to="/">
            <img src={Logo} width="80px" height="80px" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon icon={faBars} color="white" size="lg" />
          </button>
          <div
            className="collapse navbar-collapse text-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  HOME
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  ABOUT US
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  SERVICES
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/services/LIC-insurance"
                    >
                      LIC INSURANCES
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/services/health-insurance"
                    >
                      STAR HEALTH INSURANCE
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/services/vehicle-insurance"
                    >
                      VEHICLE INSURANCE
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/services/accidental-insurance"
                    >
                      ACCIDENTAL INSURANCE
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/services/travel-insurance"
                    >
                      TRAVEL INSURANCE
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/services/commercial-product-insurance"
                    >
                      COMMERCIAL PRODUCT INSURANCE
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/services/marine-insurance"
                    >
                      MARINE INSURANCE
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/services/machine-insurance"
                    >
                      MACHINE INSURANCE
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/services/company-insurance"
                    >
                      COMPANY INSURANCE
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/services/office-insurance"
                    >
                      OFFICE INSURANCE
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/services/hotel-insurance"
                    >
                      HOTEL INSURANCE
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/services/house-insurance"
                    >
                      HOUSE INSURANCE
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/services/shop-insurance"
                    >
                      SHOP INSURANCE
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/services/flat-insurance"
                    >
                      FLAT INSURANCE
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/services/other-financial-services"
                    >
                      OTHER FINANCIAL SERVICES
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/gallery">
                  GALLERY
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/awards-and-certifications">
                  AWARD
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  CONTACT US
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
