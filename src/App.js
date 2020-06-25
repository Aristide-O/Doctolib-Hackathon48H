import React from 'react';
import MainPageGlobal from './Components/Banniere/MainPageGlobal';
import MainPage from './Components/MainPage/MainPage'
import MedicalSurveillance from './Components/MedicalSurveillance/MedicalSurveillance';
import ConnectionPage from './Components/ConnectionPage/ConnectionPage';
import Footer from './Components/Footer/Footer';

import './App.css';

import Inscription from './Components/InscriptionPage/Inscription';
import Navbar from './Components/Navbar/Navbar';
import { Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/'>
          <Inscription />
          <Footer />
        </Route>
        <Route path='/ConnectionPage'>
          <ConnectionPage />
          <Footer />
        </Route>
        <Route path='/MedicalSurveillance'>
          <MedicalSurveillance />
          <Footer />
        </Route>
        <Route path='/MainPage'>
          <MainPageGlobal />
          <Navbar />
          <MainPage />
          <Footer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
