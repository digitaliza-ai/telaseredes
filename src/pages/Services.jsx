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

      {/* Additional Services Section */}
      <section className="additional-services section-padding" id="additional-services">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Serviços Adicionais</span>
            <h2 className="section-title">Cuidamos da sua Proteção</h2>
          </div>

          <div className="additional-services-grid">
            {/* Manutenção */}
            <div className="additional-service-card">
              <div className="additional-service-icon">
                <i className="fas fa-tools"></i>
              </div>
              <h3>Manutenção</h3>
              <p>Manutenção preventiva e corretiva de telas e redes de proteção. Garantimos o funcionamento perfeito e a durabilidade dos seus produtos.</p>
              <Link href="/contact" className="btn-service">
                Solicitar Manutenção
              </Link>
            </div>

            {/* Higienização */}
            <div className="additional-service-card">
              <div className="additional-service-icon">
                <i className="fas fa-spray-can"></i>
              </div>
              <h3>Higienização</h3>
              <p>Limpeza profissional de telas e redes com produtos específicos. Eliminamos sujeira, poeira e resíduos acumulados ao longo do tempo.</p>
              <Link href="/contact" className="btn-service">
                Solicitar Higienização
              </Link>
            </div>

            {/* Venda de Redes */}
            <div className="additional-service-card">
              <div className="additional-service-icon">
                <i className="fas fa-shopping-cart"></i>
              </div>
              <h3>Venda de Redes</h3>
              <p>Redes de proteção disponíveis para venda separada, com ou sem instalação. Produtos de alta qualidade para você instalar ou contratar nosso serviço.</p>
              <div className="service-options">
                <span className="option-badge">Com Instalação</span>
                <span className="option-badge">Sem Instalação</span>
              </div>
              <Link href="/contact" className="btn-service">
                Consultar Disponibilidade
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Troca de Tramelinhas Section */}
      <section className="tramelinha-service section-padding" id="tramelinha">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Serviço Especializado</span>
            <h2 className="section-title">Troca de Tramelinhas</h2>
          </div>

          <div className="tramelinha-content">
            <div className="tramelinha-image">
              <img 
                src="/assets/img/tramelinha.jpeg" 
                alt="Tramelinhas" 
                loading="lazy"
              />
            </div>
            <div className="tramelinha-card">
              <div className="service-badge">Serviço</div>
              <h3>Troca de Tramelinhas</h3>
              <p>Substituição profissional de tramelinhas desgastadas ou danificadas. Utilizamos peças de alta qualidade para garantir a durabilidade e o perfeito funcionamento das suas telas.</p>
              <ul className="tramelinha-features">
                <li><i className="fas fa-check"></i> Tramelinhas originais</li>
                <li><i className="fas fa-check"></i> Instalação rápida</li>
                <li><i className="fas fa-check"></i> Garantia de qualidade</li>
                <li><i className="fas fa-check"></i> Atendimento em domicílio</li>
              </ul>
              <Link href="/contact" className="btn-primary">
                Agendar Troca
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
