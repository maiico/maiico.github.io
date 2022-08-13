import React, { useState, useEffect} from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Projects from './components/projects/Projects';
import Dashboard from './components/dashboard/Dashboard';
import Nav from './components/nav/Nav';
import BackDrop from './components/backDrop/BackDrop';
import ProjectPage from './components/projectPage/ProjectPage';
import Footer from './components/footer/Footer';
import Config from './Config.json';
import axios from 'axios';

function App() {

  //sol price
  const [solPriceUsd, setSolPriceUsd] = useState(0);

  //backdrop
  const [showBackDrop, setShowBackDrop] = useState(false)

  useEffect(() => {
    const fetchSolPrices = async () => {
      try {
          const res = await axios.get(Config.apis.coinGecko.url)
          setSolPriceUsd(res.data.solana.usd)
      } catch(err) {
          console.log(err)
      }
  };

  fetchSolPrices();

  }, [])

  return (
    <div className="flex flex-col w-full justify-center">
      <HashRouter>
        <Nav 
          solPriceUsd={solPriceUsd}
        />
        <Routes>
          <Route path="/" element={<Home solPriceUsd={solPriceUsd}/>}/>
          <Route path="sactools" element={<Dashboard />}/>
          <Route path="project" element={<Projects solPriceUsd={solPriceUsd}/>}/>
          <Route path="project/:symbol" element={<ProjectPage />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
