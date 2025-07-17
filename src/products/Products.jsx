import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './products.css';
import { useTranslation } from 'react-i18next';

const Products = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false
    });
  }, []);

  return (
    <div className='product-container'>
      <div data-aos="fade-up" className="product-back"></div>
      <div className="products-cards">
        <div data-aos="fade-up" className="cards">
          <img className='card-img' src="/product-img/card1.jpg" alt="" />
          <a href="#">{t('products.medicine')} (14)</a>
        </div>
        <div data-aos="fade-left" className="cards">
          <img className='card-img' src="/product-img/card2.jpg" alt="" />
          <a href="#">{t('products.cosmetics')} (8)</a>
        </div>
        <div data-aos="fade-right" className="cards">
          <img className='card-img' src="/product-img/card3.jpg" alt="" />
          <a href="#">{t('products.equipment')} (6)</a>
        </div>
      </div>
    </div>
  );
};

export default Products;
