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
          </
