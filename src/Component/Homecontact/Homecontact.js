import React from 'react';
import emailjs from 'emailjs-com';
import './Homecontact.css';

import Map from '../Map/map';

export default function HomeMap(){

    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_wdws7hk', 'template_7qioo8q', e.target, 'user_eoORToZFcMaWxixWf1ikD')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

          e.target.reset();
    }

    return(
        <div>
             <div>
                <h1 className='services-heading'>GET IN TOUCH</h1>
            </div>
            <div class="row herocontact-div">
                <div class="col">
                <form onSubmit={sendEmail}>    
                    <div className='hero-contact-form'>
                        <div className="input-group mb-3 name-input mt-5">
                            <input type="text" className="form-control" placeholder="Your name" aria-label="Username" name="username" aria-describedby="basic-addon1"/>
                        </div>
                        <div className="input-group mb-3 name-input mt-5">
                            <input type="text" className="form-control" placeholder="Email address" aria-label="email" name="email" aria-describedby="basic-addon1"/>
                        </div>
                        <div className="input-group mb-3 name-input mt-5">
                            <input type="number" className="form-control" placeholder="Telephone number" aria-label="number"  name="number" aria-describedby="basic-addon1"/>
                        </div>
                        <div className="input-group comment mb-5 mt-5">
                            <textarea class="form-control" aria-label="With textarea"  name="message" placeholder="Write something..."></textarea>
                        </div>
                        <button type="button" className="btn submit-btn btn-lg mb-5">SUBMIT</button>
                    </div>
                </form>
                </div>
                <div class="col map-div">
                     <Map />
                </div>
            </div>
        </div>
    );
}