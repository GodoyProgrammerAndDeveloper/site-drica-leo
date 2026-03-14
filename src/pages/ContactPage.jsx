import React, { useState, useEffect } from "react";
import BackToTop from "../components/BackToTop";

const ContactPage = () => {
  const [currentPath, setCurrentPath] = useState('/contato');

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  return (
    <div style={{ padding: "0", maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
      {/* HEADER FIXO COM MENU LADO DIREITO - VERSÃO MAIS COMPACTA */}
      <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        background: "white",
        padding: "10px 20px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        zIndex: 999,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap"
      }}>
        {/* LOGO (ESQUERDA) - REDUZIDA */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img 
            src="/images/logo.png" 
            alt="Drica & Léo" 
            style={{ width: "40px", height: "40px", borderRadius: "50%", objectFit: "cover" }}
          />
          <div>
            <h2 style={{ margin: 0, fontSize: "1.1rem", color: "#4361ee" }}>Drica & Léo</h2>
            <p style={{ margin: 0, fontSize: "0.7rem", color: "#f72585" }}>Personal Organizer</p>
          </div>
        </div>

        {/* MENU E BOTÕES (DIREITA) - COMPACTADO */}
        <div style={{ display: "flex", alignItems: "center", gap: "15px", flexWrap: "wrap" }}>
          {/* MENU DE NAVEGAÇÃO */}
          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            <a href="/" style={{ textDecoration: "none", color: currentPath === '/' ? '#4361ee' : '#2d2d44', fontWeight: currentPath === '/' ? '600' : '500', fontSize: "0.9rem" }}>Início</a>
            <a href="/servicos" style={{ textDecoration: "none", color: currentPath === '/servicos' ? '#4361ee' : '#2d2d44', fontWeight: currentPath === '/servicos' ? '600' : '500', fontSize: "0.9rem" }}>Serviços</a>
            <a href="/sobre" style={{ textDecoration: "none", color: currentPath === '/sobre' ? '#4361ee' : '#2d2d44', fontWeight: currentPath === '/sobre' ? '600' : '500', fontSize: "0.9rem" }}>Sobre</a>
            <a href="/galeria" style={{ textDecoration: "none", color: currentPath === '/galeria' ? '#4361ee' : '#2d2d44', fontWeight: currentPath === '/galeria' ? '600' : '500', fontSize: "0.9rem" }}>Galeria</a>
            <a href="/contato" style={{ textDecoration: "none", color: currentPath === '/contato' ? '#4361ee' : '#2d2d44', fontWeight: currentPath === '/contato' ? '600' : '500', fontSize: "0.9rem" }}>Contato</a>
          </div>

          {/* BOTÕES SOCIAIS COM SELO ABAIXO - COMPACTADOS */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "4px" }}>
            {/* BOTÕES */}
            <div style={{ display: "flex", gap: "8px" }}>
              <a 
                href="https://wa.me/5581994732981" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
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
                }}
              >
                <i className="fab fa-whatsapp"></i> WhatsApp
              </a>
              <a 
                href="https://instagram.com/adrianamoura.organizer" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
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
                }}
              >
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </div>

            {/* SELO ABAIXO DOS BOTÕES - MENOR */}
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

      <style>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        body {
          background: #fef6f9;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          padding-top: 0;
        }
        .contact-wrapper {
          padding-top: 70px;
          width: 100%;
        }
        h1 {
          font-size: 2.5rem;
          color: #4361ee;
          text-align: center;
          margin: 15px 0 10px 0;
        }
        .divider {
          width: 70px;
          height: 4px;
          background: linear-gradient(135deg, #4361ee, #f72585);
          margin: 0 auto 30px;
          border-radius: 2px;
        }
        .sub {
          font-size: 1.1rem;
          color: #2d2d44;
          text-align: center;
          margin: 0 15px 40px 15px;
        }
        .contact-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin: 0 15px 40px 15px;
        }
        .contact-card {
          background: white;
          border-radius: 18px;
          padding: 25px;
          box-shadow: 0 8px 20px rgba(67, 97, 238, 0.1);
          border: 1px solid #e9ecef;
          display: flex;
          align-items: center;
          gap: 15px;
          transition: transform 0.2s;
          cursor: pointer;
        }
        .contact-card:hover {
          transform: translateY(-5px);
        }
        .contact-icon {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.2rem;
          color: white;
          flex-shrink: 0;
        }
        .contact-card h3 {
          font-size: 1.2rem;
          margin-bottom: 4px;
        }
        .contact-card p {
          font-size: 0.95rem;
          margin-bottom: 4px;
          color: #2d2d44;
        }
        .hours-card {
          background: linear-gradient(135deg, #f8f9fa, white);
          border-radius: 18px;
          padding: 30px;
          margin: 0 15px 30px 15px;
          border: 1px solid #e9ecef;
          text-align: center;
        }
        .hours-card h3 {
          font-size: 1.6rem;
          color: #4361ee;
          margin-bottom: 15px;
        }
        .hours-text {
          font-size: 1.1rem;
          color: #2d2d44;
          font-weight: 500;
        }
        .form-container {
          background: white;
          border-radius: 18px;
          padding: 30px;
          margin: 0 15px 30px 15px;
          box-shadow: 0 8px 20px rgba(67, 97, 238, 0.1);
          border: 1px solid #e9ecef;
        }
        .form-container h3 {
          font-size: 1.6rem;
          color: #4361ee;
          text-align: center;
          margin-bottom: 25px;
        }
        form {
          display: grid;
          gap: 15px;
          max-width: 500px;
          margin: 0 auto;
        }
        input, textarea {
          padding: 12px;
          border-radius: 8px;
          border: 1px solid #e9ecef;
          font-size: 0.95rem;
          width: 100%;
        }
        button[type="submit"] {
          padding: 12px;
          background: linear-gradient(135deg, #4361ee, #f72585);
          color: white;
          border: none;
          border-radius: 40px;
          font-size: 1rem;
          font-weight: bold;
          cursor: pointer;
          transition: transform 0.2s;
        }
        .footer-note {
          text-align: center;
          padding: 20px;
          background: white;
          border-radius: 15px;
          margin: 0 15px 30px 15px;
          border: 1px solid #e9ecef;
        }

        /* ===== CELULAR ===== */
        @media (max-width: 768px) {
          .contact-wrapper {
            padding-top: 60px;
          }

          h1 {
            font-size: 2.2rem !important;
            margin: 10px 15px 5px 15px !important;
          }

          .divider {
            width: 60px !important;
            margin: 0 auto 25px auto !important;
          }

          .sub {
            font-size: 0.95rem !important;
            margin: 0 15px 25px 15px !important;
          }

          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
            margin: 0 12px 25px 12px !important;
          }

          .contact-card {
            padding: 15px !important;
            gap: 12px !important;
          }

          .contact-icon {
            width: 45px !important;
            height: 45px !important;
            font-size: 1.8rem !important;
          }

          .contact-card h3 {
            font-size: 1rem !important;
          }

          .contact-card p {
            font-size: 0.85rem !important;
          }

          .hours-card {
            padding: 20px 12px !important;
            margin: 0 12px 25px 12px !important;
          }

          .hours-card h3 {
            font-size: 1.3rem !important;
          }

          .hours-text {
            font-size: 0.95rem !important;
          }

          .form-container {
            padding: 20px 12px !important;
            margin: 0 12px 25px 12px !important;
          }

          .form-container h3 {
            font-size: 1.3rem !important;
          }

          .footer-note {
            margin: 0 12px 25px 12px !important;
            padding: 15px !important;
          }

          .footer-note p {
            font-size: 0.95rem !important;
          }

          div[style*="position: fixed; top: 0; left: 0; width: 100%;"] {
            padding: 8px 12px !important;
          }

          .logo-img, div[style*="width: 50px; height: 50px;"] {
            width: 35px !important;
            height: 35px !important;
          }

          h2[style*="font-size: 1.3rem;"] {
            font-size: 1rem !important;
          }

          p[style*="font-size: 0.8rem;"] {
            font-size: 0.65rem !important;
          }

          a[style*="padding: 6px 12px;"] {
            padding: 4px 10px !important;
            font-size: 0.75rem !important;
          }
        }

        @media (max-width: 480px) {
          .contact-wrapper {
            padding-top: 55px;
          }

          h1 {
            font-size: 1.8rem !important;
          }

          .contact-icon {
            width: 40px !important;
            height: 40px !important;
            font-size: 1.5rem !important;
          }

          .contact-card h3 {
            font-size: 0.9rem !important;
          }

          .contact-card p {
            font-size: 0.8rem !important;
          }

          .hours-card h3 {
            font-size: 1.2rem !important;
          }

          .form-container h3 {
            font-size: 1.2rem !important;
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
          <p style={{ textAlign: "center", marginTop: "15px", color: "#666", fontSize: "0.8rem" }}>
            Responderemos em até 24h
          </p>
        </div>

        {/* CHAMADA FINAL */}
        <div className="footer-note">
          <p style={{ fontSize: "1rem", color: "#666", marginBottom: "15px" }}>
            Escolha a melhor forma de falar conosco!
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://wa.me/5581994732981" target="_blank" rel="noopener noreferrer" style={{
              padding: "10px 25px",
              background: "#25d366",
              color: "white",
              textDecoration: "none",
              borderRadius: "40px",
              fontWeight: "600",
              fontSize: "0.9rem"
            }}>
              WhatsApp
            </a>
            <a href="https://instagram.com/adrianamoura.organizer" target="_blank" rel="noopener noreferrer" style={{
              padding: "10px 25px",
              background: "linear-gradient(45deg, #f09433, #d62976, #962fbf, #4f5bd5)",
              color: "white",
              textDecoration: "none",
              borderRadius: "40px",
              fontWeight: "600",
              fontSize: "0.9rem"
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
