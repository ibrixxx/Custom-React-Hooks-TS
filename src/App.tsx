import React from 'react';
import logo from './logo.svg';
import './App.css';
import ToggleComp from './components/ToggleComp';
import EventListenerComp from './components/EventListenerComp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <EventListenerComp/>
      </header>
    </div>
  );
}

export default App;
