import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Fechar menu ao mudar de rota
    setIsMenuOpen(false);
    // Remover classe menu-open do body
    document.body.classList.remove('menu-open');
  }, [router.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.classList.remove('menu-open');
  };

  return (
    <>
      <header id="header" className={isScrolled ? 'scrolled' : ''}>
        <div className="container header-container">
          <Link href="/" className="logo">
            <div className="logo-image">
              <img
                src="/assets/img/logo-oficial.png"
                alt="Telas & Redes Paranavaí"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'block';
                }}
              />
            </div>
            <div className="logo-fallback">Telas & Redes Paranavaí</div>
          </Link>

          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li><Link href="/" onClick={closeMenu}>INÍCIO</Link></li>
            <li><Link href="/services" onClick={closeMenu}>SERVIÇOS</Link></li>
            <li><Link href="/products" onClick={closeMenu}>PRODUTOS</Link></li>
            <li><Link href="/about" onClick={closeMenu}>SOBRE</Link></li>
            <li><Link href="/contact" onClick={closeMenu}>CONTATO</Link></li>
          </ul>

          <button
            className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Abrir menu"
            aria-expanded={isMenuOpen}
          >
            <div className="hamburger-icon">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </header>
      
      <div 
        className={`menu-overlay ${isMenuOpen ? 'active' : ''}`} 
        onClick={closeMenu}
      ></div>
    </>
  );
};

export default Header;
