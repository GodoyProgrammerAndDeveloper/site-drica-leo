import React, { useState, useEffect } from "react";
import { galleryData, galleryCategories } from "../data/galleryData";
import BackToTop from "../components/BackToTop";

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentPath, setCurrentPath] = useState('/galeria');

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const filteredImages = selectedCategory === 'todos' 
    ? galleryData 
    : galleryData.filter(img => img.category === selectedCategory);

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
          font-size: 2.5rem;
          color: #4361ee;
          text-align: center;
          margin: 20px 0 10px 0;
        }
        .sub {
          font-size: 1.2rem;
          color: #2d2d44;
          text-align: center;
          margin-bottom: 40px;
        }
        .categories {
          display: flex;
          gap: 10px;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 40px;
        }
        .category-btn {
          padding: 10px 20px;
          border: 2px solid;
          border-radius: 30px;
          cursor: pointer;
          font-size: 1rem;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.2s;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
          margin-bottom: 40px;
        }
        .card {
          background: white;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          cursor: pointer;
          transition: transform 0.2s;
        }
        .card:hover {
          transform: translateY(-5px);
        }
        .card img {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }
        .card-content {
          padding: 15px;
        }
        .card-content h3 {
          color: #4361ee;
          margin-bottom: 5px;
        }
        .card-content p {
          color: #2d2d44;
          font-size: 0.9rem;
        }
        .modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          cursor: pointer;
        }
        .modal-content {
          position: relative;
          max-width: 90%;
          max-height: 90%;
        }
        .modal-close {
          position: absolute;
          top: -40px;
          right: 0;
          font-size: 2rem;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
        }
        .modal img {
          max-width: 100%;
          max-height: 80vh;
          border-radius: 10px;
        }
        @media (max-width: 768px) {
          .grid {
            grid-template-columns: 1fr;
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
      `}</style>

      <h1>Galeria de Trabalhos</h1>
      <p className="sub">Antes e depois de nossos projetos</p>

      {/* CATEGORIAS */}
      <div className="categories">
        {galleryCategories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className="category-btn"
            style={{
              borderColor: selectedCategory === cat.id ? '#4361ee' : '#e9ecef',
              background: selectedCategory === cat.id ? '#4361ee' : 'white',
              color: selectedCategory === cat.id ? 'white' : '#2d2d44'
            }}
          >
            <span>{cat.icon}</span> {cat.label}
          </button>
        ))}
      </div>

      {/* GRADE DE FOTOS */}
      <div className="grid">
        {filteredImages.map(item => (
          <div key={item.id} className="card" onClick={() => setSelectedImage(item)}>
            <img src={item.image} alt={item.title} />
            <div className="card-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedImage(null)}>✕</button>
            <img src={selectedImage.image} alt={selectedImage.title} />
          </div>
        </div>
      )}

      {/* BOTÃO VOLTAR AO TOPO */}
      <BackToTop />
    </div>
  );
};

export default GalleryPage;
