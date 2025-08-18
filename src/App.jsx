import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import FlowSDK from './pages/FlowSDK.jsx';
import AboutHarpoZK from './pages/AboutHarpoZK.jsx';
import HowToUse from './pages/HowToUse.jsx';
import Concepts from './pages/Concepts.jsx';
import Docs from './pages/Docs.jsx';
import About from './pages/About.jsx';
import Terms from './pages/Terms.jsx';
import Privacy from './pages/Privacy.jsx';
import Header from './Components/sections/Header';
import Footer from './Components/sections/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-white text-gray-900 dark:bg-gray-900 dark:text-slate-300">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/flow-sdk' element={<FlowSDK />} />
            <Route path='/about-harpo-zk' element={<AboutHarpoZK />} />
            <Route path='/docs' element={<Docs />} />
            <Route path='/how-to-use' element={<HowToUse />} />
            <Route path='/concepts' element={<Concepts />} />
            <Route path='/about-us' element={<About />} />
            <Route path='/terms' element={<Terms />} />
            <Route path='/privacy' element={<Privacy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
