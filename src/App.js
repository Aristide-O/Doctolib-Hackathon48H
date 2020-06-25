import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Inscription from './Components/InscriptionPage/Inscription';
import MainPage from './Components/MainPage/MainPage'
import MedicalSurveillance from './Components/MedicalSurveillance/MedicalSurveillance';
import VaccinationPage from './Components/VaccinationPage/VaccinationPage';

import './App.css';



const App = () => {
  return (
    <div className="App">
      <VaccinationPage />
      {/*
      <MainPage />
    <div>
      <Switch>
        <Route path='/'>
          <Inscription />
        </Route>
        <Route path='/MedicalSurveillance'>
          <MedicalSurveillance />
        </Route>
      </Switch> */}
    </div>
  );
}

export default App;
