import React from 'react';
import './Homecontact.css';

import Map from '../Map/map';

export default function HomeMap(){
    return(
        <div>
             <div>
                <h1 className='services-heading'>GET IN TOUCH</h1>
            </div>
            <div class="row herocontact-div">
                <div class="col">
                <div className='hero-contact-form'>
                        <div className="input-group mb-3 name-input mt-5">
                            <input type="text" className="form-control" placeholder="Your name" aria-label="Username" aria-describedby="basic-addon1"/>
                        </div>
                        <div className="input-group mb-3 name-input mt-5">
                            <input type="text" className="form-control" placeholder="Email address" aria-label="email" aria-describedby="basic-addon1"/>
                        </div>
                        <div className="input-group mb-3 name-input mt-5">
                            <input type="number" className="form-control" placeholder="Telephone number" aria-label="number" aria-describedby="basic-addon1"/>
                        </div>
                        <div className="input-group comment mb-5 mt-5">
                            <textarea class="form-control" aria-label="With textarea" placeholder="Write something..."></textarea>
                        </div>
                        <button type="button" className="btn submit-btn btn-lg mb-5">SUBMIT</button>
                    </div>
                </div>
                <div class="col map-div">
                     <Map />
                </div>
            </div>
        </div>
    );
}