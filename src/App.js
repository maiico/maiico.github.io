import React, { useState } from 'react';
import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import Nav from './components/nav/Nav';
import BackDrop from './components/backDrop/BackDrop';
import Info from './components/info/Info';

function App() {

  //backdrop
  const [showBackDrop, setShowBackDrop] = useState(false)

  //info
  const [showInfo, setShowInfo] = useState(false)

  return (
    <div className="App">
        <Nav setShowBackDrop={setShowBackDrop} setShowInfo={setShowInfo}/>
        <Dashboard />
        {showBackDrop ? <BackDrop setShowBackDrop={setShowBackDrop} setShowInfo={setShowInfo}/> : null}
        {showInfo ? <Info setShowInfo={setShowInfo} setShowBackDrop={setShowBackDrop}/> : null}
    </div>
  );
}

export default App;
