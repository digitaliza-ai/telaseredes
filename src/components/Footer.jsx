import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <div className="footer-logo">
              <Link href="/" className="logo">
                <div className="logo-image-footer">
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
              <p>Sua proteção é nossa prioridade</p>
            </div>
            <p>
              Oferecemos as melhores soluções em telas e proteções para sua
              casa, com qualidade superior e instalação profissional.
            </p>
            <div className="footer-social">
              <a
                href="https://www.instagram.com/telaseredesparanavai/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://wa.me/5544999094232?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20or%C3%A7amento"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h3 className="footer-heading">Links Rápidos</h3>
            <ul>
              <li><Link href="/">Início</Link></li>
              <li><Link href="/services">Serviços</Link></li>
              <li><Link href="/products">Produtos</Link></li>
              <li><Link href="/about">Sobre</Link></li>
              <li><Link href="/contact">Contato</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h3 className="footer-heading">Nossos Serviços</h3>
            <ul>
              <li><Link href="/services">Telas Mosquiteiras</Link></li>
              <li><Link href="/services">Redes de Proteção</Link></li>
              <li><Link href="/products">Nossos Produtos</Link></li>
              <li><Link href="/contact">Orçamento Gratuito</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3 className="footer-heading">Entre em Contato</h3>
            <p><i className="fas fa-phone"></i> (44) 99909-4232</p>
            <p><i className="fas fa-envelope"></i> telaseredes.paranavai@gmail.com</p>
            <p><i className="fas fa-map-marker-alt"></i> Paranavaí - PR</p>
            <p>
              <i className="fas fa-clock"></i> Seg a Sex: 8h às 18h | Sáb: 8h às 12h
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Telas & Redes Paranavaí - Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
