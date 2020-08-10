import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Showcase from './components/Showcase';
import NewInStore from './components/NewInStore';
import InspirationIdeas from './components/InspirationIdeas';
import Clearance from './components/Clearance';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Showcase />
      <NewInStore />
      <InspirationIdeas />
      <Clearance />
    </div>
  );
}

export default App;
