"use client";

import React, { useState } from 'react';
import styles from './Header.module.css';
import { Menu, X, Phone } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={`${styles.header} glass`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <img
              src="/logo.png"
              alt="Cabinet dentaire Dr Ferjani Amir"
              style={{ height: '44px', width: 'auto', display: 'block' }}
            />
          </Link>
        </div>
        
        <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ''}`}>
          <Link href="/services" onClick={() => setIsMenuOpen(false)}>Services</Link>
          <Link href="/about" onClick={() => setIsMenuOpen(false)}>À propos</Link>
          <Link href="/transformation" onClick={() => setIsMenuOpen(false)}>Transformation</Link>
          <Link href="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          <div className={styles.mobilePhone}>
            <a href="tel:+21626790175">
              <Phone size={18} />
              <span>+216 26 790 175</span>
            </a>
          </div>
        </nav>

        <div className={styles.cta}>
          <a href="tel:+21626790175" className={styles.phone}>
            <Phone size={18} />
            <span>+216 26 790 175</span>
          </a>
          <button className={styles.mobileMenuToggle} onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
