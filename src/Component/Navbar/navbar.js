import React from 'react';
import './navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Logo from '../../Assets/Images/logo.png';
import { faBars } from '@fortawesome/fontawesome-free-solid';

export default function navbar(){
    return(
        <div>
            <nav class="navbar navbar-expand-lg navbar_css">
            <div class="container-fluid nav-width">
                <a class="navbar-brand" href="#">
                    <img src={Logo} width="80px" height="80px"/>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    < FontAwesomeIcon icon={faBars} color="white" size="lg"/>
                </button>
                <div class="collapse navbar-collapse text-center" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">HOME</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">FEATURES</a>
                    </li>
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        SERVICES
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="#">LIC OF INDIA</a></li>
                        <li><a class="dropdown-item" href="#">STAR HEALTH INSURANCE</a></li>
                        <li><a class="dropdown-item" href="#">VEHICLE INSURANCE</a></li>
                        <li><a class="dropdown-item" href="#">ACCIDENTAL INSURANCE</a></li>
                        <li><a class="dropdown-item" href="#">TRAVEL INSURANCE</a></li>
                        <li><a class="dropdown-item" href="#">COMMERCIAL LINE PRODUCT INSURANCE</a></li>
                        <li><a class="dropdown-item" href="#">MARINE INSURANCE</a></li>
                        <li><a class="dropdown-item" href="#">MACHINE INSURANCE</a></li>
                        <li><a class="dropdown-item" href="#">COMPANY INSURANCE</a></li>
                        <li><a class="dropdown-item" href="#">OFFICE INSURANCE</a></li>
                        <li><a class="dropdown-item" href="#">HOTEL INSURANCE</a></li>
                        <li><a class="dropdown-item" href="#">HOUSE INSURANCE</a></li>
                        <li><a class="dropdown-item" href="#">SHOP INSURANCE</a></li>
                        <li><a class="dropdown-item" href="#">FLAT INSURANCE</a></li>
                        <li><a class="dropdown-item" href="#">OTHER IMPORTANT FINANCIAL SERVICES</a></li>
                    </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">AWARDS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">REVIEW</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">CONTACT</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">FAQ</a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </div>
  );
}
