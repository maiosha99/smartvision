import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from "../clients/logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="YourCompany Logo" />
        </div>

        <nav className="navbar-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#clients">Clients</a>
          <a href="#solutions">Solutions</a>
          <a href="#events">Events</a>
        </nav>

        {/* زر الاتصال منفصل على اليمين */}
        <a href="#contact" className="btn-primary">
          Contact <span className="arrow">→</span>
        </a>
      </div>
    </header>
  );
}
