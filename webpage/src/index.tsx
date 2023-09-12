import React from 'react'; //Para una app de react siempre se manda a llamar react
import ReactDOM from 'react-dom/client'; //React doom es para mandar a imprimir (DOM se maneja como el html o la vista que se ve o como la comunicación de lo que ves visualmente con código)
import './index.css'; //Importas los estilos
import App from './App'; //Importas el otro archivo que se llama App.tsx
import reportWebVitals from './reportWebVitals'; //este no lo he utilizado, pero dice que es para mantener un reporte de uso, lo vamos a dejar por el momento

const root = ReactDOM.createRoot( //Acá lo que hace es definir una constante root que va a ser igual a.... 
  document.getElementById('root') as HTMLElement //document se utiliza para mandar a llamar todo la página, entonces de la página se obtiene un elemento que se llama root (que tenga ese id)
);
root.render( //Acá root ya tiene ese elemento y renderiza ese elemento metiendo lo que viene a continuación adentro de root.
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
