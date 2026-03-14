import React from "react";
import { useNavigate } from "react-router-dom";

const ServicesPage = () => {
  const navigate = useNavigate();

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
    <div style={{ 
      padding: "100px 20px 40px", 
      maxWidth: "1200px", 
      margin: "0 auto",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    }}>
      {/* TÍTULO PRINCIPAL */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{ fontSize: "3rem", color: "#4361ee", marginBottom: "10px", fontWeight: "bold" }}>
          Nossos Serviços
        </h1>
        <p style={{ fontSize: "1.3rem", color: "#f72585" }}>
          Soluções personalizadas para cada ambiente
        </p>
      </div>

      {/* CARDS */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "30px", marginBottom: "60px" }}>
        {services.map((service) => (
          <div key={service.id} style={{
            background: "#fff",
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "0 10px 30px rgba(67, 97, 238, 0.1)",
            border: "1px solid #e9ecef"
          }}>
            {/* IMAGEM COM ÍCONE FLUTUANTE */}
            <div style={{ height: "250px", overflow: "hidden", position: "relative" }}>
              <img src={service.image} alt={service.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{
                position: "absolute",
                bottom: "-25px",
                right: "20px",
                width: "70px",
                height: "70px",
                background: "#4361ee",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "2.5rem",
                color: "white",
                border: "4px solid white",
                boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                zIndex: "10"
              }}>
                {service.icon}
              </div>
            </div>

            {/* CONTEÚDO */}
            <div style={{ padding: "40px 25px 25px 25px" }}>
              {/* TÍTULO DO SERVIÇO */}
              <h2 style={{ 
                fontSize: "2rem", 
                color: "#4361ee", 
                marginBottom: "20px",
                fontWeight: "bold",
                textAlign: "center"
              }}>
                {service.title}
              </h2>

              {/* BENEFÍCIO */}
              <div style={{ background: "#f8f9fa", padding: "20px", borderRadius: "12px", marginBottom: "15px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                  <span style={{ fontSize: "1.5rem" }}>✨</span>
                  <h3 style={{ fontSize: "1.2rem", color: "#f72585", margin: 0, fontWeight: "600" }}>Benefício</h3>
                </div>
                <p style={{ 
                  fontSize: "1rem", 
                  color: "#2d2d44", 
                  lineHeight: "1.6", 
                  margin: 0,
                  wordBreak: "break-word",
                  overflowWrap: "break-word"
                }}>
                  {service.benefit}
                </p>
              </div>

              {/* QUALIDADE */}
              <div style={{ background: "#eef2ff", padding: "20px", borderRadius: "12px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                  <span style={{ fontSize: "1.5rem" }}>🏆</span>
                  <h3 style={{ fontSize: "1.2rem", color: "#4361ee", margin: 0, fontWeight: "600" }}>Qualidade</h3>
                </div>
                <p style={{ 
                  fontSize: "1rem", 
                  color: "#2d2d44", 
                  lineHeight: "1.6", 
                  margin: 0,
                  wordBreak: "break-word",
                  overflowWrap: "break-word"
                }}>
                  {service.quality}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CHAMADA FINAL */}
      <div style={{
        textAlign: "center",
        padding: "50px 30px",
        background: "linear-gradient(135deg, #4361ee, #f72585)",
        borderRadius: "30px",
        color: "white"
      }}>
        <h2 style={{ fontSize: "2.2rem", marginBottom: "15px", fontWeight: "bold" }}>Venha nos conhecer!</h2>
        <p style={{ fontSize: "1.2rem", marginBottom: "25px" }}>Faça um orçamento sem compromisso</p>
        <div style={{ display: "flex", gap: "15px", justifyContent: "center", flexWrap: "wrap" }}>
          <button onClick={() => navigate('/contato')} style={{
            padding: "12px 30px",
            background: "white",
            color: "#4361ee",
            border: "none",
            borderRadius: "50px",
            fontSize: "1.1rem",
            fontWeight: "bold",
            cursor: "pointer"
          }}>
            Fazer orçamento
          </button>
          <button onClick={() => window.open('https://wa.me/5581994732981', '_blank')} style={{
            padding: "12px 30px",
            background: "transparent",
            color: "white",
            border: "2px solid white",
            borderRadius: "50px",
            fontSize: "1.1rem",
            fontWeight: "bold",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "8px"
          }}>
            <i className="fab fa-whatsapp"></i> WhatsApp
          </button>
        </div>
      </div>

      {/* CSS RESPONSIVO - CORREÇÃO DOS TEXTOS */}
      <style>{`
        @media (max-width: 768px) {
          div[style*="grid-template-columns: repeat(2, 1fr)"] {
            grid-template-columns: 1fr !important;
          }
          h1 { font-size: 2.5rem !important; }
          h2 { font-size: 1.5rem !important; }
          p {
            font-size: 0.95rem !important;
            word-break: break-word !important;
            white-space: normal !important;
            overflow: visible !important;
          }
          div[style*="display: flex; gap: 15px; justify-content: center"] {
            flex-direction: column !important;
            align-items: center !important;
          }
          button { width: 100% !important; max-width: 300px !important; }
        }
        @media (max-width: 480px) {
          h2 { font-size: 1.3rem !important; }
          p { font-size: 0.9rem !important; }
        }
      `}</style>
    </div>
  );
};

export default ServicesPage;
