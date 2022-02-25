import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; //Importing App.js and the HTML inside it
import reportWebVitals from './reportWebVitals';

ReactDOM.render( //rendering HTML File from ./App
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') //Root -- div id="root" located in  Public -> Index.html
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
