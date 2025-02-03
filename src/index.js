import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './css/all.min.css';
import './css/fontawesome.min.css';
import MainContextProvider from './Contexts/MainContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainContextProvider>
     <App />
    </MainContextProvider>
  </React.StrictMode>
);


