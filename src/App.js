import React from 'react';

import './App.css';
import Inscription from './Components/InscriptionPage/Inscription';
import Navbar from './Components/Navbar/Navbar';
import { Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Switch>
        <Route path='/'>
          <Inscription />
        </Route>
        <Navbar />
      </Switch>
    </div>
  );
}

export default App;
