import React from 'react'
import YandexMap from './YandexMap';
import './footer.css'

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className="footer-top">
                <div className="footer-left">
                    <a href="./"><img className='footer-logo' src="/nav-logo.png" alt="" /></a>
                    <h1 className='footer-title'>Tek Grup Health Services </h1>
                </div>

                <div className="footer-center">
                    <h1>Bizga bog'laning</h1>
                    <ul>
                        <li><a href="">Toshkent sh. Bektemir tumani</a></li>
                        <li><a href="">Oltintopgan ko’chasi 40-uy</a></li>
                        <li><a href="info.uz@tekgrup.net">info.uz@tekgrup.net</a></li>
                        <li><a href="tel: +998 55 515 04 15">+998 55 515 04 15</a></li>
                    </ul>
                </div>

                <div className="footer-right">
                   <YandexMap />
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2025 Tek Grup Health Services. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer