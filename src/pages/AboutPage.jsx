import React, { useState, useEffect } from "react";
import BackToTop from "../components/BackToTop";

const AboutPage = () => {
  const [currentPath, setCurrentPath] = useState('/sobre');

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  return (
    <div style={{ padding: "120px 20px 40px", maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
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

          {/* BOTÕES SOCIAIS COM SELO ACIMA */}
          <div style={{ display: "flex", gap: "10px", position: "relative" }}>
            {/* SELO ACIMA DOS BOTÕES */}
            <div style={{
              position: "absolute",
              top: "-40px",
              right: "0",
              background: "linear-gradient(135deg, #4361ee, #f72585)",
              color: "white",
              padding: "5px 15px",
              borderRadius: "50px",
              fontSize: "0.8rem",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              gap: "5px",
              whiteSpace: "nowrap",
              border: "2px solid white",
              boxShadow: "0 2px 10px rgba(0,0,0,0.2)"
            }}>
              <span>🏆</span> Profissional Certificado
            </div>

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
          padding-top: 80px;
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
        .history-card {
          background: white;
          border-radius: 30px;
          padding: 50px;
          box-shadow: 0 20px 40px rgba(67, 97, 238, 0.1);
          margin-bottom: 60px;
          border: 1px solid #e9ecef;
        }
        .history-header {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 30px;
        }
        .history-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #4361ee, #f72585);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          color: white;
        }
        .history-header h2 {
          font-size: 2.2rem;
          color: #4361ee;
          margin: 0;
        }
        .history-text {
          font-size: 1.1rem;
          color: #2d2d44;
          line-height: 1.8;
          margin-bottom: 20px;
        }
        .mission-vision-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
          margin-bottom: 60px;
        }
        .mission-card, .vision-card {
          background: linear-gradient(135deg, #f8f9fa, white);
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 10px 25px rgba(67, 97, 238, 0.05);
          border: 1px solid #e9ecef;
          position: relative;
          overflow: hidden;
        }
        .card-icon {
          width: 50px;
          height: 50px;
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.8rem;
          color: white;
          margin-bottom: 25px;
        }
        .mission-card .card-icon {
          background: #4361ee;
        }
        .vision-card .card-icon {
          background: #f72585;
        }
        .mission-card h3 {
          font-size: 1.8rem;
          color: #4361ee;
          margin-bottom: 15px;
        }
        .vision-card h3 {
          font-size: 1.8rem;
          color: #f72585;
          margin-bottom: 15px;
        }
        .mission-card p, .vision-card p {
          font-size: 1.1rem;
          color: #2d2d44;
          line-height: 1.7;
        }
        .values-section {
          margin-bottom: 60px;
        }
        .values-header {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 40px;
        }
        .values-icon {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #4361ee, #f72585);
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          color: white;
        }
        .values-header h2 {
          font-size: 2rem;
          color: #4361ee;
          margin: 0;
        }
        .values-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 25px;
        }
        .value-card {
          background: white;
          border-radius: 20px;
          padding: 30px 20px;
          text-align: center;
          box-shadow: 0 10px 20px rgba(67, 97, 238, 0.05);
          border: 1px solid #e9ecef;
        }
        .value-icon {
          font-size: 3rem;
          margin-bottom: 15px;
        }
        .value-card h4 {
          font-size: 1.3rem;
          color: #4361ee;
          margin-bottom: 10px;
        }
        .value-card p {
          color: #2d2d44;
          font-size: 0.95rem;
          line-height: 1.6;
        }
        @media (max-width: 768px) {
          .mission-vision-grid {
            grid-template-columns: 1fr;
          }
          .values-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          h1 {
            font-size: 2.5rem;
          }
          .history-card {
            padding: 30px;
          }
          .history-header h2 {
            font-size: 1.8rem;
          }
          div[style*="position: fixed; top: 0; left: 0; width: 100%;"] {
            flex-direction: column;
            gap: 10px;
            padding: 10px;
          }
          div[style*="display: flex; gap: 20px; align-items: center;"] {
            flex-wrap: wrap;
            justify-content: center;
          }
        }
        @media (max-width: 480px) {
          .values-grid {
            grid-template-columns: 1fr;
          }
          h1 {
            font-size: 2rem;
          }
        }
      `}</style>

      <h1>Sobre Nós</h1>
      <div className="divider"></div>

      {/* HISTÓRIA */}
      <div className="history-card">
        <div className="history-header">
          <div className="history-icon">📖</div>
          <h2>Nossa História</h2>
        </div>
        <p className="history-text">
          Somos Adriana (Drica) e Leonita (Léo), duas irmãs pernambucanas com uma 
          paixão em comum: transformar vidas através da organização. Nossa jornada 
          começou há mais de uma década, quando percebemos que um ambiente organizado 
          vai muito além da estética - ele traz paz de espírito, economia de tempo 
          e qualidade de vida.
        </p>
        <p className="history-text">
          Com formação em Design de Interiores e especialização em Organização 
          Profissional, desenvolvemos uma metodologia única que combina técnicas 
          avançadas com um toque pessoal e acolhedor. Cada projeto é tratado com 
          a dedicação que merece, respeitando a individualidade de cada cliente 
          e suas necessidades específicas.
        </p>
      </div>

      {/* MISSÃO E VISÃO */}
      <div className="mission-vision-grid">
        <div className="mission-card">
          <div className="card-icon">🎯</div>
          <h3>Missão</h3>
          <p>
            Levar organização e harmonia para os lares, transformando espaços e simplificando a vida das pessoas.
          </p>
        </div>
        <div className="vision-card">
          <div className="card-icon">👁️</div>
          <h3>Visão</h3>
          <p>
            Ser referência em organização residencial no Brasil, mostrando que é possível ter uma casa organizada sem abrir mão da personalidade e do aconchego.
          </p>
        </div>
      </div>

      {/* VALORES */}
      <div className="values-section">
        <div className="values-header">
          <div className="values-icon">💎</div>
          <h2>Nossos Valores</h2>
        </div>
        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon">❤️</div>
            <h4>Amor</h4>
            <p>Colocamos amor em cada detalhe, porque organizar é um ato de carinho consigo mesmo.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">🤝</div>
            <h4>Respeito</h4>
            <p>Respeitamos a história e os pertences de cada cliente, trabalhando com discrição e ética.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">✨</div>
            <h4>Excelência</h4>
            <p>Buscamos a excelência em cada projeto, com técnicas atualizadas e resultados duradouros.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">🌱</div>
            <h4>Transformação</h4>
            <p>Acreditamos no poder transformador da organização para uma vida mais leve e feliz.</p>
          </div>
        </div>
      </div>

      {/* BOTÃO VOLTAR AO TOPO */}
      <BackToTop />
    </div>
  );
};

export default AboutPage;
