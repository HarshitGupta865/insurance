import React from 'react';
import './Review.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export default function Review(){
    return(
    <div>
            <div>
                <h1 className='services-heading'>WHAT OUR CLIENT SAYS ?</h1>
            </div>
        <div className="review-maindiv pt-lg-5 pb-lg-5">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner review-inner mx-auto">
                <div className="carousel-item review-item active">
                    <p className="review-title mx-auto mt-lg-5 pt-3">Graphics designer</p>
                    <p className='quotes'>“</p>
                    <p className="review-text mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                    <p className='quotes right'>"</p>
                    <div className='review-data'>
                        <p className=''>Ayush Singh</p>
                        <p className='fst-italic city'>Jharkhand</p>
                    </div>
                </div>
                <div className="carousel-item review-item pt-3">
                    <p className="review-title mx-auto mt-lg-5 pt-3">Web Developer</p>
                    <p className='quotes'>“</p>
                    <p className="review-text mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                    <p className='quotes right'>"</p>
                    <div className='review-data'>
                        <p className=''>Harshit Gupta</p>
                        <p className='fst-italic city'>Jharkhand</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
        </div>
    </div>
    );
}