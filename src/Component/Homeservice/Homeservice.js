import React from 'react';
import './Homeservice.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Cardimg from '../../Assets/Images/bg.jpg';

export default function Heroservice(){
    return(
        <div>
            <div>
                <h1 className='services-heading'>OUR SERVICES</h1>
            </div>

            <div id="carouselExampleIndicators" className="carousel service-carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className='card-div'>
                        <div className="card shadow-lg">
                            <img src={Cardimg} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary card-btn">Learn More</a>
                            </div>
                        </div>
                        <div className="card shadow-lg">
                            <img src={Cardimg} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary card-btn">Learn More</a>
                            </div>
                        </div>
                        <div className="card shadow-lg">
                            <img src={Cardimg} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary card-btn">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div className="carousel-item">
                    <div className='card-div'>
                        <div className="card shadow-lg">
                            <img src={Cardimg} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary card-btn">Learn More</a>
                            </div>
                        </div>
                        <div className="card shadow-lg">
                            <img src={Cardimg} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary card-btn">Learn More</a>
                            </div>
                        </div>
                        <div className="card shadow-lg">
                            <img src={Cardimg} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary card-btn">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="carousel-item">
                    <div className='card-div'>
                        <div className="card shadow-lg">
                            <img src={Cardimg} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary card-btn">Learn More</a>
                            </div>
                        </div>
                        <div className="card shadow-lg">
                            <img src={Cardimg} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary card-btn">Learn More</a>
                            </div>
                        </div>
                        <div className="card shadow-lg">
                            <img src={Cardimg} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary card-btn">Learn More</a>
                            </div>
                        </div>
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
    );
}