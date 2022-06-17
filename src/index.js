import React from 'react';
import ReactDOM from 'react-dom';

//importamos estilos y JS bootstrap dentro de nuestro proyecto
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'

//importamos el archivo index.css dentro de nuestro proyecto
import './css/index.css'

import App from './App'

//renderiza la app
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

