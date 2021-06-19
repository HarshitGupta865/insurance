import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import { Route, Switch } from 'react-router-dom';

// --------------------------------------------------COMPONENTS-------------------------------------

import Footer from '../src/Component/Footer/Footer';
import Navbar from '../src/Component/Navbar/navbar';
import Map from '../src/Component/Map/map';

function App() {
  return (
    <>
      <Navbar/>
      <Map />
      {/* <Footer /> */}
    </>
  );
}

export default App;
