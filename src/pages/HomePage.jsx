import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BackToTop from "../components/BackToTop";

const HomePage = () => {
  const navigate = useNavigate();
  const [currentPath, setCurrentPath] = useState('/');
  const [logoAmpliado, setLogoAmpliado] = useState(false);

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const services = [
    { icon: '👗', title: 'Guarda-roupas', desc: 'Organização completa com técnicas Marie Kondo' },
    { icon: '🍳', title: 'Cozinhas', desc: 'Despensa funcional e organização total' },
    { icon: '💻', title: 'Escritórios', desc: 'Home office produtivo e organizado' },
    { icon: '🛋️', title: 'Salas', desc: 'Ambientes integrados e aconchegantes' },
    { icon: '🧸', title: 'Quartos Kids', desc: 'Espaço lúdico e funcional para crianças' },
    { icon: '📦', title: 'Despensas', desc: 'Organização completa de alimentos' }
  ];

  const testimonials = [
    { 
      name: 'Cliente', 
      text: 'Muito boa. Pontual. Discreta. Muito educada. Recomendo!',
      icon: '👤'
    },
    { 
      name: 'Rodrigo Medeiros', 
      text: 'Profissional muito organizada e detalhista, trabalha com perfeição. Recomendo com certeza.',
      icon: '👨'
    },
    { 
      name: 'Manuella Rosal', 
      text: 'Adriana é impecável. Muito atenta, sabe escutar e consequentemente entender sua necessidade. Tudo ficou muito organizado e fácil de encontrar e reorganizar. Ela leva equipamentos bem interessantes e válidos, como máquina para etiquetar, banco retrátil... Além disso, ela me deu dicas valiosas para outros cômodos não contratados, cheirinhos e como evitar mofo... Pode contratar de olhos fechados.',
      icon: '👩'
    },
    { 
      name: 'Karolina', 
      text: 'Uma ótima profissional, trabalha com excelência fez todo o serviço organizer da minha casa e é muito atenciosa a todos os detalhes. Super recomendo.',
      icon: '👩'
    },
    { 
      name: 'Heleonora Nunes', 
      text: 'Adriana é uma profissional honesta, competente, criativa, inteligente, responsável, discreta, comprometida com o trabalho. Eu recomendo sim Adriana. Estou muito satisfeita com a Personal organizer.',
      icon: '👩'
    }
  ];

  return (
    <div style={{ padding: "0", maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
      {/* HEADER FIXO */}
      <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        background: "white",
        padding: "10px 20px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        zIndex: 999,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img 
            src="/images/logo.png" 
            alt="Drica & Léo" 
            style={{ width: "40px", height: "40px", borderRadius: "50%", objectFit: "cover", cursor: "pointer" }}
            onClick={() => setLogoAmpliado(true)}
          />
          <div>
            <h2 style={{ margin: 0, fontSize: "1.1rem", color: "#4361ee" }}>Drica & Léo</h2>
            <p style={{ margin: 0, fontSize: "0.7rem", color: "#f72585" }}>Personal Organizer</p>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "15px", flexWrap: "wrap" }}>
          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            <a href="/" style={{ textDecoration: "none", color: currentPath === '/' ? '#4361ee' : '#2d2d44', fontWeight: currentPath === '/' ? '600' : '500', fontSize: "0.9rem" }}>Início</a>
            <a href="/servicos" style={{ textDecoration: "none", color: currentPath === '/servicos' ? '#4361ee' : '#2d2d44', fontWeight: currentPath === '/servicos' ? '600' : '500', fontSize: "0.9rem" }}>Serviços</a>
            <a href="/sobre" style={{ textDecoration: "none", color: currentPath === '/sobre' ? '#4361ee' : '#2d2d44', fontWeight: currentPath === '/sobre' ? '600' : '500', fontSize: "0.9rem" }}>Sobre</a>
            <a href="/galeria" style={{ textDecoration: "none", color: currentPath === '/galeria' ? '#4361ee' : '#2d2d44', fontWeight: currentPath === '/galeria' ? '600' : '500', fontSize: "0.9rem" }}>Galeria</a>
            <a href="/contato" style={{ textDecoration: "none", color: currentPath === '/contato' ? '#4361ee' : '#2d2d44', fontWeight: currentPath === '/contato' ? '600' : '500', fontSize: "0.9rem" }}>Contato</a>
          </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "4px" }}>
            <div style={{ display: "flex", gap: "8px" }}>
              <a href="https://wa.me/5581994732981" target="_blank" rel="noopener noreferrer" style={{
                background: "#25d366",
                color: "white",
                padding: "6px 12px",
                borderRadius: "40px",
                textDecoration: "none",
                fontWeight: "600",
                fontSize: "0.8rem",
                display: "flex",
                alignItems: "center",
                gap: "4px"
              }}>
                <i className="fab fa-whatsapp"></i> WhatsApp
              </a>
              <a href="https://instagram.com/adrianamoura.organizer" target="_blank" rel="noopener noreferrer" style={{
                background: "linear-gradient(45deg, #f09433, #d62976, #962fbf, #4f5bd5)",
                color: "white",
                padding: "6px 12px",
                borderRadius: "40px",
                textDecoration: "none",
                fontWeight: "600",
                fontSize: "0.8rem",
                display: "flex",
                alignItems: "center",
                gap: "4px"
              }}>
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </div>
            <div style={{
              background: "linear-gradient(135deg, #4361ee, #f72585)",
              color: "white",
              padding: "3px 10px",
              borderRadius: "40px",
              fontSize: "0.65rem",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              gap: "4px",
              whiteSpace: "nowrap",
              border: "2px solid white",
              boxShadow: "0 2px 6px rgba(0,0,0,0.2)"
            }}>
              <span style={{ fontSize: "0.8rem" }}>🏆</span> Profissional Certificado
            </div>
          </div>
        </div>
      </div>

      {/* MODAL DO LOGO */}
      {logoAmpliado && (
        <div style={{
          position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
          background: "rgba(0,0,0,0.9)", display: "flex", alignItems: "center",
          justifyContent: "center", zIndex: 2000, cursor: "pointer"
        }} onClick={() => setLogoAmpliado(false)}>
          <div style={{ position: "relative", maxWidth: "90%", maxHeight: "90%" }} onClick={e => e.stopPropagation()}>
            <button onClick={() => setLogoAmpliado(false)} style={{
              position: "absolute", top: "-40px", right: "0", fontSize: "2rem",
              background: "none", border: "none", color: "white", cursor: "pointer"
            }}>✕</button>
            <img src="/images/logo.png" alt="Logo Ampliado" style={{ maxWidth: "100%", maxHeight: "80vh", objectFit: "contain" }} />
          </div>
        </div>
      )}

      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #ffffff; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; padding-top: 80px; }
        .hero-section { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin: 20px 20px 80px 20px; align-items: center; }
        .hero-content h1 { font-size: 3rem; color: #4361ee; margin-bottom: 10px; }
        .hero-content .subtitle { font-size: 1.3rem; color: #f72585; margin-bottom: 20px; }
        .hero-content p { font-size: 1.1rem; color: #2d2d44; line-height: 1.8; margin-bottom: 30px; }
        .hero-buttons { display: flex; gap: 15px; }
        .btn-primary { padding: 12px 30px; background: #4361ee; color: white; border: none; border-radius: 50px; font-size: 1rem; font-weight: 600; cursor: pointer; }
        .btn-secondary { padding: 12px 30px; background: transparent; color: #4361ee; border: 2px solid #4361ee; border-radius: 50px; font-size: 1rem; font-weight: 600; cursor: pointer; }
        .hero-image { width: 100%; height: 400px; border-radius: 20px; overflow: hidden; }
        .hero-image img { width: 100%; height: 100%; object-fit: cover; }
        .section-title { font-size: 2.5rem; color: #4361ee; text-align: center; margin: 0 20px 40px 20px; }
        .about-section { margin: 0 20px 80px 20px; }
        .about-content { background: #f8f9fa; padding: 40px; border-radius: 20px; }
        .services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 25px; margin: 0 20px 40px 20px; }
        .service-card { background: white; padding: 30px; border-radius: 15px; text-align: center; box-shadow: 0 4px 6px rgba(0,0,0,0.1); cursor: pointer; transition: transform 0.2s; }
        .service-card:hover { transform: translateY(-5px); }
        .service-icon { font-size: 3rem; margin-bottom: 15px; }
        .service-card h3 { font-size: 1.3rem; color: #4361ee; margin-bottom: 10px; }
        .service-card p { color: #2d2d44; font-size: 0.95rem; line-height: 1.6; }
        .testimonials-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 25px; margin: 0 20px 80px 20px; }
        .testimonial-card { background: white; padding: 30px; border-radius: 15px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        .testimonial-header { display: flex; align-items: center; gap: 15px; margin-bottom: 15px; }
        .testimonial-avatar { width: 50px; height: 50px; border-radius: 50%; background: #f72585; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.5rem; }
        .testimonial-name { font-size: 1.1rem; color: #4361ee; }
        .testimonial-text { color: #2d2d44; line-height: 1.8; margin-bottom: 15px; font-style: italic; }
        .testimonial-stars { color: #ffc107; font-size: 1.2rem; }
        .cta-section { text-align: center; background: linear-gradient(135deg, #4361ee, #f72585); color: white; padding: 60px; border-radius: 20px; margin: 0 20px 40px 20px; }
        .cta-section h2 { font-size: 2.5rem; margin-bottom: 20px; color: white; }
        .cta-section p { font-size: 1.2rem; margin-bottom: 30px; opacity: 0.9; }
        .btn-white { padding: 12px 30px; background: white; color: #4361ee; border: none; border-radius: 50px; font-size: 1rem; font-weight: 600; cursor: pointer; }
        @media (max-width: 768px) {
          body { padding-top: 200px; }
          .hero-section { grid-template-columns: 1fr; margin: 0 15px 60px 15px; }
          h1 { font-size: 2.5rem; }
          .hero-buttons { flex-direction: column; align-items: center; }
          .btn-primary, .btn-secondary { width: 100%; max-width: 280px; }
          .hero-image { height: 250px; margin-top: 20px; }
          .services-grid, .testimonials-grid { grid-template-columns: 1fr; margin: 0 15px 30px 15px; }
          .cta-section { padding: 40px 20px; }
          .cta-section h2 { font-size: 2rem; }
        }
        @media (max-width: 480px) {
          body { padding-top: 220px; }
          h1 { font-size: 2rem; }
          .section-title { font-size: 2rem; }
        }
      `}</style>

      <section className="hero-section">
        <div className="hero-content">
          <h1>Drica & Léo</h1>
          <p className="subtitle">Personal Organizer</p>
          <p>Transformamos casas em lares organizados, onde cada objeto tem seu lugar e cada espaço conta uma história. Com mais de 10 anos de experiência, levamos profissionalismo, dedicação e excelência para cada projeto.</p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => navigate('/contato')}>Fale Conosco</button>
            <button className="btn-secondary" onClick={() => navigate('/servicos')}>Conheça nossos serviços</button>
          </div>
        </div>
        <div className="hero-image">
          <img src="/images/Organização com colmeias.jpeg" alt="Organização profissional" />
        </div>
      </section>

      <section className="about-section">
        <h2 className="section-title">Sobre Nós</h2>
        <div className="about-content">
          <p>Somos Adriana (Drica) e Leonita (Léo), duas irmãs pernambucanas com uma paixão em comum: transformar vidas através da organização. Nossa jornada começou há mais de uma década, quando percebemos que um ambiente organizado traz não apenas beleza estética, mas também paz de espírito, economia de tempo e qualidade de vida.</p>
          <p>Com formação em Design de Interiores e especialização em Organização Profissional, desenvolvemos uma metodologia única que combina técnicas avançadas com um toque pessoal e acolhedor. Cada projeto é tratado com a dedicação que merece, respeitando a individualidade de cada cliente e suas necessidades específicas.</p>
        </div>
      </section>

      <section>
        <h2 className="section-title">Nossos Serviços</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card" onClick={() => navigate('/servicos')}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <button className="btn-primary" onClick={() => navigate('/servicos')}>Ver todos os serviços</button>
        </div>
      </section>

      <section>
        <h2 className="section-title">O que nossos clientes dizem</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar">{testimonial.icon}</div>
                <h4 className="testimonial-name">{testimonial.name}</h4>
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-stars">{'★'.repeat(5)}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <h2>Pronto para transformar seu espaço?</h2>
        <p>Entre em contato e agende uma visita. Vamos juntos criar o lar dos seus sonhos!</p>
        <button className="btn-white" onClick={() => navigate('/contato')}>Falar no WhatsApp</button>
      </section>

      <BackToTop />
    </div>
  );
};

export default HomePage;
