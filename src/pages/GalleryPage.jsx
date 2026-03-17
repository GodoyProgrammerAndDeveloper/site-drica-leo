import React, { useState, useEffect, useCallback, useMemo } from "react";
import BackToTop from "../components/BackToTop";
import { galleryMediaItems, galleryCategories } from "../data/galleryItems";

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [currentPath] = useState(window.location.pathname);

  // Fecha modal ao pressionar ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && selectedMedia) {
        setSelectedMedia(null);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedMedia]);

  // Filtra mídia por categoria - memoizado para performance
  const filteredMedia = useMemo(() => {
    return selectedCategory === 'todos' 
      ? galleryMediaItems 
      : galleryMediaItems.filter(item => item.category === selectedCategory);
  }, [selectedCategory]);

  // Callbacks otimizados
  const handleCategoryChange = useCallback((categoryId) => {
    setSelectedCategory(categoryId);
  }, []);

  const handleMediaClick = useCallback((item) => {
    setSelectedMedia(item);
  }, []);

  const handleCloseModal = useCallback((e) => {
    if (e.target === e.currentTarget) {
      setSelectedMedia(null);
    }
  }, []);

  const handleCloseButton = useCallback(() => {
    setSelectedMedia(null);
  }, []);

  return (
    <div style={{ padding: "0", maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
      {/* HEADER FIXO */}
      <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        width: "100%",
        background: "white",
        padding: "clamp(8px, 2vw, 12px) clamp(10px, 3vw, 20px)",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        zIndex: 999,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "clamp(8px, 2vw, 15px)"
      }}>
        {/* LOGO E TÍTULO */}
        <div style={{ display: "flex", alignItems: "center", gap: "clamp(6px, 2vw, 10px)", minWidth: "fit-content" }}>
          <img 
            src="/images/logo.png" 
            alt="Drica & Léo" 
            style={{ 
              width: "clamp(30px, 6vw, 40px)", 
              height: "clamp(30px, 6vw, 40px)", 
              borderRadius: "50%", 
              objectFit: "cover",
              flexShrink: 0
            }}
          />
          <div style={{ minWidth: 0 }}>
            <h2 style={{ 
              margin: 0, 
              fontSize: "clamp(0.9rem, 3vw, 1.1rem)", 
              color: "#4361ee",
              fontWeight: "700",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis"
            }}>
              Drica & Léo
            </h2>
            <p style={{ 
              margin: 0, 
              fontSize: "clamp(0.55rem, 1.5vw, 0.7rem)", 
              color: "#f72585",
              fontWeight: "500",
              whiteSpace: "nowrap"
            }}>
              Personal Organizer
            </p>
          </div>
        </div>

        {/* NAVEGAÇÃO E BOTÕES */}
        <div style={{ 
          display: "flex", 
          alignItems: "center", 
          gap: "clamp(8px, 2vw, 15px)", 
          flexWrap: "wrap",
          justifyContent: "flex-end",
          flex: 1,
          minWidth: 0
        }}>
          {/* LINKS DE NAVEGAÇÃO */}
          <div style={{ 
            display: "flex", 
            gap: "clamp(6px, 1.5vw, 12px)", 
            alignItems: "center",
            flexWrap: "wrap",
            justifyContent: "flex-end"
          }}>
            <a href="/" style={{ 
              textDecoration: "none", 
              color: currentPath === '/' ? '#4361ee' : '#2d2d44', 
              fontWeight: currentPath === '/' ? '600' : '500', 
              fontSize: "clamp(0.7rem, 1.8vw, 0.8rem)",
              transition: "color 0.2s ease",
              whiteSpace: "nowrap"
            }}>
              Início
            </a>
            <a href="/servicos" style={{ 
              textDecoration: "none", 
              color: currentPath === '/servicos' ? '#4361ee' : '#2d2d44', 
              fontWeight: currentPath === '/servicos' ? '600' : '500', 
              fontSize: "clamp(0.7rem, 1.8vw, 0.8rem)",
              transition: "color 0.2s ease",
              whiteSpace: "nowrap"
            }}>
              Serviços
            </a>
            <a href="/sobre" style={{ 
              textDecoration: "none", 
              color: currentPath === '/sobre' ? '#4361ee' : '#2d2d44', 
              fontWeight: currentPath === '/sobre' ? '600' : '500', 
              fontSize: "clamp(0.7rem, 1.8vw, 0.8rem)",
              transition: "color 0.2s ease",
              whiteSpace: "nowrap"
            }}>
              Sobre
            </a>
            <a href="/galeria" style={{ 
              textDecoration: "none", 
              color: currentPath === '/galeria' ? '#4361ee' : '#2d2d44', 
              fontWeight: currentPath === '/galeria' ? '600' : '500', 
              fontSize: "clamp(0.7rem, 1.8vw, 0.8rem)",
              transition: "color 0.2s ease",
              whiteSpace: "nowrap"
            }}>
              Galeria
            </a>
            <a href="/contato" style={{ 
              textDecoration: "none", 
              color: currentPath === '/contato' ? '#4361ee' : '#2d2d44', 
              fontWeight: currentPath === '/contato' ? '600' : '500', 
              fontSize: "clamp(0.7rem, 1.8vw, 0.8rem)",
              transition: "color 0.2s ease",
              whiteSpace: "nowrap"
            }}>
              Contato
            </a>
          </div>

          {/* BOTÕES DE AÇÃO */}
          <div style={{ 
            display: "flex", 
            flexDirection: "column", 
            alignItems: "flex-end", 
            gap: "clamp(3px, 1vw, 5px)",
            minWidth: "fit-content"
          }}>
            <div style={{ 
              display: "flex", 
              gap: "clamp(4px, 1vw, 6px)",
              flexWrap: "wrap",
              justifyContent: "flex-end"
            }}>
              <a href="https://wa.me/5581994732981" target="_blank" rel="noopener noreferrer" style={{
                background: "#25d366",
                color: "white",
                padding: "clamp(3px, 1vw, 5px) clamp(6px, 1.5vw, 10px)",
                borderRadius: "20px",
                textDecoration: "none",
                fontWeight: "600",
                fontSize: "clamp(0.6rem, 1.5vw, 0.75rem)",
                display: "flex",
                alignItems: "center",
                gap: "3px",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                whiteSpace: "nowrap",
                minHeight: "32px"
              }}>
                <i className="fab fa-whatsapp"></i> <span style={{ display: "none" }} className="hide-phone">WhatsApp</span>
              </a>
              <a href="https://instagram.com/adrianamoura.organizer" target="_blank" rel="noopener noreferrer" style={{
                background: "linear-gradient(45deg, #f09433, #d62976, #962fbf, #4f5bd5)",
                color: "white",
                padding: "clamp(3px, 1vw, 5px) clamp(6px, 1.5vw, 10px)",
                borderRadius: "20px",
                textDecoration: "none",
                fontWeight: "600",
                fontSize: "clamp(0.6rem, 1.5vw, 0.75rem)",
                display: "flex",
                alignItems: "center",
                gap: "3px",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                whiteSpace: "nowrap",
                minHeight: "32px"
              }}>
                <i className="fab fa-instagram"></i> <span style={{ display: "none" }} className="hide-phone">Instagram</span>
              </a>
            </div>
            <div style={{
              background: "linear-gradient(135deg, #4361ee, #f72585)",
              color: "white",
              padding: "clamp(2px, 0.8vw, 4px) clamp(6px, 1.5vw, 10px)",
              borderRadius: "20px",
              fontSize: "clamp(0.55rem, 1.2vw, 0.7rem)",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              gap: "3px",
              whiteSpace: "nowrap",
              border: "1px solid white",
              minHeight: "28px"
            }}>
              <span style={{ fontSize: "clamp(0.65rem, 1.3vw, 0.8rem)" }}>🏆</span> <span style={{ display: "none" }} className="hide-phone">Certificado</span>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 480px) {
            .hide-phone {
              display: none !important;
            }
          }
          
          @media (min-width: 481px) {
            .hide-phone {
              display: inline !important;
            }
          }
        `}</style>
      </div>

      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: #FAF7F2; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
        
        .gallery-wrapper { 
          padding-top: clamp(110px, 15vw, 150px); 
          width: 100%; 
          max-width: 1400px;
          margin: 0 auto;
          overflow-x: hidden; 
        }
        
        h1 { 
          font-size: clamp(1.5rem, 5vw, 2.5rem); 
          color: #4361ee; 
          text-align: center; 
          margin: 15px 0 8px 0;
          font-weight: 700;
        }
        
        .sub { 
          font-size: clamp(0.95rem, 3vw, 1.1rem); 
          color: #2d2d44; 
          text-align: center; 
          margin: 0 12px 25px 12px;
          line-height: 1.5;
        }
        
        .categories { 
          display: flex; 
          gap: clamp(6px, 2vw, 12px); 
          justify-content: center; 
          flex-wrap: wrap; 
          margin: 0 12px 35px 12px; 
          align-items: center;
        }
        
        .category-btn { 
          padding: clamp(6px, 1.5vw, 10px) clamp(10px, 2vw, 16px); 
          border: 2px solid; 
          border-radius: 25px; 
          cursor: pointer; 
          font-size: clamp(0.75rem, 2.2vw, 0.95rem); 
          display: flex; 
          align-items: center; 
          gap: 4px; 
          transition: all 0.2s ease;
          background: white;
          font-weight: 500;
          white-space: nowrap;
          flex-shrink: 0;
        }
        
        .category-btn:hover { 
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(67, 97, 238, 0.15);
        }
        
        .category-btn:active {
          transform: translateY(0);
        }
        
        .grid { 
          display: grid; 
          grid-template-columns: repeat(auto-fill, minmax(clamp(160px, 40vw, 280px), 1fr)); 
          gap: clamp(12px, 3vw, 20px); 
          margin: 0 12px 40px 12px;
        }
        
        .card { 
          background: white; 
          border-radius: 12px; 
          overflow: hidden; 
          box-shadow: 0 3px 12px rgba(67,97,238,0.08); 
          cursor: pointer; 
          transition: all 0.25s ease;
          display: flex;
          flex-direction: column;
        }
        
        .card:hover { 
          transform: translateY(-6px);
          box-shadow: 0 8px 24px rgba(67,97,238,0.15);
        }
        
        .card:active {
          transform: translateY(-3px);
        }
        
        .media-container { 
          position: relative; 
          width: 100%; 
          padding-top: 56.25%; 
          overflow: hidden; 
          background: linear-gradient(135deg, #f0f0f0 0%, #e8e8e8 100%);
        }
        
        .media-container img, 
        .media-container video { 
          position: absolute; 
          top: 0; 
          left: 0; 
          width: 100%; 
          height: 100%; 
          object-fit: cover;
        }
        
        .play-icon { 
          position: absolute; 
          top: 50%; 
          left: 50%; 
          transform: translate(-50%, -50%); 
          width: clamp(35px, 8vw, 55px);
          height: clamp(35px, 8vw, 55px);
          background: rgba(67,97,238,0.85);
          backdrop-filter: blur(2px);
          border-radius: 50%; 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          color: white; 
          font-size: clamp(1rem, 3vw, 1.8rem);
          z-index: 2;
          transition: all 0.2s ease;
        }
        
        .card:hover .play-icon {
          background: rgba(67,97,238,0.95);
          transform: translate(-50%, -50%) scale(1.1);
        }
        
        .card-content { 
          padding: clamp(10px, 3vw, 16px);
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }
        
        .card-content h3 { 
          color: #4361ee; 
          margin-bottom: 6px; 
          font-size: clamp(0.85rem, 2.5vw, 1.15rem);
          font-weight: 600;
          line-height: 1.3;
          word-wrap: break-word;
        }
        
        .card-content p { 
          color: #2d2d44; 
          font-size: clamp(0.75rem, 2vw, 0.9rem);
          line-height: 1.4;
          margin-bottom: 6px;
          flex-grow: 1;
        }
        
        .video-badge {
          font-size: clamp(0.7rem, 1.8vw, 0.8rem);
          color: #f72585;
          margin-top: auto;
          font-weight: 500;
        }
        
        .modal { 
          position: fixed; 
          top: 0; 
          left: 0; 
          width: 100%; 
          height: 100%; 
          background: rgba(0,0,0,0.95); 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          z-index: 2000; 
          cursor: pointer;
          padding: 12px;
        }
        
        .modal-content { 
          position: relative; 
          max-width: 95vw;
          max-height: 90vh;
          width: 100%;
        }
        
        .modal-close { 
          position: absolute; 
          top: -38px; 
          right: 0; 
          font-size: clamp(1.5rem, 5vw, 2.2rem); 
          background: none; 
          border: none; 
          color: white; 
          cursor: pointer;
          padding: 5px;
          transition: transform 0.2s ease;
          z-index: 2001;
        }
        
        .modal-close:hover {
          transform: scale(1.2);
        }
        
        .modal-close:active {
          transform: scale(1);
        }
        
        .modal video, 
        .modal img { 
          max-width: 100%; 
          max-height: 85vh;
          width: auto;
          height: auto;
          display: block;
          margin: 0 auto;
          border-radius: 10px;
        }
        
        /* MOBILE FIRST - Dispositivos pequenos (320px+) */
        @media (max-width: 480px) {
          .gallery-wrapper { 
            padding-top: 130px;
          }
          
          h1 {
            margin: 12px 0 6px 0;
          }
          
          .sub {
            margin: 0 10px 20px 10px;
            font-size: 0.9rem;
          }
          
          .categories { 
            margin: 0 10px 25px 10px;
            gap: 8px;
          }
          
          .category-btn {
            padding: 6px 10px;
            font-size: 0.8rem;
            border-radius: 20px;
          }
          
          .grid { 
            grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
            gap: 12px; 
            margin: 0 10px 30px 10px;
          }
          
          .card-content {
            padding: 10px;
          }
          
          .card-content h3 {
            font-size: 0.85rem;
            margin-bottom: 4px;
          }
          
          .card-content p {
            font-size: 0.75rem;
            margin-bottom: 4px;
          }
          
          .modal {
            padding: 10px;
          }
          
          .modal-close {
            top: -35px;
            font-size: 1.8rem;
          }
        }
        
        /* Tablets pequenos (481px - 600px) */
        @media (min-width: 481px) and (max-width: 600px) {
          .gallery-wrapper { 
            padding-top: 130px;
          }
          
          .grid { 
            grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
            gap: 14px; 
            margin: 0 12px 35px 12px;
          }
          
          .categories {
            margin: 0 12px 28px 12px;
          }
        }
        
        /* Tablets médios (601px - 768px) */
        @media (min-width: 601px) and (max-width: 768px) {
          .gallery-wrapper { 
            padding-top: 120px;
          }
          
          .grid { 
            grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
            gap: 16px;
            margin: 0 16px 40px 16px;
          }
          
          .categories {
            margin: 0 16px 32px 16px;
          }
        }
        
        /* Tablets grandes e computadores pequenos (769px - 1024px) */
        @media (min-width: 769px) and (max-width: 1024px) {
          .gallery-wrapper { 
            padding-top: 110px;
          }
          
          .grid { 
            grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
            gap: 18px;
            margin: 0 20px 45px 20px;
          }
          
          .categories {
            margin: 0 20px 35px 20px;
          }
        }
        
        /* Computadores (1025px+) */
        @media (min-width: 1025px) {
          .gallery-wrapper { 
            padding-top: 100px;
          }
          
          .grid { 
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 20px;
            margin: 0 30px 50px 30px;
          }
          
          .categories {
            margin: 0 30px 40px 30px;
            gap: 12px;
          }
        }
        
        /* Telas ultra largas (2560px+) */
        @media (min-width: 2560px) {
          .gallery-wrapper {
            max-width: 1800px;
          }
          
          .grid {
            grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
            gap: 24px;
          }
          
          h1 {
            font-size: 2.8rem;
          }
          
          .sub {
            font-size: 1.3rem;
          }
        }
        
        /* Otimizações para orientação landscape */
        @media (orientation: landscape) and (max-height: 500px) {
          .gallery-wrapper {
            padding-top: 75px;
          }
          
          h1 {
            margin: 8px 0 4px 0;
            font-size: 1.5rem;
          }
          
          .sub {
            margin: 0 10px 15px 10px;
            font-size: 0.85rem;
          }
          
          .categories {
            margin: 0 10px 15px 10px;
            gap: 6px;
          }
          
          .grid {
            gap: 12px;
            margin: 0 10px 20px 10px;
          }
        }
        
        /* Melhoria de acessibilidade para toque */
        @media (hover: none) and (pointer: coarse) {
          .category-btn,
          .card,
          .modal-close {
            min-height: 44px;
            min-width: 44px;
          }
          
          .card {
            box-shadow: 0 2px 8px rgba(67,97,238,0.1);
          }
        }
      `}</style>

      <div className="gallery-wrapper">
        <h1>Galeria de Trabalhos</h1>
        <p className="sub">Antes e depois de nossos projetos</p>

        <div className="categories">
          {galleryCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className="category-btn"
              aria-pressed={selectedCategory === cat.id}
              title={`Filtrar por ${cat.label}`}
              style={{
                borderColor: selectedCategory === cat.id ? '#4361ee' : '#e9ecef',
                background: selectedCategory === cat.id ? '#4361ee' : 'white',
                color: selectedCategory === cat.id ? 'white' : '#2d2d44'
              }}
            >
              <span aria-hidden="true">{cat.icon}</span> {cat.label}
            </button>
          ))}
        </div>

        <div className="grid">
          {filteredMedia.map(item => (
            <div 
              key={item.id} 
              className="card" 
              onClick={() => handleMediaClick(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleMediaClick(item);
                }
              }}
              aria-label={`${item.title}, ${item.description}`}
            >
              <div className="media-container">
                {item.type === 'video' ? (
                  <>
                    <img 
                      src={item.thumbnail} 
                      alt={item.title}
                      loading="lazy"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = item.fallbackThumbnail;
                      }}
                    />
                    <div className="play-icon" aria-hidden="true">▶</div>
                  </>
                ) : (
                  <img 
                    src={item.image} 
                    alt={item.title}
                    loading="lazy"
                  />
                )}
              </div>
              <div className="card-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                {item.type === 'video' && (
                  <p className="video-badge">
                    🎥 Vídeo
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {selectedMedia && (
          <div 
            className="modal" 
            onClick={handleCloseModal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <button 
                className="modal-close" 
                onClick={handleCloseButton}
                aria-label="Fechar"
                title="Fechar (ESC)"
              >
                ✕
              </button>
              {selectedMedia.type === 'video' ? (
                <video 
                  controls 
                  autoPlay
                  aria-label={selectedMedia.title}
                >
                  <source src={selectedMedia.videoUrl} type="video/mp4" />
                  Seu navegador não suporta vídeos.
                </video>
              ) : (
                <img 
                  src={selectedMedia.image} 
                  alt={selectedMedia.title}
                  id="modal-title"
                />
              )}
            </div>
          </div>
        )}
      </div>

      <BackToTop />
    </div>
  );
};

export default GalleryPage;