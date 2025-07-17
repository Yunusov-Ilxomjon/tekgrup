import React, { useState, useEffect } from 'react';
import '../i18n'; // 🔥 Muhim
import './navbar.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [activeLang, setActiveLang] = useState('UZ');
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const savedLang = localStorage.getItem('activeLang');
    const savedLink = localStorage.getItem('activeLink');

    if (savedLang) {
      setActiveLang(savedLang);
      i18n.changeLanguage(savedLang.toLowerCase());
    }
    if (savedLink) setActiveLink(savedLink);
  }, [i18n]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (linkKey) => {
    setActiveLink(linkKey);
    localStorage.setItem('activeLink', linkKey);
    setIsOpen(false);
  };

  const changeLanguage = (lang) => {
    setActiveLang(lang);
    i18n.changeLanguage(lang.toLowerCase());
    localStorage.setItem('activeLang', lang);
  };

  const navLinks = [
    { key: 'home', path: '/', label: t('navbar.home') },
    { key: 'news', path: '/news', label: t('navbar.news') },
    { key: 'products', path: '/products', label: t('navbar.products') },
    { key: 'about', path: '/about', label: t('navbar.about') },
    { key: 'contact', path: '/contact', label: t('navbar.contact') },
  ];

  return (
    <>
      <div className='nav-container'>
        <div className='nav-left'>
          <button className='hamburger' onClick={toggleMenu}>☰</button>
          <a href="/"><img className='nav-logo' src="/nav-logo.png" alt="Logo" /></a>
        </div>

        <div className="nav-links">
          <ul>
            {navLinks.map(link => (
              <li key={link.key}>
                <Link
                  to={link.path}
                  className={activeLink === link.key ? 'active' : ''}
                  onClick={() => handleLinkClick(link.key)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <select
            className='langs'
            value={activeLang}
            onChange={(e) => changeLanguage(e.target.value)}
          >
            <option value="UZ">UZ</option>
            <option value="RU">RU</option>
            <option value="EN">EN</option>
          </select>
        </div>
      </div>

      {isOpen && (
        <div className="mobile-menu">
          <ul>
            {navLinks.map(link => (
              <li key={link.key}>
                <Link
                  to={link.path}
                  className={activeLink === link.key ? 'active' : ''}
                  onClick={() => handleLinkClick(link.key)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mobile-langs">
            {['UZ', 'RU', 'EN'].map((lang) => (
              <button
                key={lang}
                onClick={() => changeLanguage(lang)}
                className={activeLang === lang ? 'active' : ''}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
