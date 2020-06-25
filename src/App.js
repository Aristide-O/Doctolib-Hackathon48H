import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Inscription from './Components/InscriptionPage/Inscription';
import MainPage from './Components/MainPage/MainPage'
import MainPageGlobal from './Components/Banniere/MainPageGlobal';
import MedicalSurveillance from './Components/MedicalSurveillance/MedicalSurveillance';
import Navbar from './Components/Navbar/Navbar';
import VaccinationPage from './Components/VaccinationPage/VaccinationPage';

import './App.css';



const App = () => {
  return (
    <div className="App">
      <VaccinationPage />
      {/* <MainPageGlobal />
      <MainPage />
    <div>
      <Switch>
        <Route path='/'>
          <Inscription />
        </Route>
        <Route path='/MedicalSurveillance'>
          <MedicalSurveillance />
        </Route>
        <Navbar />
      </Switch> */}
    </div>
  );
}

export default App;
