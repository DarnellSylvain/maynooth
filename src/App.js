import React from 'react';
import { Switch, Route } from "react-router-dom";

import './App.css';

import Navbar from './sharedComponents/Navbar';
import Footer from './sharedComponents/Footer';
import Home from './Home/Home';
import LivingRoom from './LivingRoom/LivingRoom';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Switch>
        
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/livingroom">
          <LivingRoom/>
        </Route>

      </Switch>
      <Footer />
    </div>
  );
}

export default App;
