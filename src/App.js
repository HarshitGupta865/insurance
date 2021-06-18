import React from 'react';
import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import { Route, Switch } from 'react-router-dom';

// --------------------------------------------------COMPONENTS-------------------------------------

import Footer from '../src/Component/Footer/Footer';
import Herosection from '../src/Component/Herosection/Herosection';

function App() {
  return (
    <>
      <Herosection />
      <Footer />
    </>
  );
}

export default App;
