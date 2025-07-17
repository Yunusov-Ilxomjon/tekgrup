import React, { useEffect } from 'react';

const YandexMap = () => {
  useEffect(() => {
    const loadMapScript = () => {
      return new Promise((resolve) => {
        if (window.ymaps) {
          resolve();
        } else {
          const script = document.createElement('script');
          script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';
          script.type = 'text/javascript';
          script.onload = resolve;
          document.head.appendChild(script);
        }
      });
    };

    loadMapScript().then(() => {
      window.ymaps.ready(() => {
        if (document.getElementById('map') && !document.getElementById('map').hasChildNodes()) {
          new window.ymaps.Map('map', {
            center: [41.311151, 69.279737],
            zoom: 12,
          });
        }
      });
    });
  }, []);

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <div id="map" style={{ width: '100%', height: '300px' }}></div>
    </div>
  );
};

export default YandexMap;
