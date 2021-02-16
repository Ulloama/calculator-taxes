import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; // Archivo CSS de Bootstrap 4 
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'; // Archivo Javascript de Bootstrap 4 

import './index.css';

import Main from './components/main/Main';

ReactDOM.render(
  <React.StrictMode>

    <Main />

  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
