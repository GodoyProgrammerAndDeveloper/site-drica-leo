import React, { useState, useEffect } from "react";
import BackToTop from "../components/BackToTop";

const ContactPage = () => {
  const [currentPath, setCurrentPath] = useState('/contato');

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

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
          <img src="/images/logo.png" alt="Drica & Léo" style={{ width: "40px", height: "40px", borderRadius: "50%", objectFit: "cover" }} />
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
                background: "#25d366", color: "white", padding: "6px 12px", borderRadius: "40px",
                textDecoration: "none", fontWeight: "600", fontSize: "0.8rem", display: "flex", alignItems: "center", gap: "4px"
              }}><i className="fab fa-whatsapp"></i> WhatsApp</a>
              <a href="https://instagram.com/adrianamoura.organizer" target="_blank" rel="noopener noreferrer" style={{
                background: "linear-gradient(45deg, #f09433, #d62976, #962fbf, #4f5bd5)", color: "white",
                padding: "6px 12px", borderRadius: "40px", textDecoration: "none", fontWeight: "600", fontSize: "0.8rem",
                display: "flex", alignItems: "center", gap: "4px"
              }}><i className="fab fa-instagram"></i> Instagram</a>
            </div>
            <div style={{
              background: "linear-gradient(135deg, #4361ee, #f72585)", color: "white", padding: "3px 10px",
              borderRadius: "40px", fontSize: "0.65rem", fontWeight: "bold", display: "flex", alignItems: "center", gap: "4px",
              whiteSpace: "nowrap", border: "2px solid white", boxShadow: "0 2px 6px rgba(0,0,0,0.2)"
            }}><span style={{ fontSize: "0.8rem" }}>🏆</span> Profissional Certificado</div>
          </div>
        </div>
      </div>

      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #ffffff; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; padding-top: 80px; }
        .contact-wrapper { padding-top: 20px; width: 100%; }
        h1 { font-size: 3rem; color: #4361ee; text-align: center; margin: 20px 0 10px 0; }
        .divider { width: 80px; height: 4px; background: linear-gradient(135deg, #4361ee, #f72585); margin: 0 auto 40px; border-radius: 2px; }
        .sub { font-size: 1.2rem; color: #2d2d44; text-align: center; margin: 0 20px 50px 20px; }
        .contact-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 25px; margin: 0 20px 50px 20px; }
        .contact-card { background: white; border-radius: 20px; padding: 35px; box-shadow: 0 10px 30px rgba(67,97,238,0.1); border: 1px solid #e9ecef; display: flex; align-items: center; gap: 20px; cursor: pointer; transition: transform 0.2s; }
        .contact-card:hover { transform: translateY(-5px); }
        .contact-icon { width: 70px; height: 70px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2.5rem; color: white; flex-shrink: 0; }
        .contact-card h3 { font-size: 1.3rem; margin-bottom: 5px; }
        .contact-card p { font-size: 1rem; margin-bottom: 5px; color: #2d2d44; }
        .hours-card { background: linear-gradient(135deg, #f8f9fa, white); border-radius: 20px; padding: 40px; margin: 0 20px 40px 20px; border: 1px solid #e9ecef; text-align: center; }
        .hours-card h3 { font-size: 1.8rem; color: #4361ee; margin-bottom: 20px; }
        .hours-text { font-size: 1.2rem; color: #2d2d44; font-weight: 500; }
        .form-container { background: white; border-radius: 20px; padding: 40px; margin: 0 20px 40px 20px; box-shadow: 0 10px 30px rgba(67,97,238,0.1); border: 1px solid #e9ecef; }
        .form-container h3 { font-size: 1.8rem; color: #4361ee; text-align: center; margin-bottom: 30px; }
        form { display: grid; gap: 20px; max-width: 600px; margin: 0 auto; }
        input, textarea { padding: 15px; border-radius: 10px; border: 1px solid #e9ecef; font-size: 1rem; width: 100%; }
        button[type="submit"] { padding: 15px; background: linear-gradient(135deg, #4361ee, #f72585); color: white; border: none; border-radius: 50px; font-size: 1.1rem; font-weight: bold; cursor: pointer; }
        .footer-note { text-align: center; padding: 20px; background: white; border-radius: 15px; margin: 0 20px 40px 20px; border: 1px solid #e9ecef; }
        @media (max-width: 768px) {
          body { padding-top: 200px; }
          .contact-grid { grid-template-columns: 1fr; gap: 15px; margin: 0 15px 30px 15px; }
          .contact-card { padding: 20px; gap: 15px; }
          .contact-icon { width: 50px; height: 50px; font-size: 2rem; }
          .contact-card h3 { font-size: 1.1rem; }
          .contact-card p { font-size: 0.9rem; }
          .hours-card { padding: 30px 15px; margin: 0 15px 30px 15px; }
          .hours-card h3 { font-size: 1.5rem; }
          .form-container { padding: 30px 15px; margin: 0 15px 30px 15px; }
          .form-container h3 { font-size: 1.5rem; }
          .footer-note { margin: 0 15px 30px 15px; }
          .footer-note div { flex-direction: column; gap: 10px; }
          .footer-note a { width: 100%; max-width: 280px; }
        }
      `}</style>

      <div className="contact-wrapper">
        <h1>Entre em Contato</h1>
        <div className="divider"></div>
        <p className="sub">Estamos prontas para atender você</p>

        <div className="contact-grid">
          <div className="contact-card" onClick={() => window.open('https://wa.me/5581994732981', '_blank')}>
            <div className="contact-icon" style={{ background: "#25d366" }}>📱</div>
            <div><h3 style={{ color: "#25d366" }}>WhatsApp</h3><p>(81) 99473-2981</p><p style={{ fontSize: "0.9rem", color: "#666" }}>Clique para conversar</p></div>
          </div>
          <div className="contact-card" onClick={() => window.open('https://instagram.com/adrianamoura.organizer', '_blank')}>
            <div className="contact-icon" style={{ background: "linear-gradient(45deg, #f09433, #d62976, #962fbf, #4f5bd5)" }}>📷</div>
            <div><h3 style={{ color: "#d62976" }}>Instagram</h3><p>@adrianamoura.organizer</p><p style={{ fontSize: "0.9rem", color: "#666" }}>Siga-nos</p></div>
          </div>
          <div className="contact-card" onClick={() => window.location.href = 'mailto:Adrianadebritomoura@gmail.com'}>
            <div className="contact-icon" style={{ background: "#4361ee" }}>✉️</div>
            <div><h3 style={{ color: "#4361ee" }}>E-mail</h3><p>Adrianadebritomoura@gmail.com</p><p style={{ fontSize: "0.9rem", color: "#666" }}>Envie sua mensagem</p></div>
          </div>
          <div className="contact-card">
            <div className="contact-icon" style={{ background: "#f72585" }}>📍</div>
            <div><h3 style={{ color: "#f72585" }}>Localização</h3><p>Recife - Pernambuco</p><p style={{ fontSize: "0.9rem", color: "#666" }}>Atendemos toda região</p></div>
          </div>
        </div>

        <div className="hours-card">
          <h3>Horário de Atendimento</h3>
          <p className="hours-text">Segunda a sábado das 08:00 às 18:00</p>
        </div>

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
          <p style={{ textAlign: "center", marginTop: "10px", color: "#666", fontSize: "0.8rem" }}>Responderemos em até 24h</p>
        </div>

        <div className="footer-note">
          <p style={{ fontSize: "1rem", color: "#666", marginBottom: "15px" }}>Escolha a melhor forma de falar conosco!</p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://wa.me/5581994732981" target="_blank" rel="noopener noreferrer" style={{ padding: "8px 20px", background: "#25d366", color: "white", textDecoration: "none", borderRadius: "40px", fontWeight: "600" }}>WhatsApp</a>
            <a href="https://instagram.com/adrianamoura.organizer" target="_blank" rel="noopener noreferrer" style={{ padding: "8px 20px", background: "linear-gradient(45deg, #f09433, #d62976, #962fbf, #4f5bd5)", color: "white", textDecoration: "none", borderRadius: "40px", fontWeight: "600" }}>Instagram</a>
          </div>
        </div>
      </div>

      <BackToTop />
    </div>
  );
};

export default ContactPage;
