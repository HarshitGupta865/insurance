import React from 'react';
import './Number.css';

import CountUp from 'react-countup';

export default function Numbers(){
  return(
    <div>
        <div>
          <h1 className='services-heading'>OUR COMMUNITY</h1>
        </div>
        <div className='number-card-div'>
          <div class="card number-card shadow-lg">
            <div className='number'>
              <CountUp start={0} end={2000} duration={5} delay={3}/>
              <span>+</span>
            </div>  
            <div class="card-body shadow-lg">
              <h5 class="card-title number-title">Number Of Clients</h5>
            </div>
          </div>

          <div class="card number-card shadow-lg">
            <div className='number'>
              <CountUp start={0} end={10000} duration={5} delay={3}/>
              <span>+</span>
            </div>  
            <div class="card-body">
              <h5 class="card-title number-title">Number Of Policies Sold</h5>
            </div>
          </div>

          <div class="card number-card shadow-lg">
            <div className='number'>
              <CountUp start={0} end={3000} duration={5} delay={3}/>
              <span>+</span>
            </div>  
            <div class="card-body">
              <h5 class="card-title number-title">Number Of Claims Settelment Yet</h5>
            </div>
          </div>
        </div>
    </div>
  );
}