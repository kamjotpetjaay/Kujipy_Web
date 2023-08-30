import React from 'react';
import logo from './assets/kujipylogo.jpg';
import imagen1 from './assets/banda.jpg';
import imagen2 from './assets/tiptsy2.jpg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ImageSlider, { Imagen } from './components/ImageSlider/ImageSlider';

function App() {
  
  
  const galeriaImagenes: Imagen[] = [
    { url: imagen1, name: "banda"},
    { url: imagen2, name: "tiptsy2"}
  ]

  return (
    <div className="App">
      <div className='NavBar'>
        <Navbar/>
      </div>
      {/* <nav> 
        <a href= "#" className= "Nav-enlace">INICIO</a>
        <a href= "#" className= "Nav-enlace">EVENTOS</a>
        <a href= "#" className= "Nav-enlace">CONTRATACIONES</a>
        
      </nav> */}
      <div className='Content'>
        <header className="App-header">
          <h1>
            BIENVENIDO A PAGINA KUJIPY
          </h1>
        </header>
        <div className='Description'>
          <h2>
            Aqui podras ver contenido relacionado a nuestro grupo, asi como tambien nuestros proximos eventos y presentaciones.
          </h2>
        </div>
        <div className='Galery-main'>
          <ImageSlider galeriaImagenes={ galeriaImagenes} />
        </div>
      </div>
      <div className='FootPage'>
        "Derechos casi reservados kujipy" 
      </div>
    </div>
  );
}

export default App;
