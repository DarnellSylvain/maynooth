import React from 'react';
import { Switch, Route } from "react-router-dom";

import './App.css';

import Navbar from './sharedComponents/Navbar';
import Footer from './sharedComponents/Footer';
import Home from './Home/Home';
import LivingRoom from './LivingRoom/LivingRoom';
import ProductPage from './ProductPage/ProductPage';
import ContactUs from './ContactPage/ContactUs';

function App() {
  return (
    <div className="app-container">

      <Switch>
        
        <Route exact path="/">
          <Navbar />
          <Home />
          <Footer />
        </Route>

        <Route exact path="/livingroom">
          <Navbar />
          <LivingRoom/>
          <Footer />
        </Route>

      </Switch>


        <Route exact path="/productpage">
          <Navbar />
          <ProductPage />
          <Footer />
          </Route>
          
        <Route exact path="/contactus">
          <ContactUs />
        </Route>
    </div>
  );
}

export default App;
