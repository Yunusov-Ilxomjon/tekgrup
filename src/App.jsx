import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './App.css';
import Counter from './Counter';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/navigation';

// import 'swiper/css/navigation'; /* Agar navigation tugmalar kerak bo‘lsa */

import { Pagination, Autoplay } from 'swiper/modules';




function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animatsiya davomiyligi (ms)
      once: false      // bir marta ishlasin yoki har safar scrollda
    });
  }, []);

  return (
    <div className="section-container">

      <div className="section-info">
        <h2 data-aos="fade-left">TeKgrupga xush kelibsiz</h2>
        <h1 data-aos="fade-up">Sog‘lom dunyo uchun
          <br /> harakat qilamiz!
        </h1>
        <p data-aos="zoom-in">Biz bilan, faqat dori-darmon emas, balki keng qamrovli xizmatlarni ham kashf eting.</p>
        <a data-aos="zoom-in" href="./"><button className='btn-info-1'>Ko'proq bilish</button>
        </a>
      </div>

      <div className="section-counts">
        <div data-aos="fade-left" className="section-contents">
          <div data-aos="fade-up" className="counts-top">
            <div className='counter'>
              <Counter end={8} duration={2} text="yil" />
              <p>Bozorda mavjud</p>
            </div>

            <div className='counter'>
              <Counter end={10} duration={2} />
              <p>Eksklyuziv preparatlar</p>
            </div>

            <div className='counter'>
              <Counter end={30} duration={2} />
              <p>Ortiq ishchilar​</p>
            </div>
          </div>

          <div data-aos="fade-left" className="counts-bottom">
            <div className='counter'>
              <Counter end={15} duration={2} />
              <p>Hamkorlar</p>
            </div>

            <div className='counter'>
              <Counter end={200} duration={3} />
              <p>Doimiy mijozlar</p>
            </div>

            <div className='counter'>
              <Counter end={2000} duration={4} text="kv" />
              <p>Omborlarning maydoni​</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section-info-2">
        <h1 data-aos="fade-left">Farmasevtika industriyasida
          <br /> yetakchi distribyutorlardan
          <br /> birimiz
        </h1>
        <p data-aos="fade-right">Eng yaxshi mijozlar uchun eng yaxshi xizmatlar.</p>
        <a data-aos="zoom-in" href="./"><button className='btn-info-2'>Bog'lanish</button>
        </a>
      </div>

      <div className="section-customer">
        <div data-aos="fade-right" className="customer-left">
          <h2 data-aos="fade-right">Nega Bizni tanlashadi</h2>
          <h1 data-aos="fade-left">Eng yaxshi mijozlar uchun eng yaxshi xizmatlar.</h1>
          <img data-aos="zoom-in" src="/section-img/img-3.png" alt="" />
        </div>

        <div className="customer-right">
          <div data-aos="fade-right" className="category"><h1>Ishonchlilik</h1></div>
          <div data-aos="zoom-in" className="category"><h1>Yuqori darajada xavfsiz</h1></div>
          <div data-aos="fade-left" className="category"><h1>Vaqt bilan sinalgan sifat</h1></div>
        </div>
      </div>

      <div className="slide">
        <h1 data-aos="fade-right">Bizning Hamkorlar</h1>
        <p data-aos="fade-left">Biz eng sifatli, xavfsiz va ishonchli xizmat ko’rsatganimiz uchun hamkorlarimiz bizdan mamnunlar</p>
        <div className="slides">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000 }}
            spaceBetween={20}
               loop={true}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}

          >
            <SwiperSlide>
              <div className="swiper-div">
                <img className='slide-img' src="/section-img/img1.png" alt="Slide 1" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-div">
                <img className='slide-img' src="/section-img/img2.jpg" alt="Slide 2" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-div">
                <img className='slide-img' src="/section-img/img3.png" alt="Slide 3" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-div">
                <img className='slide-img' src="/section-img/img4.png" alt="Slide 4" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-div">
                <img className='slide-img' src="/section-img/img5.png" alt="Slide 5" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-div">
                <img className='slide-img' src="/section-img/img6.jpg" alt="Slide 6" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>





    </div>
  );
}

export default App;
