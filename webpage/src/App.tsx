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
          <p>
            Bienvenido a pagina kujipy
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      <div className='FootPage'>
        "Derechos casi reservados kujipy"
      </div>
      
    </div>
  );
}

export default App;
