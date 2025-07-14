import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Navbar from './navbar/Navbar';
import Header from './header/Header';
import Footer from './footer/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <Navbar/>
    <App />
    <Footer/>
  </React.StrictMode>
);


