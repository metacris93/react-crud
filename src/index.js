import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './global.css'

//import BadgeNew from './pages/BadgeNew'
//import Badges from './pages/Badges'
import reportWebVitals from './reportWebVitals';
import App from './components/App';

//const name = 'Cristian'
//const jsx = (
//  <h1>Hola soy, {name}</h1>
//)
//const element = React.createElement('h1', {class: 'header'}, `Hola! soy un ${name}`);
//const link = React.createElement('a', {href: 'https://platzi.com'}, 'Click en el enlace');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
/*ReactDOM.render(
  <React.StrictMode>
    <Badges />
  </React.StrictMode>,
  document.getElementById('root')
);*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
