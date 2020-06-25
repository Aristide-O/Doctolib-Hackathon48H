import React from 'react';
import MainPageGlobal from './Components/Banniere/MainPageGlobal';
import MainPage from './Components/MainPage/MainPage'

import './App.css';
import Inscription from './Components/InscriptionPage/Inscription';
import Navbar from './Components/Navbar/Navbar';
import { Switch, Route } from 'react-router-dom';
import MedicalSurveillance from './Components/MedicalSurveillance/MedicalSurveillance';
import ConnectionPage from './Components/ConnectionPage/ConnectionPage';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/'>
          <Inscription />
        </Route>
        <Route path='/ConnectionPage'>
          <ConnectionPage />
        </Route>
        <Route path='/MedicalSurveillance'>
          <MedicalSurveillance />
        </Route>
        <Route path='/MainPage'>
          <MainPageGlobal />
          <Navbar />
          <MainPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
