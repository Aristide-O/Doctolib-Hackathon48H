import React from 'react';

import Inscription from './Components/InscriptionPage/Inscription';
import MainPage from './Components/MainPage/MainPage'
import MainPageGlobal from './Components/Banniere/MainPageGlobal';
import MedicalSurveillance from './Components/MedicalSurveillance/MedicalSurveillance';
import Navbar from './Components/Navbar/Navbar';
import ProfilPage from './Components/ProfilPage/ProfilPage';

import { Switch, Route } from 'react-router-dom';

import './App.css';

const App = () => {
  return (
    <div>
      <MainPageGlobal />
      <Switch>
        {<Route exact path='/'>
          <Inscription />
        </Route>}
        <Route path='/MedicalSurveillance'>
          <Navbar />
          <MedicalSurveillance />
        </Route>
        <Route path='/ProfilPage'>
          <Navbar />
          <ProfilPage />
        </Route>
        <Route path='/MainPage'>
          <Navbar />
          <MainPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
