import React from 'react';
import './navbar.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Logo from '../../Assets/Images/logo.svg';
import { faBars } from '@fortawesome/fontawesome-free-solid';
export default function navbar(){
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar_css sticky-top">
                <a className="navbar-brand" href="#">
                    <img src={Logo} width="100px" height="100px"/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    < FontAwesomeIcon icon={faBars} color="white" size="lg"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto">
                        <a className="nav-item nav-link active" href="/home">HOME <span class="sr-only">(current)</span></a>
                        <a className="nav-item nav-link" href="#">FEATURES</a>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            SERVICES
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        <a className="nav-item nav-link" href="#">AWARDS</a>
                        <a className="nav-item nav-link" href="#">REVIEW</a>
                        <a className="nav-item nav-link" href="#">CONTACT</a>
                        <a className="nav-item nav-link" href="#">FAQ</a>
                    </div>
                </div>
            </nav>
        </div>
    );
}