import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './redux/store'; //se trae el componente store que vamos a usar en toda la app
import { Provider } from 'react-redux'; //se trae la cubierta de la app

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}> 
    <App />
  </Provider>
  ); //encerrar a toda la app en Provider y se le pasa a store POR PROPS


