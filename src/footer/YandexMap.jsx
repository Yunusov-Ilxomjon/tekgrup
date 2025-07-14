import React, { useEffect } from 'react';

const YandexMap = () => {
  useEffect(() => {
    // Agar script allaqachon yuklangan bo‘lsa, qayta yuklanmasin
    if (!window.ymaps) {
      const script = document.createElement('script');
      script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';
      script.type = 'text/javascript';
      script.onload = initMap;
      document.head.appendChild(script);
    } else {
      initMap();
    }

    function initMap() {
      window.ymaps.ready(() => {
        // Xarita element bo‘sh bo‘lsa yoki avval yaratilmagan bo‘lsa
        if (!document.getElementById('map').hasChildNodes()) {
          new window.ymaps.Map('map', {
            center: [41.311151, 69.279737],
            zoom: 12,
          });
        }
      });
    }
  }, []);

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <div id="map" style={{ width: '100%', height: '300px' }}></div>
    </div>
  );
};

export default YandexMap;
