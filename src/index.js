import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './header/Header';
import Navbar from './navbar/Navbar';
import App from './App'
import Footer from './footer/Footer';

import News from './news/News';
import Products from './products/Products';
import About from './about/About';
import Contact from './contact/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Navbar />

      <Routes>
        <Route path="/" element={<App />} />         {/* Bosh sahifa */}
        <Route path="/news" element={<News />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
