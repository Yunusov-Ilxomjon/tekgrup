import React, { useEffect } from 'react';
import '../i18n';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './contact.css';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div className='contact-container'>
      <div data-aos="zoom-in" className="contact-back">
        <h1 data-aos="fade-up">{t("contact.title1")}</h1>
        <p data-aos="fade-down">{t("contact.subtitle")}</p>
      </div>

      <div className="contact-registr">
        <div data-aos="fade-left" className="title">
          <p className='title-p'>{t("contact.form_title")}</p>
          <h1 className='title-h1'>{t("contact.form_subtitle")}</h1>

          <div style={{ borderTop: '1px solid grey' }} className="title-contents">
            <div className='title-sycle'></div>
            <div className='title-info'>
              <h1>{t("contact.hr_title")}</h1>
              <p>hr.uz@tekgrup.net</p>
            </div>
          </div>

          <div className="title-contents">
            <div className='title-sycle'></div>
            <div className='title-info'>
              <h1>{t("contact.sales_title")}</h1>
              <p>sales.uz@tekgrup.net | +998 55 511 16 86</p>
            </div>
          </div>

          <div className="title-contents">
            <div className='title-sycle'></div>
            <div className='title-info'>
              <h1>{t("contact.info_title")}</h1>
              <p>info.uz@tekgrup.net | +998 55 515 04 15</p>
            </div>
          </div>
        </div>

        <div data-aos="fade-right" className="registr">
          <h1>{t("contact.leave_message")}</h1>
          <form className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label>{t("contact.name")}</label>
                <input type="text" placeholder={t("contact.name")} required />
              </div>
              <div className="form-group">
                <label>{t("contact.phone")}</label>
                <input type="text" placeholder={t("contact.phone")} required />
              </div>
            </div>
            <div className="form-group">
              <label>{t("contact.email")}</label>
              <input type="email" placeholder={t("contact.email")} required />
            </div>
            <div className="form-group">
              <label>{t("contact.message")}</label>
              <textarea placeholder={t("contact.message_placeholder")} required></textarea>
            </div>
            <button type="submit">📧 {t("contact.send")}</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
