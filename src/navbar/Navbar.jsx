import React, { useState, useEffect } from 'react';
import './navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLang, setActiveLang] = useState('UZ');
  const [activeLink, setActiveLink] = useState('Asosiy');

  useEffect(() => {
    const savedLang = localStorage.getItem('activeLang');
    const savedLink = localStorage.getItem('activeLink');
    if (savedLang) setActiveLang(savedLang);
    if (savedLink) setActiveLink(savedLink);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
    localStorage.setItem('activeLink', linkName);
    setIsOpen(false); // mobile menyuni yopish
  };

  const changeLanguage = (lang) => {
    setActiveLang(lang);
    localStorage.setItem('activeLang', lang);
  };

  return (
    <>
      <div className='nav-container'>
        <div className='nav-left'>
          <button className='hamburger' onClick={toggleMenu}>
            ☰
          </button>
          <a href="/">
            <img className='nav-logo' src="/nav-logo.png" alt="Logo" />
          </a>
        </div>

        <div className="nav-links">
          <ul>
            <li><a href="/" className={activeLink === 'Asosiy' ? 'active' : ''} onClick={() => handleLinkClick('Asosiy')}>Asosiy</a></li>
            <li><a href="/news" className={activeLink === 'Yangiliklar' ? 'active' : ''} onClick={() => handleLinkClick('Yangiliklar')}>Yangiliklar</a></li>
            <li><a href="/products" className={activeLink === 'Mahsulotlar' ? 'active' : ''} onClick={() => handleLinkClick('Mahsulotlar')}>Mahsulotlar</a></li>
            <li><a href="/about" className={activeLink === 'Biz haqimizda' ? 'active' : ''} onClick={() => handleLinkClick('Biz haqimizda')}>Biz haqimizda</a></li>
            <li><a href="/contact" className={activeLink === "Bog'lanish" ? 'active' : ''} onClick={() => handleLinkClick("Bog'lanish")}>Bog'lanish</a></li>
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
            <li><a href="/" className={activeLink === 'Asosiy' ? 'active' : ''} onClick={() => handleLinkClick('Asosiy')}>Asosiy</a></li>
            <li><a href="/news" className={activeLink === 'Yangiliklar' ? 'active' : ''} onClick={() => handleLinkClick('Yangiliklar')}>Yangiliklar</a></li>
            <li><a href="/products" className={activeLink === 'Mahsulotlar' ? 'active' : ''} onClick={() => handleLinkClick('Mahsulotlar')}>Mahsulotlar</a></li>
            <li><a href="/about" className={activeLink === 'Biz haqimizda' ? 'active' : ''} onClick={() => handleLinkClick('Biz haqimizda')}>Biz haqimizda</a></li>
            <li><a href="/contact" className={activeLink === "Bog'lanish" ? 'active' : ''} onClick={() => handleLinkClick("Bog'lanish")}>Bog'lanish</a></li>
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
