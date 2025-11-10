import React from 'react';
import Link from 'next/link';

const Services = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="container hero-content">
          <span className="hero-subtitle">Conheça Nossos Serviços</span>
          <h1 className="hero-title">Serviços em Telas e Redes de Proteção</h1>
          <p className="hero-description">
            Proteja sua casa com os melhores produtos. Telas mosquiteiros, redes
            de proteção e muito mais para sua segurança e conforto.
          </p>
          <div className="hero-buttons">
            <Link href="/products" className="btn-secondary">Ver Produtos</Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services section-padding" id="services">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Nossos Serviços</span>
            <h2 className="section-title">Soluções em Proteção</h2>
          </div>

          <div className="services-grid">
            {/* Card 1: Telas Mosquiteiras */}
            <div className="service-card">
              <div className="service-img">
                <div className="service-icon">
                  <i className="fas fa-mosquito"></i>
                </div>
                <div className="service-number">01</div>
              </div>
              <div className="service-content">
                <h3>Telas Mosquiteiros</h3>
                <p className="service-intro">
                  Proteção eficiente contra insetos sem comprometer a ventilação
                  natural. Nossas telas mosquiteiros são a solução ideal para
                  manter sua casa arejada e livre de mosquitos, moscas e outros
                  insetos indesejados.
                </p>

                <div className="service-specs">
                  <h4>Especificações Técnicas:</h4>
                  <div className="specs-grid">
                    <div className="spec-item">
                      <span className="spec-label">Material:</span>
                      <span className="spec-value">
                        Fibra de vidro de alta qualidade
                      </span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">Tratamento:</span>
                      <span className="spec-value">
                        Resistente à umidade e intempéries
                      </span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">Malha:</span>
                      <span className="spec-value">18x16 fios por polegada</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">Cores:</span>
                      <span className="spec-value">
                        Cinza / Grafite
                      </span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">Aplicações:</span>
                      <span className="spec-value">
                        Janelas, portas, varandas e sacadas
                      </span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">Instalação:</span>
                      <span className="spec-value">Profissional e personalizada</span>
                    </div>
                  </div>
                </div>

                <div className="service-benefits">
                  <h4>Benefícios:</h4>
                  <ul className="service-features">
                    <li>
                      <i className="fas fa-check-circle"></i> Proteção eficaz contra
                      insetos
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i> Permite ventilação
                      natural
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i> Mantém a visibilidade do
                      exterior
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i> Prevenção de doenças
                      (dengue, zika)
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i> Fácil manutenção e
                      limpeza
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i> Durabilidade e
                      resistência
                    </li>
                  </ul>
                </div>

                <Link href="/contact" className="service-link">
                  Solicitar Orçamento <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>

            {/* Card 2: Redes de Proteção */}
            <div className="service-card">
              <div className="service-img">
                <div className="service-icon">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <div className="service-number">02</div>
              </div>
              <div className="service-content">
                <h3>Redes de Proteção</h3>
                <p className="service-intro">
                  Nossa Rede oferece mais segurança e durabilidade, a melhor
                  escolha para suas instalações! Indicada para diversos tipos de
                  ambientes, oferece resistência, segurança e durabilidade.
                </p>

                <div className="service-specs">
                  <h4>Especificações Técnicas:</h4>
                  <div className="specs-grid">
                    <div className="spec-item">
                      <span className="spec-label">Material:</span>
                      <span className="spec-value">Fio 100% polietileno</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">Tratamento:</span>
                      <span className="spec-value">Anti-UV e antioxidante</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">Espessura:</span>
                      <span className="spec-value">Malha 3 e malha 5.</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">Resistência:</span>
                      <span className="spec-value">500kg/m²</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">Cores:</span>
                      <span className="spec-value">
                        Cinza / Grafite
                      </span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">Formato:</span>
                      <span className="spec-value">Losango</span>
                    </div>
                  </div>
                </div>

                <div className="service-benefits">
                  <h4>Benefícios:</h4>
                  <ul className="service-features">
                    <li>
                      <i className="fas fa-check-circle"></i> Protege contra quedas
                      (adultos, crianças, pets)
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i> Não conduz energia
                      elétrica
                    </li>
                    <li><i className="fas fa-check-circle"></i> Não enferruja</li>
                    <li>
                      <i className="fas fa-check-circle"></i> Resistente ao sol e
                      chuva
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i> Certificado Falcão Bauer
                      (сcc/228.995/11)
                    </li>
                  </ul>
                </div>

                <Link href="/contact" className="service-link">
                  Solicitar Orçamento <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
