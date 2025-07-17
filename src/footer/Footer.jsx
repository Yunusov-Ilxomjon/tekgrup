import React from 'react';
import '../i18n'; // Muhim
import { useTranslation } from 'react-i18next';
import YandexMap from './YandexMap';
import './footer.css';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <div className='footer-container'>
            <div className="footer-top">
                <div className="footer-left">
                    <a href="/"><img className='footer-logo' src="/nav-logo.png" alt="Logo" /></a>
                    <h1 className='footer-title'>Tek Grup Health Services</h1>
                </div>

                <div className="footer-center">
                    <h1>{t('footer.contactUs')}</h1>
                    <ul>
                        <li><a href="#">{t('footer.addressLine1')}</a></li>
                        <li><a href="#">{t('footer.addressLine2')}</a></li>
                        <li><a href="mailto:info.uz@tekgrup.net">{t('footer.email')}</a></li>
                        <li><a href="tel:+998555150415">{t('footer.phone')}</a></li>
                    </ul>
                </div>

                <div className="footer-right">
                    <YandexMap />
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2025 Tek Grup Health Services. {t('footer.rightsReserved')}</p>
            </div>
        </div>
    );
};

export default Footer;
