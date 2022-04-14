import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Nav from './components/nav/Nav';
import BackDrop from './components/backDrop/BackDrop';
import Info from './components/info/Info';
import Footer from './components/footer/Footer';

function App() {

  //backdrop
  const [showBackDrop, setShowBackDrop] = useState(false)

  //info
  const [showInfo, setShowInfo] = useState(false)

  return (
    <div className="App">
      <BrowserRouter>
        <Nav setShowBackDrop={setShowBackDrop} setShowInfo={setShowInfo}/>
        <Routes>
          <Route path="/" element={<Dashboard />}/>
          <Route path="info" element={<Info setShowBackDrop={setShowBackDrop} />}/>
        </Routes>
      </BrowserRouter>
        {/* {showBackDrop ? <BackDrop setShowBackDrop={setShowBackDrop} setShowInfo={setShowInfo}/> : null}
        {showInfo ? <Info setShowInfo={setShowInfo} setShowBackDrop={setShowBackDrop}/> : null} */}
        <Footer setShowBackDrop={setShowBackDrop} setShowInfo={setShowInfo} />
    </div>
  );
}

export default App;
