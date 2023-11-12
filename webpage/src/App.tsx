import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Inicio from './inicio/inicio';
import Events from './events/events';
import About from './about/about';
import Hiring from './hiring/hiring';
import Galery from './galery/galery';
import xaam from './assets/Xaam.png';
import KujipySchema from './schema_markup/KujipySchema';
import Tlahuitoltepec from './tlahuitoltepec/tlahuitoltepec';

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
        <div className='HeaderStaticBar'>
          <div className='ImageStaticBar'>
            <div className='ImageBackground'></div>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
          <Route path="/hiring" element={<Hiring />} />
          <Route path="/galery" element={<Galery />} />
          <Route path="/tlahuitoltepec" element={<Tlahuitoltepec />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
        <div className='FootPage'>
          <div className='FootPageText'> <b>Derechos reservados @kujipy 2023</b></div>
        </div>
      </div>
      <KujipySchema/>
    </Router>
  );
}

export default App;
