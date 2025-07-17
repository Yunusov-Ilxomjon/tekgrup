import React, { useEffect } from 'react';
import '../i18n';
import AOS from 'aos';
import { useTranslation } from 'react-i18next';
import 'aos/dist/aos.css';
import './news.css';

const News = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false
    });
  }, []);

  return (
    <div className='new-container'>
      <div className="nav-bacground">
        <h1 data-aos="fade-up">{t('news.title')}</h1>
      </div>
      <div data-aos="fade-up" className="news-cards">
        {[
          'item1',
          'item2',
          'item3',
          'item4',
          'item5',
          'item6'
        ].map((item, idx) => (
          <div data-aos={idx % 2 === 0 ? 'fade-left' : 'fade-right'} className="news-card" key={item}>
            <img src={t(`news.${item}.img`)} alt="" />
            <a href="#"><h1>{t(`news.${item}.title`)}</h1></a>
            <p>{t(`news.${item}.date`)}</p>
            <p>{t(`news.${item}.desc`)}</p>
            <a href="#"><h3>{t('news.readMore')}</h3></a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
