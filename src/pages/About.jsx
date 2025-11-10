import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

const About = () => {
  const countersRef = useRef([]);

  useEffect(() => {
    // Animação dos contadores
    const animateCounters = () => {
      countersRef.current.forEach(counter => {
        if (!counter) return;
        
        const target = parseInt(counter.getAttribute('data-target'));
        const increment = target / 200;
        let current = 0;

        const updateCounter = () => {
          if (current < target) {
            current += increment;
            counter.textContent = Math.ceil(current);
            setTimeout(updateCounter, 10);
          } else {
            counter.textContent = target;
          }
        };

        updateCounter();
      });
    };

    // Observer para animar quando a seção aparecer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounters();
          observer.unobserve(entry.target);
        }
      });
    });

    const aboutSection = document.querySelector('.about');
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => {
      if (aboutSection) {
        observer.unobserve(aboutSection);
      }
    };
  }, []);

  return (
    <>
      {/* About Section */}
      <section className="about section-padding" id="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <span className="section-subtitle">Sobre Nós</span>
              <h2 className="section-title">Telas & Redes Paranavaí</h2>
              <p>
                Desde de 2019 no mercado.
              </p>
              <p>
                Telas & Redes Paranavaí se consolidou como referência em soluções de proteção para
                residências e empresas na região de Paranavaí e Maringá.
              </p>
              <p>
                Nossa missão é proporcionar segurança, conforto e bem-estar
                através de produtos de alta qualidade, instalados por
                profissionais especializados e com total comprometimento.
              </p>

              <div className="about-stats">
                <div className="stat-item">
                  <div className="stat-number">
                    +<span 
                      className="counter" 
                      data-target="3000"
                      ref={el => countersRef.current[0] = el}
                    >
                      0
                    </span>
                  </div>
                  <div className="stat-text">Clientes Satisfeitos</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">
                    +<span 
                      className="counter" 
                      data-target="10"
                      ref={el => countersRef.current[1] = el}
                    >
                      0
                    </span>
                  </div>
                  <div className="stat-text">Anos de Experiência</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">
                    <span 
                      className="counter" 
                      data-target="10"
                      ref={el => countersRef.current[2] = el}
                    >
                      0
                    </span>
                  </div>
                  <div className="stat-text">Cidades Atendidas</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">100%</div>
                  <div className="stat-text">Qualidade Garantida</div>
                </div>
              </div>
            </div>

            <div className="about-image">
              <img src="/assets/img/sobre.png" alt="Equipe Telas & Redes Paranavaí" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta section-padding">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Pronto para Proteger sua Casa?</h2>
            <p className="cta-text">
              Entre em contato conosco e solicite um orçamento sem compromisso.
              Nossos especialistas estão prontos para ajudar você a encontrar a
              melhor solução em proteção e conforto.
            </p>
            <Link href="/contact" className="btn-primary">
              Solicitar Orçamento
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
