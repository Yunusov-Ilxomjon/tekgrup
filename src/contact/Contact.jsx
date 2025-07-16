import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './contact.css'

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animatsiya davomiyligi (ms)
      once: false      // bir marta ishlasin yoki har safar scrollda
    });
  }, []);

  return (
    <div className='contact-container'>
      <div data-aos="zoom-in" className="contact-back">
        <h1 data-aos="fade-up">Biz bilan bog'laning</h1>
        <p data-aos="fade-down">Bizning xizmatlar sizga qiziqmi? Biz bilan bog'laning!</p>
      </div>

      <div  className="contact-registr">
        <div  data-aos="fade-left" className="title">
          <p className='title-p'>Biz bilan Bog'laning</p>
          <h1 className='title-h1'>Hoziroq bog'laning</h1>
          <div style={{ borderTop: '1px solid grey' }} className="title-contents">
            <div className='title-sycle'></div>
            <div className='title-info'>
              <h1>Kadrlar bo'limi</h1>
              <p>hr.uz@tekgrup.net</p>
            </div>
          </div>

          <div className="title-contents">
            <div className='title-sycle'></div>
            <div className='title-info'>
              <h1>Sotuv bo'limi</h1>
              <p>sales.uz@tekgrup.net | +998 55 511 16 86</p>
            </div>
          </div>

          <div className="title-contents">
            <div className='title-sycle'></div>
            <div className='title-info'>
              <h1>Qo'shimcha ma'lumot uchun</h1>
              <p>info.uz@tekgrup.net | +998 55 515 04 15</p>
            </div>
          </div>
        </div>

        <div  data-aos="fade-right" className="registr">
          <h1>Bizga xabar qoldiring</h1>
          <form className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label>Ismingiz</label>
                <input type="text" placeholder="Ismingiz" required />
              </div>
              <div className="form-group">
                <label>Raqamingiz</label>
                <input type="text" placeholder="Raqamingiz" required />
              </div>
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Email" required />
            </div>
            <div className="form-group">
              <label>Xabar</label>
              <textarea placeholder="Xabar qoldiring" required></textarea>
            </div>
            <button type="submit">
              📧 Xabarni yuborish
            </button>
          </form>


        </div>
      </div>



    </div>
  )
}

export default Contact