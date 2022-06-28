import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Dashboard from './components/dashboard/Dashboard';
import Nav from './components/nav/Nav';
import BackDrop from './components/backDrop/BackDrop';
import Info from './components/info/Info';
import ProjectPage from './components/projectPage/ProjectPage';
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
          <Route path="/" element={<Home />}/>
          <Route path="sactools" element={<Dashboard />}/>
          <Route path="info" element={<Info setShowBackDrop={setShowBackDrop} />}/>
          <Route path="project/:symbol" element={<ProjectPage />} />
        </Routes>
        <Footer setShowBackDrop={setShowBackDrop} setShowInfo={setShowInfo} />
      </BrowserRouter>
    </div>
  );
}

export default App;
