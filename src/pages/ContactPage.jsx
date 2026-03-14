import React, { useState, useEffect } from "react";
import BackToTop from "../components/BackToTop";

const ContactPage = () => {
  const [currentPath, setCurrentPath] = useState('/contato');

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  return (
    <div style={{ padding: "0", maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
      {/* HEADER FIXO COM MENU LADO DIREITO */}
      <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        background: "white",
        padding: "15px 30px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        zIndex: 999,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap"
      }}>
        {/* LOGO (ESQUERDA) */}
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <img 
            src="/images/logo.png" 
            alt="Drica & Léo" 
            style={{ width: "50px", height: "50px", borderRadius: "50%", objectFit: "cover" }}
          />
          <div>
            <h2 style={{ margin: 0, fontSize: "1.3rem", color: "#4361ee" }}>Drica & Léo</h2>
            <p style={{ margin: 0, fontSize: "0.8rem", color: "#f72585" }}>Personal Organizer</p>
          </div>
        </div>

        {/* MENU E BOTÕES (DIREITA) */}
        <div style={{ display: "flex", alignItems: "center", gap: "30px", flexWrap: "wrap" }}>
          {/* MENU DE NAVEGAÇÃO */}
          <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <a href="/" style={{ textDecoration: "none", color: currentPath === '/' ? '#4361ee' : '#2d2d44', fontWeight: currentPath === '/' ? '600' : '500' }}>Início</a>
            <a href="/servicos" style={{ textDecoration: "none", color: currentPath === '/servicos' ? '#4361ee' : '#2d2d44', fontWeight: currentPath === '/servicos' ? '600' : '500' }}>Serviços</a>
            <a href="/sobre" style={{ textDecoration: "none", color: currentPath === '/sobre' ? '#4361ee' : '#2d2d44', fontWeight: currentPath === '/sobre' ? '600' : '500' }}>Sobre</a>
            <a href="/galeria" style={{ textDecoration: "none", color: currentPath === '/galeria' ? '#4361ee' : '#2d2d44', fontWeight: currentPath === '/galeria' ? '600' : '500' }}>Galeria</a>
            <a href="/contato" style={{ textDecoration: "none", color: currentPath === '/contato' ? '#4361ee' : '#2d2d44', fontWeight: currentPath === '/contato' ? '600' : '500' }}>Contato</a>
          </div>

          {/* BOTÕES SOCIAIS COM SELO ABAIXO */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "5px" }}>
            {/* BOTÕES */}
            <div style={{ display: "flex", gap: "10px" }}>
              <a 
                href="https://wa.me/5581994732981" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  background: "#25d366",
                  color: "white",
                  padding: "8px 16px",
                  borderRadius: "50px",
                  textDecoration: "none",
                  fontWeight: "600",
                  fontSize: "0.9rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px"
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
                  padding: "8px 16px",
                  borderRadius: "50px",
                  textDecoration: "none",
                  fontWeight: "600",
                  fontSize: "0.9rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px"
                }}
              >
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </div>

            {/* SELO ABAIXO DOS BOTÕES */}
            <div style={{
              background: "linear-gradient(135deg, #4361ee, #f72585)",
              color: "white",
              padding: "4px 12px",
              borderRadius: "50px",
              fontSize: "0.75rem",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              gap: "5px",
              whiteSpace: "nowrap",
              border: "2px solid white",
              boxShadow: "0 2px 8px rgba(0,0,0,0.2)"
            }}>
              <span style={{ fontSize: "0.9rem" }}>🏆</span> Profissional Certificado
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
          padding-top: 100px;
          width: 100%;
        }
        h1 {
          font-size: 3rem;
          color: #4361ee;
          text-align: center;
          margin: 20px 0 10px 0;
        }
        .divider {
          width: 80px;
          height: 4px;
          background: linear-gradient(135deg, #4361ee, #f72585);
          margin: 0 auto 40px;
          border-radius: 2px;
        }
        .sub {
          font-size: 1.2rem;
          color: #2d2d44;
          text-align: center;
          margin: 0 20px 50px 20px;
        }
        .contact-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 25px;
          margin: 0 20px 50px 20px;
        }
        .contact-card {
          background: white;
          border-radius: 20px;
          padding: 35px;
          box-shadow: 0 10px 30px rgba(67, 97, 238, 0.1);
          border: 1px solid #e9ecef;
          display: flex;
          align-items: center;
          gap: 20px;
          transition: transform 0.2s;
          cursor: pointer;
        }
        .contact-card:hover {
          transform: translateY(-5px);
        }
        .contact-icon {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          color: white;
          flex-shrink: 0;
        }
        .contact-card h3 {
          font-size: 1.3rem;
          margin-bottom: 5px;
        }
        .contact-card p {
          font-size: 1rem;
          margin-bottom: 5px;
          color: #2d2d44;
        }
        .hours-card {
          background: linear-gradient(135deg, #f8f9fa, white);
          border-radius: 20px;
          padding: 40px;
          margin: 0 20px 40px 20px;
          border: 1px solid #e9ecef;
          text-align: center;
        }
        .hours-card h3 {
          font-size: 1.8rem;
          color: #4361ee;
          margin-bottom: 20px;
        }
        .hours-text {
          font-size: 1.2rem;
          color: #2d2d44;
          font-weight: 500;
        }
        .form-container {
          background: white;
          border-radius: 20px;
          padding: 40px;
          margin: 0 20px 40px 20px;
          box-shadow: 0 10px 30px rgba(67, 97, 238, 0.1);
          border: 1px solid #e9ecef;
        }
        .form-container h3 {
          font-size: 1.8rem;
          color: #4361ee;
          text-align: center;
          margin-bottom: 30px;
        }
        form {
          display: grid;
          gap: 20px;
          max-width: 600px;
          margin: 0 auto;
        }
        input, textarea {
          padding: 15px;
          border-radius: 10px;
          border: 1px solid #e9ecef;
          font-size: 1rem;
          width: 100%;
        }
        button[type="submit"] {
          padding: 15px;
          background: linear-gradient(135deg, #4361ee, #f72585);
          color: white;
          border: none;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: bold;
          cursor: pointer;
          transition: transform 0.2s;
        }
        button[type="submit"]:hover {
          transform: scale(1.02);
        }
        .footer-note {
          text-align: center;
          padding: 20px;
          background: white;
          border-radius: 15px;
          margin: 0 20px 40px 20px;
          border: 1px solid #e9ecef;
        }

        /* ===== CELULAR ===== */
        @media (max-width: 768px) {
          .contact-wrapper {
            padding-top: 180px;
          }

          h1 {
            font-size: 2.5rem !important;
            margin: 0 15px 10px 15px !important;
          }

          .divider {
            margin: 0 auto 30px auto !important;
          }

          .sub {
            font-size: 1rem !important;
            margin: 0 15px 30px 15px !important;
          }

          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 15px !important;
            margin: 0 15px 30px 15px !important;
          }

          .contact-card {
            padding: 20px !important;
            gap: 15px !important;
          }

          .contact-icon {
            width: 50px !important;
            height: 50px !important;
            font-size: 2rem !important;
          }

          .contact-card h3 {
            font-size: 1.1rem !important;
          }

          .contact-card p {
            font-size: 0.9rem !important;
          }

          .contact-card p:last-child {
            font-size: 0.8rem !important;
          }

          .hours-card {
            padding: 30px 15px !important;
            margin: 0 15px 30px 15px !important;
          }

          .hours-card h3 {
            font-size: 1.5rem !important;
            margin-bottom: 15px !important;
          }

          .hours-text {
            font-size: 1rem !important;
          }

          .form-container {
            padding: 30px 15px !important;
            margin: 0 15px 30px 15px !important;
          }

          .form-container h3 {
            font-size: 1.5rem !important;
            margin-bottom: 20px !important;
          }

          input, textarea {
            padding: 12px !important;
            font-size: 16px !important;
          }

          button[type="submit"] {
            padding: 12px !important;
            font-size: 1rem !important;
          }

          .footer-note {
            margin: 0 15px 30px 15px !important;
            padding: 15px !important;
          }

          .footer-note p {
            font-size: 1rem !important;
            margin-bottom: 15px !important;
          }

          .footer-note div {
            flex-direction: column !important;
            align-items: center !important;
            gap: 10px !important;
          }

          .footer-note a {
            width: 100% !important;
            max-width: 280px !important;
            text-align: center !important;
            padding: 10px 20px !important;
          }

          div[style*="position: fixed; top: 0; left: 0; width: 100%;"] {
            padding: 10px 15px !important;
            flex-direction: column !important;
            align-items: center !important;
          }

          div[style*="display: flex; gap: 20px; align-items: center;"] {
            flex-wrap: wrap !important;
            justify-content: center !important;
            gap: 10px !important;
          }

          div[style*="display: flex; flex-direction: column; align-items: flex-end; gap: 5px;"] {
            align-items: center !important;
          }

          div[style*="display: flex; gap: 10px;"] {
            flex-wrap: wrap !important;
            justify-content: center !important;
          }

          a[style*="padding: 8px 16px;"] {
            padding: 6px 12px !important;
            font-size: 0.8rem !important;
          }

          .logo-img, div[style*="width: 50px; height: 50px;"] {
            width: 40px !important;
            height: 40px !important;
          }

          h2[style*="font-size: 1.3rem;"] {
            font-size: 1.1rem !important;
          }

          p[style*="font-size: 0.8rem;"] {
            font-size: 0.7rem !important;
          }
        }

        @media (max-width: 480px) {
          .contact-wrapper {
            padding-top: 200px;
          }

          h1 {
            font-size: 2rem !important;
          }

          .contact-card {
            padding: 15px !important;
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
            font-size: 0.8rem !important;
          }

          .hours-card {
            padding: 25px 10px !important;
          }

          .hours-card h3 {
            font-size: 1.3rem !important;
          }

          .hours-text {
            font-size: 0.9rem !important;
          }

          .form-container {
            padding: 25px 10px !important;
          }

          .form-container h3 {
            font-size: 1.3rem !important;
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
              <p style={{ fontSize: "0.9rem", color: "#666" }}>Clique para conversar</p>
            </div>
          </div>

          {/* INSTAGRAM */}
          <div className="contact-card" onClick={() => window.open('https://instagram.com/adrianamoura.organizer', '_blank')}>
            <div className="contact-icon" style={{ background: "linear-gradient(45deg, #f09433, #d62976, #962fbf, #4f5bd5)" }}>📷</div>
            <div>
              <h3 style={{ color: "#d62976" }}>Instagram</h3>
              <p>@adrianamoura.organizer</p>
              <p style={{ fontSize: "0.9rem", color: "#666" }}>Siga-nos e veja nosso trabalho</p>
            </div>
          </div>

          {/* E-MAIL */}
          <div className="contact-card" onClick={() => window.location.href = 'mailto:Adrianadebritomoura@gmail.com'}>
            <div className="contact-icon" style={{ background: "#4361ee" }}>✉️</div>
            <div>
              <h3 style={{ color: "#4361ee" }}>E-mail</h3>
              <p>Adrianadebritomoura@gmail.com</p>
              <p style={{ fontSize: "0.9rem", color: "#666" }}>Envie sua mensagem</p>
            </div>
          </div>

          {/* LOCALIZAÇÃO */}
          <div className="contact-card">
            <div className="contact-icon" style={{ background: "#f72585" }}>📍</div>
            <div>
              <h3 style={{ color: "#f72585" }}>Localização</h3>
              <p>Recife - Pernambuco</p>
              <p style={{ fontSize: "0.9rem", color: "#666" }}>Atendemos em toda região</p>
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
            <textarea name="mensagem" placeholder="Sua mensagem" rows="5" required></textarea>
            <input type="hidden" name="_subject" value="Novo contato do site Drica & Léo" />
            <input type="hidden" name="_captcha" value="false" />
            <button type="submit">Enviar mensagem</button>
          </form>
          <p style={{ textAlign: "center", marginTop: "20px", color: "#666", fontSize: "0.9rem" }}>
            Seu e-mail será enviado com segurança. Responderemos em até 24h.
          </p>
        </div>

        {/* CHAMADA FINAL */}
        <div className="footer-note">
          <p style={{ fontSize: "1.2rem", color: "#666", marginBottom: "20px" }}>
            Escolha a melhor forma de falar conosco!
          </p>
          <div style={{ display: "flex", gap: "15px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://wa.me/5581994732981" target="_blank" rel="noopener noreferrer" style={{
              padding: "12px 30px",
              background: "#25d366",
              color: "white",
              textDecoration: "none",
              borderRadius: "50px",
              fontWeight: "600"
            }}>
              WhatsApp
            </a>
            <a href="https://instagram.com/adrianamoura.organizer" target="_blank" rel="noopener noreferrer" style={{
              padding: "12px 30px",
              background: "linear-gradient(45deg, #f09433, #d62976, #962fbf, #4f5bd5)",
              color: "white",
              textDecoration: "none",
              borderRadius: "50px",
              fontWeight: "600"
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
