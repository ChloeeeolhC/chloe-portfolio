import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
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
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ai-business-analysis">AI & Business Analysis</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/product-ux">Product & UX</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ai-lab">AI Lab</Link>
            </li>
            <li className="nav-item ms-3">
              <Link className="nav-link contact-btn" to="/contact">Contact Me</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;