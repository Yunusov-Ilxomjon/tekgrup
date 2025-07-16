import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './news.css'

const News = () => {
    useEffect(() => {
    AOS.init({
      duration: 1000, // animatsiya davomiyligi (ms)
      once: false      // bir marta ishlasin yoki har safar scrollda
    });
  }, []);
  return (
    <div className='new-container'>
      <div className="nav-bacground">
        <h1 data-aos="fade-up">Yangiliklar</h1>
      </div>
      <div data-aos="fade-up" className="news-cards">
        <div data-aos="fade-left" className="news-card">
          <img src="/news-img/1.jpg" alt="" />
          <a href="#"><h1>I Xalqaro ilmiy-amaliy sammit</h1></a>
          <p>Aprel 30, 2025</p>
          <p>2025-yil 25–26 aprel kunlari Toshkent shahrida “ZAMONAVIY INTERVENTSION KARDIOLOGIYA: NAZARIYADAN AMALIYOTGA” mavzusida o‘tkazilgan I xalqaro ilmiy-amaliy sammitda kompaniyamiz faxr bilan ishtirok etdi. Ushbu nufuzli tadbir</p>
          <a href="#"><h3>Ko'proq o'qish</h3></a>
        </div>
        <div data-aos="fade-right" className="news-card">
          <img src="/news-img/2.png" alt="" />
          <a href="#"><h1>«Tek Grup Sağlık Hizmetleri» ISO 9001:2015 Sertifikatini Qo‘lga Kiritdi!</h1></a>
          <p>Mart 13, 2025</p>
          <p>Biz faxr bilan e’lon qilamiz: «Tek Grup Sağlık Hizmetleri» kompaniyasi 2025-yil fevral oyida ISO 9001:2015 sifat menejmenti tizimi sertifikatiga ega bo‘ldi! Ushbu sertifikat kompaniyamizning yuqori</p>
          <a href="#"><h3>Ko'proq o'qish</h3></a>
        </div>
        <div data-aos="fade-up" className="news-card">
          <img src="/news-img/3.jpg" alt="" />
          <a href="#"><h1>«Tek Grup Saglik Hizmetleri» MCHJ XK</h1></a>
          <p>Aprel 30, 2025</p>
          <p>Tek Grup jamoasi 2023-yil iyul-avgust oylarida o’z jamoasiga treninglar o’tkazdi. Unda hamkor kompaniyalar o’zlarining dori vositalarini tanishtirib o’tdilar.</p>
          <a href="#"><h3>Ko'proq o'qish</h3></a>
        </div>
        <div data-aos="fade-left" className="news-card">
          <img src="/news-img/4.jpg" alt="" />
          <a href="#"><h1>2024-yil 8-oktabrdagi Konferensiyadan lavhalar</h1></a>
          <p>Avgust 5, 2024</p>
          <p>Uchrashuv davomida tibbiyotdagi yangiliklar, yurtimizdagi ushbu sohadagi o’zgarishlar yuzasidan suhbatlar o’tkazildi</p>
          <a href="#"><h3>Ko'proq o'qish</h3></a>
        </div>
        <div data-aos="fade-up" className="news-card">
          <img src="/news-img/5.jpg" alt="" />
          <a href="#"><h1>Tekgrup nima bilan shugullanadi</h1></a>
          <p>Avgust 4, 2024</p>
          <p>«Tek Grup Saglik Hizmetleri» Mas’uliyati Cheklangan Jamiyat Xorijiy Korxonasi 2018 yilda tashkil etilgan bo‘lib, TEKGRUP xalqaro tanilgan holdingi tarkibiga kiradi va 10 yildan ortiq tajribaga</p>
          <a href="#"><h3>Ko'proq o'qish</h3></a>
        </div>
                <div data-aos="fade-down" className="news-card">
          <img src="/news-img/1.jpg" alt="" />
          <a href="#"><h1>I Xalqaro ilmiy-amaliy sammit</h1></a>
          <p>Aprel 30, 2025</p>
          <p>2025-yil 25–26 aprel kunlari Toshkent shahrida “ZAMONAVIY INTERVENTSION KARDIOLOGIYA: NAZARIYADAN AMALIYOTGA” mavzusida o‘tkazilgan I xalqaro ilmiy-amaliy sammitda kompaniyamiz faxr bilan ishtirok etdi. Ushbu nufuzli tadbir</p>
          <a href="#"><h3>Ko'proq o'qish</h3></a>
        </div>

      </div>







    </div>
  )
}

export default News