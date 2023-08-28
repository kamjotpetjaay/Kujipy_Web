import React from 'react';
import logo from './assets/kujipylogo.jpg';
import './App.css';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <div className='NavBar'>
        <Navbar/>
      </div>
      <div className='Content'>
        <header className="App-header">
          <div className='logo-kujipy'>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <h1>
            BIENVENIDO A PAGINA KUJIPY
          </h1>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            si
          </a>
          <div className='Content'>

          <h2>
            Aqui podras ver contenido relacionado a nuestro grupo, asi como tambien nuestros proximos eventos y presentaciones.
          </h2>
          </div>

          
        </header>
      </div>
      <div className='FootPage'>
        "Derechos casi reservados kujipy" 
      </div>
    </div>
  );
}

export default App;
