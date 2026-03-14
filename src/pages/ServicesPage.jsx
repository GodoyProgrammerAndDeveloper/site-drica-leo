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
          padding-top: 80px;
        }
        h1 {
          font-size: 3rem;
          color: #4361ee;
          text-align: center;
          margin: 20px 0 10px 0;
        }
        .sub {
          font-size: 1.3rem;
          color: #f72585;
          text-align: center;
          margin: 0 0 50px 0;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
          margin-bottom: 60px;
        }
        .card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(67, 97, 238, 0.1);
        }
        .img-box {
          height: 250px;
          position: relative;
          overflow: hidden;
        }
        .img-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .icon-box {
          position: absolute;
          bottom: -30px;
          right: 20px;
          width: 70px;
          height: 70px;
          background: #4361ee;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          color: white;
          border: 4px solid white;
          z-index: 2;
        }
        .content {
          padding: 40px 25px 25px;
        }
        h2 {
          font-size: 2rem;
          color: #4361ee;
          text-align: center;
          margin: 0 0 20px 0;
          font-weight: bold;
        }
        .benefit, .quality {
          padding: 20px;
          border-radius: 15px;
          margin-bottom: 15px;
        }
        .benefit {
          background: #f8f9fa;
        }
        .quality {
          background: #eef2ff;
        }
        .benefit h3, .quality h3 {
          display: flex;
          align-items: center;
          gap: 8px;
          margin: 0 0 10px 0;
          font-size: 1.2rem;
          white-space: nowrap;
        }
        .benefit h3 {
          color: #f72585;
        }
        .quality h3 {
          color: #4361ee;
        }
        .benefit p, .quality p {
          margin: 0;
          line-height: 1.6;
          color: #2d2d44;
          font-size: 1rem;
          word-break: break-word;
        }
        .cta {
          text-align: center;
          padding: 60px 40px;
          background: linear-gradient(135deg, #4361ee, #f72585);
          border-radius: 30px;
          color: white;
          margin-top: 40px;
        }
        .cta h3 {
          font-size: 2.5rem;
          margin-bottom: 15px;
        }
        .cta p {
          font-size: 1.2rem;
          margin-bottom: 30px;
        }
        .cta-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .cta-buttons button {
          padding: 15px 40px;
          border: none;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: bold;
          cursor: pointer;
          transition: transform 0.2s;
        }
        .cta-buttons button:hover {
          transform: scale(1.05);
        }
        .btn-orcamento {
          background: white;
          color: #4361ee;
        }
        .btn-whatsapp {
          background: transparent;
          color: white;
          border: 2
