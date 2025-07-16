import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import './about.css'

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // animatsiya davomiyligi (ms)
      once: false      // bir marta ishlasin yoki har safar scrollda

    });
  }, []);
  return (
    <div className='about-container'>
      <div data-aos="zoom-in" className="about-back">
        <h1 data-aos="fade-left">Biz haqimizda</h1>
        <p data-aos="fade-right">Sog‘lom dunyo uchun harakat qilamiz!</p>
      </div>

      <div className="about-info">
        <div className="about-title">
          <h2 data-aos="zoom-out">Biz kimmiz?</h2>
          <h1 data-aos="zoom-in">Biz bilan, faqat dori-darmon emas, balki keng qamrovli xizmatlarni ham kashf eting.</h1>
          <p data-aos="fade-right"> «Tek Grup Saglik Hizmetleri» Mas’uliyati Cheklangan Jamiyat Xorijiy Korxonasi 2018 yilda tashkil etilgan bo‘lib, TEKGRUP xalqaro tanilgan holdingi tarkibiga kiradi va 10 yildan ortiq tajribaga ega. U 2023 yildan boshlab O‘zbekiston farmatsevtik tarqatish bozorida faoliyat yuritmoqda.</p>
          <p data-aos="fade-left">Kompaniya o‘z faoliyatini «Yaxshi raqobat» prinsipi asosida amalga oshirib, bu prinsipga amal qilib, barcha xodimlar va manfaatdor tomonlarga nisbatan shu siyosatni davom ettirmoqda. Farmatsevtik mahsulotlar assortimentini texnologiyalar rivojlanishi va aholining ehtiyojlarini hisobga olgan holda kengaytirmoqda. Yaxshi rivojlangan infratuzilma va innovatsion, ijodiy mutaxassislar jamoasi yordamida, ular farmatsevtika va sog‘liqni saqlash sohasida professional bilim va ko‘nikmalarini doimiy ravishda oshirib bormoqda.</p>
        </div>
        <div className="about-img">
          <img data-aos="zoom-in" src="/about-img/img1.jpg" alt="" />
        </div>
      </div>

      <div data-aos="zoom-in" className="about-back-2">
        <h1 data-aos="fade-right">Nima Qilamiz?</h1>
        <p data-aos="fade-left">Tek Grup Dori-darmonlar, tibbiy asbob-uskunalar, kosmetika va gigiena mahsulotlari bo‘yicha keng assortimentni taqdim etadi. Yuqori darajadagi imkoniyatlar va saqlash sharoitlarimiz orqali, biz barcha mahsulotlarni mijozlarimizga xavfsiz va ishonchli tarzda yetkazib beramiz.</p>
        <a href="#">
          <button data-aos="fade-down" className='about-btn'>Ko'proq bilish</button>
        </a>
      </div>

      <div className="about-servise">
        <div className="servise-title">
          <p data-aos="fade-down">Biz nimalar bilan shugu'llanamiz</p>
          <h1 data-aos="fade-up">«Tek Grup Saglik Hizmetleri» XK MCHJ tomonidan taqdim etiladigan xizmatlar</h1>
          <img data-aos="zoom-out" src="/about-img/img2.png" alt="" />
        </div>

        <div className="servise-cards">
          <div data-aos="fade-left" className="servise-card-1">
            <h2>Farmatsevtik mahsulotlarni saqlash va yetkazib berish.</h2>
          </div>
          <div data-aos="fade-right" className="servise-card-1">
            <h2>Dori-darmonlar, tibbiy asbob-uskunalar, kosmetika va gigiena mahsulotlarini marketing va realizatsiya qilish;</h2>
          </div>
        </div>
      </div>

      <div className="about-sertificate">
        <h1 data-aos="zoom-out">Bizning Sertifikatlarimiz</h1>
        <div  className="sertificate">
          <Swiper
            spaceBetween={30}
            loop={true}
            slidesPerView={3} // necha slide ko‘rinadi
            breakpoints={{
              1024: { slidesPerView: 3 },
              768: { slidesPerView: 2 },
              0: { slidesPerView: 1 },
            }}
            className='about-swiper'>

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
  )
}

export default About