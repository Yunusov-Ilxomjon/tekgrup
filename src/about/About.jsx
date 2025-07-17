import React, { useEffect } from 'react';
import '../i18n';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './about.css';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false
    });
  }, []);

  return (
    <div className='about-container'>
      <div data-aos="zoom-in" className="about-back">
        <h1 data-aos="fade-left">{t('about.title')}</h1>
        <p data-aos="fade-right">{t('about.subtitle')}</p>
      </div>

      <div className="about-info">
        <div className="about-title">
          <h2 data-aos="zoom-out">{t('about.who')}</h2>
          <h1 data-aos="zoom-in">{t('about.mission')}</h1>
          <p data-aos="fade-right">{t('about.description1')}</p>
          <p data-aos="fade-left">{t('about.description2')}</p>
        </div>
        <div className="about-img">
          <img data-aos="zoom-in" src="/about-img/img1.jpg" alt="" />
        </div>
      </div>

      <div data-aos="zoom-in" className="about-back-2">
        <h1 data-aos="fade-right">{t('about.whatWeDo')}</h1>
        <p data-aos="fade-left">{t('about.whatWeDoDesc')}</p>
        <a href="#">
          <button data-aos="fade-down" className='about-btn'>{t('about.learnMore')}</button>
        </a>
      </div>

      <div className="about-servise">
        <div className="servise-title">
          <p data-aos="fade-down">{t('about.activitiesTitle')}</p>
          <h1 data-aos="fade-up">{t('about.activitiesSubtitle')}</h1>
          <img data-aos="zoom-out" src="/about-img/img2.png" alt="" />
        </div>

        <div className="servise-cards">
          <div data-aos="fade-left" className="servise-card-1">
            <h2>{t('about.service1')}</h2>
          </div>
          <div data-aos="fade-right" className="servise-card-1">
            <h2>{t('about.service2')}</h2>
          </div>
        </div>
      </div>

      <div className="about-sertificate">
        <h1 data-aos="zoom-out">{t('about.certificates')}</h1>
        <div className="sertificate">
          <Swiper
            spaceBetween={30}
            loop={true}
            slidesPerView={3}
            breakpoints={{
              1024: { slidesPerView: 3 },
              768: { slidesPerView: 2 },
              0: { slidesPerView: 1 },
            }}
            className='about-swiper'
          >
            <SwiperSlide>
              <img data-aos="fade-up" className='swiper-img' src="/about-img/sertf1.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img data-aos="zoom-in" className='swiper-img' src="/about-img/sertf2.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img data-aos="fade-down" className='swiper-img' src="/about-img/sertf1.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className='swiper-img' src="/about-img/sertf3.png" alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default About;
