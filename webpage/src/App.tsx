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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faSpotify,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

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
          <div className='FootPageText'>
            <div className='social-media-container-footer'>
              <a href="https://www.youtube.com/@kujipyoficial8421"
                        className="youtube social">
                        <FontAwesomeIcon icon={faYoutube} size="2x" />
                    </a>
                    <a href="https://www.facebook.com/kujipy"
                        className="facebook social">
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a>
                    <a href="https://open.spotify.com/intl-es/artist/3tDuuuTkPprgYHtL7QsvXs?si=3TNj5zmNSXmqsO4mMHPwiQ" className="spotify social">
                        <FontAwesomeIcon icon={faSpotify} size="2x" />
                    </a>
                    <a href="https://www.instagram.com/kujipy"
                        className="instagram social">
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
            </div>
            <div className='derechos'>
              <b>Derechos reservados @kujipy 2025</b>
            </div>
            </div>
        </div>
      </div>
      <KujipySchema/>
    </Router>
  );
}

export default App;
