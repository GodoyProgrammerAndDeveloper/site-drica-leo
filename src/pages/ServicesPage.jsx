import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BackToTop from "../components/BackToTop";

const ServicesPage = () => {
  const navigate = useNavigate();
  const [currentPath, setCurrentPath] = useState('/servicos');

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const services = [
    { 
      id: 1,
      icon: "👗", 
      title: "Guarda-roupas", 
      benefit: "Ganhe tempo na hora de se vestir e prolongue a vida útil das suas roupas",
      quality: "Técnicas Marie Kondo, dobras especiais e sistemas de etiquetagem profissional",
      image: "/images/Cabide Roupoas Masculinas.jpeg"
    },
    { 
      id: 2,
      icon: "🍳", 
      title: "Cozinhas", 
      benefit: "Cozinhe com prazer em um espaço onde tudo está ao alcance das mãos",
      quality: "Despensa funcional, potes herméticos e organização por categorias",
      image: "/images/Louça organizada_01.jpeg"
    },
    { 
      id: 3,
      icon: "💻", 
      title: "Escritórios", 
      benefit: "Aumente sua produtividade com um home office livre de distrações",
      quality: "Gestão de cabos, organização de documentos e ergonomia do espaço",
      image: "/images/Papelaria Depois.jpeg"
    },
    { 
      id: 4,
      icon: "🛋️", 
      title: "Salas", 
      benefit: "Receba bem em um ambiente aconchegante e harmonioso",
      quality: "Estantes organizadas, decoração funcional e espaços integrados",
      image: "/images/Organização comeias frente Depois.jpeg"
    },
    { 
      id: 5,
      icon: "🧸", 
      title: "Quartos Kids", 
      benefit: "Estimule a autonomia das crianças com um quarto que elas mesmas organizam",
      quality: "Espaço lúdico, brinquedos acessíveis e área de estudos funcional",
      image: "/images/Roupas Feminias Depois.jpeg"
    },
    { 
      id: 6,
      icon: "📦", 
      title: "Despensas", 
      benefit: "Economize nas compras com tudo à vista e controle de validade",
      quality: "Estoque organizado, etiquetagem completa e aproveitamento máximo",
      image: "/images/Despensa Depois_01.jpeg"
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
        body { background: #fef6f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; padding-top: 80px; }
        .services-wrapper { padding-top: 20px; width: 100%; }
        h1 { font-size: 3rem; color: #4361ee; text-align: center; margin: 20px 0 10px 0; }
        .sub { font-size: 1.3rem; color: #f72585; text-align: center; margin: 0 20px 50px 20px; }
        .grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 30px; margin: 0 20px 60px 20px; }
        .card { background: white; border-radius: 20px; overflow: hidden; box-shadow: 0 10px 30px rgba(67, 97, 238, 0.1); }
        .img-box { height: 250px; position: relative; overflow: hidden; }
        .img-box img { width: 100%; height: 100%; object-fit: cover; }
        .icon-box { position: absolute; bottom: -30px; right: 20px; width: 70px; height: 70px; background: #4361ee; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2.5rem; color: white; border: 4px solid white; z-index: 2; }
        .content { padding: 40px 25px 25px; }
        h2 { font-size: 2rem; color: #4361ee; text-align: center; margin: 0 0 20px 0; font-weight: bold; }
        .benefit, .quality { padding: 20px; border-radius: 15px; margin-bottom: 15px; }
        .benefit { background: #f8f9fa; }
        .quality { background: #eef2ff; }
        .benefit h3, .quality h3 { display: flex; align-items: center; gap: 8px; margin: 0 0 10px 0; font-size: 1.2rem; white-space: nowrap; }
        .benefit h3 { color: #f72585; }
        .quality h3 { color: #4361ee; }
        .benefit p, .quality p { margin: 0; line-height: 1.6; color: #2d2d44; font-size: 1rem; word-break: break-word; }
        .cta { text-align: center; padding: 60px 40px; background: linear-gradient(135deg, #4361ee, #f72585); border-radius: 30px; color: white; margin: 40px 20px; }
        .cta h3 { font-size: 2.5rem; margin-bottom: 15px; }
        .cta p { font-size: 1.2rem; margin-bottom: 30px; }
        .cta-buttons { display: flex; gap: 20px; justify-content: center; flex-wrap: wrap; }
        .cta-buttons button { padding: 15px 40px; border: none; border-radius: 50px; font-size: 1.1rem; font-weight: bold; cursor: pointer; transition: transform 0.2s; }
        .btn-orcamento { background: white; color: #4361ee; }
        .btn-whatsapp { background: transparent; color: white; border: 2px solid white !important; display: flex; align-items: center; gap: 8px; }
        @media (max-width: 768px) {
          body { padding-top: 200px; }
          .grid { grid-template-columns: 1fr; gap: 20px; margin: 0 15px 40px 15px; }
          h1 { font-size: 2.5rem; }
          h2 { font-size: 1.8rem; }
          .content { padding: 35px 15px 20px; }
          .cta { padding: 40px 20px; }
          .cta-buttons { flex-direction: column; align-items: center; }
          .cta-buttons button { width: 100%; max-width: 280px; }
        }
      `}</style>

      <div className="services-wrapper">
        <h1>Nossos Serviços</h1>
        <p className="sub">Soluções personalizadas para cada ambiente</p>

        <div className="grid">
          {services.map(s => (
            <div key={s.id} className="card">
              <div className="img-box">
                <img src={s.image} alt={s.title} />
                <div className="icon-box">{s.icon}</div>
              </div>
              <div className="content">
                <h2>{s.title}</h2>
                <div className="benefit">
                  <h3><span>✨</span> Benefício</h3>
                  <p>{s.benefit}</p>
                </div>
                <div className="quality">
                  <h3><span>🏆</span> Qualidade</h3>
                  <p>{s.quality}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="cta">
          <h3>Venha nos conhecer!</h3>
          <p>Faça um orçamento sem compromisso e descubra como podemos transformar seu espaço</p>
          <div className="cta-buttons">
            <button className="btn-orcamento" onClick={() => navigate('/contato')}>Fazer orçamento</button>
            <button className="btn-whatsapp" onClick={() => window.open('https://wa.me/5581994732981', '_blank')}>
              <i className="fab fa-whatsapp"></i> WhatsApp
            </button>
          </div>
        </div>
      </div>

      <BackToTop />
    </div>
  );
};

export default ServicesPage;
