import React from 'react';

import ConnectionPage from './Components/ConnectionPage/ConnectionPage';
import Footer from './Components/Footer/Footer';

import './App.css';

import GrowthPage from './Components/GrowthPage/GrowthPage'
import Inscription from './Components/InscriptionPage/Inscription';
import MainPage from './Components/MainPage/MainPage'
import MainPageGlobal from './Components/Banniere/MainPageGlobal';
import MedicalSurveillance from './Components/MedicalSurveillance/MedicalSurveillance';
import Navbar from './Components/Navbar/Navbar';
import ProfilPage from './Components/ProfilPage/ProfilPage';

import { Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <MainPageGlobal />
      <Switch>
        <Route exact path='/'>
          <Inscription />         
        </Route>
        <Route path='/ConnectionPage'>
          <ConnectionPage />         
        </Route>
        <Route path='/MedicalSurveillance'>
          <Navbar />
          <MedicalSurveillance />         
        </Route>
        <Route path='/MainPage'>
          <Navbar />
          <MainPage />       
        </Route>
        <Route path='/ProfilPage'>
          <Navbar />
          <ProfilPage />
        </Route>
        <Route path='/GrowthPage'>
          <Navbar />
          <GrowthPage />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
