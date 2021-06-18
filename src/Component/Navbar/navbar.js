import React from 'react';
import './navbar.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Logo from '../../Assets/Images/logo.png';
import { faBars } from '@fortawesome/fontawesome-free-solid';
export default function navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar_css sticky-top">
        <a className="navbar-brand" href="#">
          <img src={Logo} width="80px" height="80px" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} color="white" size="lg" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <a className="nav-item nav-link active" href="/home">
              HOME <span class="sr-only">(current)</span>
            </a>
            <a className="nav-item nav-link" href="#">
              ABOUT
            </a>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                SERVICES
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">
                  LIC INSURANCE
                </a>
                <a class="dropdown-item" href="#">
                  HEALTH INSURANCE
                </a>
                <a class="dropdown-item" href="#">
                  VEHICLE INSURANCE
                </a>
                <a class="dropdown-item" href="#">
                  ACCIDENTAL INSURANCE
                </a>
                <a class="dropdown-item" href="#">
                  TRAVEL INSURANCE
                </a>
                <a class="dropdown-item" href="#">
                  PRODUCT INSURANCE
                </a>
                <a class="dropdown-item" href="#">
                  MARINE INSURANCE
                </a>
                <a class="dropdown-item" href="#">
                  MACHINE INSURANCE
                </a>
                <a class="dropdown-item" href="#">
                  COMPANY INSURANCE
                </a>
                <a class="dropdown-item" href="#">
                  OFFICE INSURANCE
                </a>
                <a class="dropdown-item" href="#">
                  HOTEL INSURANCE
                </a>
                <a class="dropdown-item" href="#">
                  HOUSE INSURANCE
                </a>
                <a class="dropdown-item" href="#">
                  SHOP INSURANCE
                </a>
                <a class="dropdown-item" href="#">
                  FLAT INSURANCE
                </a>
                <a class="dropdown-item" href="#">
                  FINANCIAL INSURANCE
                </a>
              </div>
            </li>
            <a className="nav-item nav-link" href="#">
              GALLERY
            </a>
            <a className="nav-item nav-link" href="#">
              AWARDS
            </a>
            <a className="nav-item nav-link" href="#">
              CONTACT
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
