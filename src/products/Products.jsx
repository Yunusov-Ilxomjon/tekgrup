import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './products.css'

const Products = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animatsiya davomiyligi (ms)
      once: false      // bir marta ishlasin yoki har safar scrollda
    });
  }, []);
  return (
    <div className='product-container'>
      <div data-aos="fade-up" className="product-back"></div>
      <div className="products-cards">
        <div data-aos="fade-up" className="cards">
          <img className='card-img' src="/product-img/card1.jpg" alt="" />
          <a href="#">Dori mahsulotlari (14)</a>
        </div>
        <div data-aos="fade-left" className="cards">
          <img className='card-img' src="/product-img/card2.jpg" alt="" />
          <a href="#">Kosmetika mahsulotlari (8)</a>
        </div>
        <div data-aos="fade-right" className="cards">
          <img className='card-img' src="/product-img/card3.jpg" alt="" />
          <a href="#">Tibbiy buyumlar (6)</a>
        </div>
      </div>

    </div>

  )
}

export default Products