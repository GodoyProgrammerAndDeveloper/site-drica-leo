import React, { useState, useEffect } from "react";
import BackToTop from "../components/BackToTop";

const ContactPage = () => {
  const [currentPath, setCurrentPath] = useState('/contato');

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  return (
    <div style={{ 
      padding: "0", 
      maxWidth: "1200px", 
      margin: "0 auto", 
      position: "relative",
      width: "100%",
      overflowX: "hidden"
    }}>
      {/* HEADER FIXO - VERSÃO SUPER COMPACTA */}
      <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        background: "white",
        padding: "8px 15px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        zIndex: 999,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap"
      }}>
        {/* LOGO MINI */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <img 
            src="/images/logo.png" 
            alt="Drica & Léo" 
            style={{ width: "35px", height: "35px", borderRadius: "50%", objectFit: "cover" }}
          />
          <div>
            <h2 style={{ margin: 0, fontSize: "1rem", color: "#4361ee" }}>Drica & Léo</h2>
            <p style={{ margin: 0, fontSize: "0.65rem", color: "#f72585" }}>Personal Organizer</p>
          </div>
        </div>

        {/* MENU E BOTÕES - COMPACTADOS */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
          {/* MENU */}
          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <a href="/" style={{ textDecoration: "none", color: currentPath === '/' ? '#4361ee' : '#2d2d44', fontWeight: currentPath === '/' ? '600' : '500', fontSize: "0.8rem" }}>Início</a>
            <a href="/servicos" style={{ textDecoration: "none", color: currentPath === '/servicos' ? '#4361ee' : '#2d2d44', fontWeight: currentPath === '/servicos' ? '600' : '500', fontSize: "0.8rem" }}>Serviços</a>
            <a href="/sobre" style={{ textDecoration: "none", color: currentPath === '/sobre' ? '#4361ee' : '#2d2d44', fontWeight: currentPath === '/sobre' ? '600' : '500', fontSize: "0.8rem" }}>Sobre</a>
            <a href="/galeria" style={{ textDecoration: "none", color: currentPath === '/galeria' ? '#4361ee' : '#2d2d44', fontWeight: currentPath === '/galeria' ? '600' : '500', fontSize: "0.8rem" }}>Galeria</a>
            <a href="/contato" style={{ textDecoration: "none", color: currentPath === '/contato' ? '#4361ee' : '#2d2d44', fontWeight: currentPath === '/contato' ? '600' : '500', fontSize: "0.8rem" }}>Contato</a>
          </div>

          {/* BOTÕES SOCIAIS + SELO */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "3px" }}>
            <div style={{ display: "flex", gap: "5px" }}>
              <a href="https://wa.me/5581994732981" target="_blank" rel="noopener noreferrer" style={{
                background: "#25d366",
                color: "white",
                padding: "4px 8px",
                borderRadius: "30px",
                textDecoration: "none",
                fontWeight: "600",
                fontSize: "0.7rem",
                display: "flex",
                alignItems: "center",
                gap: "3px"
              }}>
                <i className="fab fa-whatsapp"></i> WhatsApp
              </a>
              <a href="https://instagram.com/adrianamoura.organizer" target="_blank" rel="noopener noreferrer" style={{
                background: "linear-gradient(45deg, #f09433, #d62976, #962fbf, #4f5bd5)",
                color: "white",
                padding: "4px 8px",
                borderRadius: "30px",
                textDecoration: "none",
                fontWeight: "600",
                fontSize: "0.7rem",
                display: "flex",
                alignItems: "center",
                gap: "3px"
              }}>
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </div>
            <div style={{
              background: "linear-gradient(135deg, #4361ee, #f72585)",
              color: "white",
              padding: "2px 8px",
              borderRadius: "30px",
              fontSize: "0.6rem",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              gap: "3px",
              whiteSpace: "nowrap",
              border: "1px solid white"
            }}>
              <span style={{ fontSize: "0.7rem" }}>🏆</span> Profissional Certificado
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* RESET FORÇADO */
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        
        body {
          background: #fef6f9;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          margin: 0;
          padding: 0;
          width: 100%;
          overflow-x: hidden;
        }
        
        .contact-wrapper {
          padding-top: 75px;
          width: 100%;
          max-width: 100%;
          overflow-x: hidden;
        }
        
        h1 {
          font-size: 2.5rem;
          color: #4361ee;
          text-align: center;
          margin: 10px 0 5px 0;
          word-break: break-word;
        }
        
        .divider {
          width: 70px;
          height: 4px;
          background: linear-gradient(135deg, #4361ee, #f72585);
          margin: 0 auto 25px;
          border-radius: 2px;
        }
        
        .sub {
          font-size: 1.1rem;
          color: #2d2d44;
          text-align: center;
          margin: 0 15px 30px 15px;
          word-break: break-word;
        }
        
        .contact-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin: 0 15px 30px 15px;
        }
        
        .contact-card {
          background: white;
          border-radius: 15px;
          padding: 20px;
          box-shadow: 0 5px 15px rgba(67, 97, 238, 0.1);
          border: 1px solid #e9ecef;
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          width: 100%;
        }
        
        .contact-icon {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          color: white;
          flex-shrink: 0;
        }
        
        .contact-card h3 {
          font-size: 1.1rem;
          margin-bottom: 3px;
          word-break: break-word;
        }
        
        .contact-card p {
          font-size: 0.9rem;
          margin-bottom: 3px;
          color: #2d2d44;
          word-break: break-word;
        }
        
        .hours-card {
          background: linear-gradient(135deg, #f8f9fa, white);
          border-radius: 15px;
          padding: 25px;
          margin: 0 15px 30px 15px;
          border: 1px solid #e9ecef;
          text-align: center;
        }
        
        .hours-card h3 {
          font-size: 1.5rem;
          color: #4361ee;
          margin-bottom: 10px;
          word-break: break-word;
        }
        
        .hours-text {
          font-size: 1rem;
          color: #2d2d44;
          font-weight: 500;
          word-break: break-word;
        }
        
        .form-container {
          background: white;
          border-radius: 15px;
          padding: 25px;
          margin: 0 15px 30px 15px;
          box-shadow: 0 5px 15px rgba(67, 97, 238, 0.1);
          border: 1px solid #e9ecef;
        }
        
        .form-container h3 {
          font-size: 1.5rem;
          color: #4361ee;
          text-align: center;
          margin-bottom: 20px;
          word-break: break-word;
        }
        
        form {
          display: grid;
          gap: 12px;
          max-width: 500px;
          margin: 0 auto;
          width: 100%;
        }
        
        input, textarea {
          padding: 10px;
          border-radius: 8px;
          border: 1px solid #e9ecef;
          font-size: 0.9rem;
          width: 100%;
        }
        
        button[type="submit"] {
          padding: 10px;
          background: linear-gradient(135deg, #4361ee, #f72585);
          color: white;
          border: none;
          border-radius: 30px;
          font-size: 0.95rem;
          font-weight: bold;
          cursor: pointer;
          width: 100%;
        }
        
        .footer-note {
          text-align: center;
          padding: 15px;
          background: white;
          border-radius: 12px;
          margin: 0 15px 30px 15px;
          border: 1px solid #e9ecef;
        }

        /* ===== CELULAR - VERSÃO UNIVERSAL ===== */
        @media (max-width: 768px) {
          .contact-wrapper {
            padding-top: 85px;
          }

          h1 {
            font-size: clamp(1.8rem, 6vw, 2.2rem) !important;
            margin: 5px 10px 5px 10px !important;
            line-height: 1.2 !important;
          }

          .divider {
            width: 60px !important;
            margin: 0 auto 20px auto !important;
          }

          .sub {
            font-size: clamp(0.9rem, 3.5vw, 1rem) !important;
            margin: 0 10px 20px 10px !important;
          }

          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
            margin: 0 12px 25px 12px !important;
          }

          .contact-card {
            padding: 15px !important;
            gap: 10px !important;
          }

          .contact-icon {
            width: 45px !important;
            height: 45px !important;
            font-size: 1.8rem !important;
          }

          .contact-card h3 {
            font-size: clamp(0.95rem, 3vw, 1rem) !important;
          }

          .contact-card p {
            font-size: clamp(0.8rem, 2.5vw, 0.85rem) !important;
          }

          .contact-card p:last-child {
            font-size: clamp(0.7rem, 2.3vw, 0.8rem) !important;
          }

          .hours-card {
            padding: 20px 12px !important;
            margin: 0 12px 25px 12px !important;
          }

          .hours-card h3 {
            font-size: clamp(1.2rem, 5vw, 1.4rem) !important;
          }

          .hours-text {
            font-size: clamp(0.9rem, 3vw, 1rem) !important;
          }

          .form-container {
            padding: 20px 12px !important;
            margin: 0 12px 25px 12px !important;
          }

          .form-container h3 {
            font-size: clamp(1.2rem, 5vw, 1.4rem) !important;
          }

          .footer-note {
            margin: 0 12px 25px 12px !important;
            padding: 12px !important;
          }

          .footer-note p {
            font-size: clamp(0.9rem, 3vw, 1rem) !important;
          }

          .footer-note div {
            flex-direction: column !important;
            gap: 8px !important;
          }

          .footer-note a {
            width: 100% !important;
            max-width: 250px !important;
            padding: 8px 15px !important;
            font-size: clamp(0.8rem, 2.8vw, 0.85rem) !important;
          }

          /* GARANTIA QUE O TÍTULO NÃO É COBERTO */
          div[style*="position: fixed; top: 0; left: 0; width: 100%;"] {
            padding: 6px 10px !important;
          }

          .logo-img, div[style*="width: 50px; height: 50px;"] {
            width: 30px !important;
            height: 30px !important;
          }

          h2[style*="font-size: 1.3rem;"] {
            font-size: clamp(0.85rem, 2.8vw, 0.9rem) !important;
          }

          p[style*="font-size: 0.8rem;"] {
            font-size: clamp(0.6rem, 2vw, 0.65rem) !important;
          }

          a[style*="font-size: 0.8rem;"] {
            font-size: clamp(0.65rem, 2.2vw, 0.7rem) !important;
          }

          a[style*="padding: 4px 8px;"] {
            padding: 3px 6px !important;
            font-size: clamp(0.6rem, 2vw, 0.65rem) !important;
          }

          div[style*="padding: 2px 8px;"] {
            padding: 2px 6px !important;
            font-size: clamp(0.55rem, 1.8vw, 0.6rem) !important;
          }
        }

        /* CELULAR MÉDIO */
        @media (min-width: 769px) and (max-width: 1024px) {
          .contact-wrapper {
            padding-top: 80px;
          }
        }

        /* CELULAR PEQUENO */
        @media (max-width: 480px) {
          .contact-wrapper {
            padding-top: 90px;
          }

          h1 {
            font-size: clamp(1.5rem, 5vw, 1.8rem) !important;
          }

          .contact-icon {
            width: 40px !important;
            height: 40px !important;
            font-size: 1.5rem !important;
          }

          .contact-card h3 {
            font-size: clamp(0.85rem, 2.8vw, 0.9rem) !important;
          }

          .contact-card p {
            font-size: clamp(0.75rem, 2.5vw, 0.8rem) !important;
          }

          .hours-card h3 {
            font-size: clamp(1rem, 4vw, 1.2rem) !important;
          }

          .form-container h3 {
            font-size: clamp(1rem, 4vw, 1.2rem) !important;
          }
        }
      `}</style>

      <div className="contact-wrapper">
        <h1>Entre em Contato</h1>
        <div className="divider"></div>
        <p className="sub">Estamos prontas para atender você</p>

        {/* CARDS DE CONTATO */}
        <div className="contact-grid">
          {/* WHATSAPP */}
          <div className="contact-card" onClick={() => window.open('https://wa.me/5581994732981', '_blank')}>
            <div className="contact-icon" style={{ background: "#25d366" }}>📱</div>
            <div>
              <h3 style={{ color: "#25d366" }}>WhatsApp</h3>
              <p>(81) 99473-2981</p>
              <p style={{ fontSize: "0.8rem", color: "#666" }}>Clique para conversar</p>
            </div>
          </div>

          {/* INSTAGRAM */}
          <div className="contact-card" onClick={() => window.open('https://instagram.com/adrianamoura.organizer', '_blank')}>
            <div className="contact-icon" style={{ background: "linear-gradient(45deg, #f09433, #d62976, #962fbf, #4f5bd5)" }}>📷</div>
            <div>
              <h3 style={{ color: "#d62976" }}>Instagram</h3>
              <p>@adrianamoura.organizer</p>
              <p style={{ fontSize: "0.8rem", color: "#666" }}>Siga-nos e veja nosso trabalho</p>
            </div>
          </div>

          {/* E-MAIL */}
          <div className="contact-card" onClick={() => window.location.href = 'mailto:Adrianadebritomoura@gmail.com'}>
            <div className="contact-icon" style={{ background: "#4361ee" }}>✉️</div>
            <div>
              <h3 style={{ color: "#4361ee" }}>E-mail</h3>
              <p>Adrianadebritomoura@gmail.com</p>
              <p style={{ fontSize: "0.8rem", color: "#666" }}>Envie sua mensagem</p>
            </div>
          </div>

          {/* LOCALIZAÇÃO */}
          <div className="contact-card">
            <div className="contact-icon" style={{ background: "#f72585" }}>📍</div>
            <div>
              <h3 style={{ color: "#f72585" }}>Localização</h3>
              <p>Recife - Pernambuco</p>
              <p style={{ fontSize: "0.8rem", color: "#666" }}>Atendemos em toda região</p>
            </div>
          </div>
        </div>

        {/* HORÁRIO */}
        <div className="hours-card">
          <h3>Horário de Atendimento</h3>
          <p className="hours-text">Segunda a sábado das 08:00 às 18:00</p>
        </div>

        {/* FORMULÁRIO */}
        <div className="form-container">
          <h3>Envie sua mensagem</h3>
          <form action="https://formsubmit.co/Adrianadebritomoura@gmail.com" method="POST">
            <input type="text" name="nome" placeholder="Seu nome" required />
            <input type="email" name="email" placeholder="Seu e-mail" required />
            <textarea name="mensagem" placeholder="Sua mensagem" rows="4" required></textarea>
            <input type="hidden" name="_subject" value="Novo contato do site Drica & Léo" />
            <input type="hidden" name="_captcha" value="false" />
            <button type="submit">Enviar mensagem</button>
          </form>
          <p style={{ textAlign: "center", marginTop: "10px", color: "#666", fontSize: "0.8rem" }}>
            Responderemos em até 24h
          </p>
        </div>

        {/* CHAMADA FINAL */}
        <div className="footer-note">
          <p style={{ fontSize: "0.95rem", color: "#666", marginBottom: "12px" }}>
            Escolha a melhor forma de falar conosco!
          </p>
          <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://wa.me/5581994732981" target="_blank" rel="noopener noreferrer" style={{
              padding: "8px 20px",
              background: "#25d366",
              color: "white",
              textDecoration: "none",
              borderRadius: "30px",
              fontWeight: "600",
              fontSize: "0.85rem"
            }}>
              WhatsApp
            </a>
            <a href="https://instagram.com/adrianamoura.organizer" target="_blank" rel="noopener noreferrer" style={{
              padding: "8px 20px",
              background: "linear-gradient(45deg, #f09433, #d62976, #962fbf, #4f5bd5)",
              color: "white",
              textDecoration: "none",
              borderRadius: "30px",
              fontWeight: "600",
              fontSize: "0.85rem"
            }}>
              Instagram
            </a>
          </div>
        </div>
      </div>

      {/* BOTÃO VOLTAR AO TOPO */}
      <BackToTop />
    </div>
  );
};

export default ContactPage;
