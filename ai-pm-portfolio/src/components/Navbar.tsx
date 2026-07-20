import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useLang } from '../contexts/LanguageContext';

const Navbar = () => {
  const { lang, toggle, t } = useLang();

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand" to="/">Chloe Tao 陶汝欣</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" end>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/english-writing">English Writing</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/growth-seo">AI Growth</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/business-analysis">{t('商业分析', 'Analysis')}</NavLink>
            </li>
            <li className="nav-item ms-2">
              <button className="lang-toggle" onClick={toggle} aria-label="Switch language">
                {lang === 'cn' ? 'EN' : '中文'}
              </button>
            </li>
            <li className="nav-item ms-2">
              <NavLink className="nav-link contact-btn" to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
