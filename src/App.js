import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';

// --------------------------------------------------COMPONENTS-------------------------------------

<<<<<<< HEAD
import Footer from '../src/Component/Footer/Footer';
import Herosection from '../src/Component/Herosection/Herosection';
import Navbar from '../src/Component/Navbar/navbar';
<<<<<<< HEAD
import Contact from '../src/Component/Contact/Contact'
=======
// import Error from '../src/Component/Error/Error';
>>>>>>> d725073 (Pull final navbar)
=======
import Navbar from './Component/Navbar/Navbar';
import Footer from './Component/Footer/Footer';
import Home from '../src/Component/Home/Home';
import About from '../src/Component/About/About';

// -------------------------------------------------SERVICE SECTION COMPONENTS-------------------------

import Lic from '../src/Component/Services/LIC/Lic';
import Health from '../src/Component/Services/Health/Health';
import Vehicle from '../src/Component/Services/Vehicle/Vehicle';
import Accident from '../src/Component/Services/Accident/Accident';
import Travel from '../src/Component/Services/Travel/Travel';
import Commercial from '../src/Component/Services/Commerical/Commercial';
import Marine from '../src/Component/Services/Marine/Marine';
import Machine from '../src/Component/Services/Machine/Machine';
import Company from '../src/Component/Services/Company/Company';
import Office from '../src/Component/Services/Office/Office';
import Hotel from '../src/Component/Services/Hotel/Hotel';
import House from '../src/Component/Services/House/House';
import Shop from '../src/Component/Services/Shop/Shop';
import Flat from '../src/Component/Services/Flat/Flat';
import Other from '../src/Component/Services/Other/Other';

// ----------------------------------------------------SERVICE SECTION COMPONENTS ENDS---------------------

import Gallery from '../src/Component/Gallery/Gallery';
import Award from '../src/Component/Award/Award';
// import Contact from '../src/Component/Contact/Contact';
import Faq from '../src/Component/Faq/Faq';
import Error from '../src/Component/Error/Error';
>>>>>>> b2d92cd (Routing done)

function App() {
  return (
    <>
      <Navbar />
<<<<<<< HEAD
      <Contact />
=======
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />

        {/* ----------------------------------------------------SERVICES ROUTING----------------------------- */}
        <Route exact path="/services/LIC-insurance" component={Lic} />
        <Route exact path="/services/health-insurance" component={Health} />
        <Route exact path="/services/vehicle-insurance" component={Vehicle} />
        <Route
          exact
          path="/services/accidental-insurance"
          component={Accident}
        />
        <Route exact path="/services/travel-insurance" component={Travel} />
        <Route
          exact
          path="/services/commercial-product-insurance"
          component={Commercial}
        />
        <Route exact path="/services/marine-insurance" component={Marine} />
        <Route exact path="/services/machine-insurance" component={Machine} />
        <Route exact path="/services/company-insurance" component={Company} />
        <Route exact path="/services/office-insurance" component={Office} />
        <Route exact path="/services/hotel-insurance" component={Hotel} />
        <Route exact path="/services/house-insurance" component={House} />
        <Route exact path="/services/shop-insurance" component={Shop} />
        <Route exact path="/services/flat-insurance" component={Flat} />
        <Route
          exact
          path="/services/other-financial-services"
          component={Other}
        />
        {/* ----------------------------------------------------SERVICES ROUTING ENDS----------------------------- */}
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/awards-and-certifications" component={Award} />
        {/* <Route exact path="/contact" component={Contact} /> */}
        <Route exact path="/faq" component={Faq} />
        <Route component={Error} />
      </Switch>
>>>>>>> b2d92cd (Routing done)
      <Footer />
    </>
  );
}

export default App;
