import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Inicio from './inicio/inicio';
import Events from './events/events';
import About from './about/about';
import Hiring from './hiring/hiring';
import Galery from './galery/galery';

function NoMatch() {
  return (
    <div style={{ padding: 20 }}>
      <h2>404: Page Not Found</h2>
      <p>No existe la página, puede disfrutar mientras del sonido kujipy.</p>
    </div>
  );
}

function App() {
 
  return (
    <Router>
      <div className="App">
        <div className='NavBar'>
            <Navbar/>
        </div>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/events" element={<Events />} />
        <Route path="/about" element={<About />} />
        <Route path="/hiring" element={<Hiring />} />
        <Route path="/galery" element={<Galery />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <div className='FootPage'>
            "Derechos reservados kujipy 2023" 
        </div>
      </div>
    </Router>
  );
}

export default App;
