import React from 'react';

import ConnectionPage from './Components/ConnectionPage/ConnectionPage';
import Footer from './Components/Footer/Footer';

import './App.css';

import GrowthPage from './Components/GrowthPage/GrowthPage'
import Inscription from './Components/InscriptionPage/Inscription';
import Hospitalisation from './Components/Hospitalisation/Hospitalisation';
import MainPage from './Components/MainPage/MainPage'
import MainPageGlobal from './Components/Banniere/MainPageGlobal';
import MedicalSurveillance from './Components/MedicalSurveillance/MedicalSurveillance';
import Navbar from './Components/Navbar/Navbar';
import ProfilPage from './Components/ProfilPage/ProfilPage';
import VaccinationPage from './Components/VaccinationPage/VaccinationPage';

import { Switch, Route } from 'react-router-dom';


const App = () => {
  return (
    <div>
      <Switch>
      {/* <Route exact path='/'>
          <LandingPage />
        </Route> */}
        <Route exact path='/InscriptionPage'>
          <MainPageGlobal />
          <Inscription />
          <Footer />
        </Route>
        <Route path='/ConnectionPage'>
          <MainPageGlobal />
          <ConnectionPage />
          <Footer />
        </Route>
        <Route path='/MedicalSurveillance'>
          <MainPageGlobal />
          <Navbar />
          <MedicalSurveillance />
          <Footer />
        </Route>
        <Route path='/MainPage'>
          <MainPageGlobal />
          <Navbar />
          <MainPage />
          <Footer />
        </Route>
        <Route path='/ProfilPage'>
          <MainPageGlobal />
          <Navbar />
          <ProfilPage />
          <Footer />
        </Route>
        <Route path='/GrowthPage'>
          <MainPageGlobal />
          <Navbar />
          <GrowthPage />
          <Footer />
        </Route>
        <Route path='/Hospitalisation'>
          <MainPageGlobal />
          <Navbar />
          <Hospitalisation />
          <Footer />
        </Route>
        <Route path='/VaccinationPage'>
          <MainPageGlobal />
          <Navbar />
          <VaccinationPage />
          <Footer />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
