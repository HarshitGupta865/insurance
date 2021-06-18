import React from 'react';
import Button from '@material-ui/core/Button';
import Navbar from '../Navbar/navbar';
import ExploreIcon from '@material-ui/icons/Explore';
import ShopIcon from '@material-ui/icons/Shop';
import '../../index.css';
import './Herosection.css';

const Herosection = () => {
  return (
    <main className="main_herosection d-flex justify-content-center flex-column">
      <Navbar />
      <section className="ms-5 mt-5 text-left herosection">
        <p className="hero_para">
          Welcome To,
          <br />
          <span className="first_span">INSURANCE POINT </span>
          <span className="second_span">OFFICE</span>
        </p>
        <h1 className="mt-4 mb-5 hero_header">
          BE IT <span class="change_content text-uppercase"> </span>
          <br />
          WE HAVE GOT YOU COVERED.
        </h1>
        <p className="hero_para">
          Insurance offers a man the only way where
          <br />
          he can make his will before he makes money.
        </p>
        <div className="button_section pt-5 d-flex me-5">
          <Button
            style={{
              fontSize: '1.1rem',
              backgroundColor: '#3265A7',
              color: '#FFFFFF',
              fontWeight: 'bold',
            }}
            className="me-5 hero_button p-3"
            variant="contained"
            size="small"
          >
            SERVICES
            <ExploreIcon fontSize="large" style={{ marginLeft: '5px' }} />
          </Button>
          <Button
            style={{
              fontSize: '1.1rem',
              backgroundColor: '#3265A7',
              color: '#FFFFFF',
              fontWeight: 'bold',
            }}
            className="ms-5 hero_button p-3"
            href="https://play.google.com/store/apps/details?id=insurance.point.bs"
            target="_blank"
            variant="contained"
            size="small"
          >
            GET OUR APP
            <ShopIcon fontSize="large" style={{ marginLeft: '5px' }} />
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Herosection;
