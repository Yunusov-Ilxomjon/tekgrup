import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './i18n';
import './App.css';
import Counter from './Counter';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/navigation';
import { useTranslation } from 'react-i18next';
import { Autoplay } from 'swiper/modules';

function App() {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false
    });
  }, []);

  return (
    <div className="section-container">

      <div className="section-info">
        <h2 data-aos="fade-left">{t('app.welcome')}</h2>
        <h1 data-aos="fade-up">
          {t('app.slogan.line1')} <br /> {t('app.slogan.line2')}
        </h1>
        <p data-aos="zoom-in">{t('app.discover')}</p>
        <a data-aos="zoom-in" href="./">
          <button className='btn-info-1'>{t('app.learn_more')}</button>
        </a>
      </div>

      <div className="section-counts">
        <div data-aos="fade-left" className="section-contents">
          <div data-aos="fade-up" className="counts-top">
            <div className='counter'>
              <Counter end={8} duration={2} text="yil" />
              <p>{t('app.stats.market')}</p>
            </div>
            <div className='counter'>
              <Counter end={10} duration={2} />
              <p>{t('app.stats.exclusive')}</p>
            </div>
            <div className='counter'>
              <Counter end={30} duration={2} />
              <p>{t('app.stats.workers')}</p>
            </div>
          </div>

          <div data-aos="fade-left" className="counts-bottom">
            <div className='counter'>
              <Counter end={15} duration={2} />
              <p>{t('app.stats.partners')}</p>
            </div>
            <div className='counter'>
              <Counter end={200} duration={3} />
              <p>{t('app.stats.clients')}</p>
            </div>
            <div className='counter'>
              <Counter end={2000} duration={4} text="kv" />
              <p>{t('app.stats.warehouse')}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section-info-2">
        <h1 data-aos="fade-left">
          {t('app.leader.line1')}<br />
          {t('app.leader.line2')}<br />
          {t('app.leader.line3')}
        </h1>
        <p data-aos="fade-right">{t('app.leader.sub')}</p>
        <a data-aos="zoom-in" href="./">
          <button className='btn-info-2'>{t('app.contact')}</button>
        </a>
      </div>

      <div className="section-customer">
        <div data-aos="fade-right" className="customer-left">
          <h2 data-aos="fade-right">{t('app.why_us.subtitle')}</h2>
          <h1 data-aos="fade-left">{t('app.why_us.title')}</h1>
          <img data-aos="zoom-in" src="/section-img/img-3.png" alt="" />
        </div>

        <div className="customer-right">
          <div data-aos="fade-right" className="category"><h1>{t('app.why_us.reliable')}</h1></div>
          <div data-aos="zoom-in" className="category"><h1>{t('app.why_us.safe')}</h1></div>
          <div data-aos="fade-left" className="category"><h1>{t('app.why_us.quality')}</h1></div>
        </div>
      </div>

      <div className="slide">
        <h1 data-aos="fade-right">{t('app.partners.title')}</h1>
        <p data-aos="fade-left">{t('app.partners.subtitle')}</p>
        <div className="slides">
          <Swiper
            className='slide-swiper'
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
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <SwiperSlide key={i}>
                <div className="swiper-div">
                  <img className='slide-img' src={`/section-img/img${i}.${i === 2 || i === 6 ? 'jpg' : 'png'}`} alt={`Slide ${i}`} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

    </div>
  );
}

export default App;
