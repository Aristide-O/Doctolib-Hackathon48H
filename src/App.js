import React from 'react';
import MainPageGlobal from './Components/Banniere/MainPageGlobal';
import MainPage from './Components/MainPage/MainPage'

import './App.css';
import Inscription from './Components/InscriptionPage/Inscription';
import Navbar from './Components/Navbar/Navbar';
import { Switch, Route } from 'react-router-dom';
import MedicalSurveillance from './Components/MedicalSurveillance/MedicalSurveillance';

const App = () => {
  return (
    <div className="App">
      {/* <MainPageGlobal />
      <MainPage /> */}
    {/* <div> */}
      <Switch>
        <Route path='/'>
          <Inscription />
        </Route>
        <Route path='/MedicalSurveillance'>
          <MedicalSurveillance />
        </Route>
        <Navbar />
      </Switch>
    </div>
  );
}

export default App;
