import React, { useState, useEffect } from "react";
import BackToTop from "../components/BackToTop";

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [currentPath, setCurrentPath] = useState('/galeria');

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const mediaItems = [
    // VÍDEOS
    {
      id: 1,
      type: 'video',
      thumbnail: '/images/thumbnail-guarda-roupas.jpg',
      videoUrl: '/videos/guarda-roupas.mp4',
      title: 'Guarda-roupas Antes/Depois',
      description: 'Processo completo de organização',
      category: 'guarda-roupas'
    },
    {
      id: 2,
      type: 'video',
      thumbnail: '/images/thumbnail-cozinha.jpg',
      videoUrl: '/videos/cozinha.mp4',
      title: 'Cozinha Organizada',
      description: 'Transformação da despensa',
      category: 'cozinha'
    },
    {
      id: 3,
      type: 'video',
      thumbnail: '/images/thumbnail-escritorio.jpg',
      videoUrl: '/videos/escritorio.mp4',
      title: 'Home Office Produtivo',
      description: 'Organização completa',
      category: 'escritorio'
    },
    // IMAGENS
    {
      id: 4,
      type: 'image',
      image: '/images/Cabide Roupoas Masculinas.jpeg',
      title: 'Guarda-roupas Masculino',
      description: 'Organização completa',
      category: 'guarda-roupas'
    },
    {
      id: 5,
      type: 'image',
      image: '/images/Louça organizada_01.jpeg',
      title: 'Louça Organizada',
      description: 'Cozinha funcional',
      category: 'cozinha'
    },
    {
      id: 6,
      type: 'image',
      image: '/images/Papelaria Depois.jpeg',
      title: 'Papelaria Organizada',
      description: 'Escritório em ordem',
      category: 'escritorio'
    },
    {
      id: 7,
      type: 'image',
      image: '/images/Organização comeias frente Depois.jpeg',
      title: 'Organização com Colmeias',
      description: 'Técnica profissional',
      category: 'organizacao'
    },
    {
      id: 8,
      type: 'image',
      image: '/images/Roupas Depois.jpeg',
      title: 'Roupas Organizadas',
      description: 'Antes e depois',
      category: 'guarda-roupas'
    },
    {
      id: 9,
      type: 'image',
      image: '/images/Sapatos Depois.jpeg',
      title: 'Sapatos Organizados',
      description: 'Coleção organizada',
      category: 'sapatos'
    }
  ];

  const categories = [
    { id: 'todos', label: 'Todos', icon: '📋' },
    { id: 'guarda-roupas', label: 'Guarda-roupas', icon: '👗' },
    { id: 'cozinha', label: 'Cozinhas', icon: '🍳' },
    { id: 'escritorio', label: 'Escritórios', icon: '💻' },
    { id: 'organizacao', label: 'Organização', icon: '✨' },
    { id: 'sapatos', label: 'Sapatos', icon: '👠' }
  ];

  const filteredMedia = selectedCategory === 'todos' 
    ? mediaItems 
    : mediaItems.filter(item => item.category === selectedCategory);

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
        .gallery-wrapper { padding-top: 20px; width: 100%; }
        h1 { font-size: 2.5rem; color: #4361ee; text-align: center; margin: 20px 0 10px 0; }
        .sub { font-size: 1.2rem; color: #2d2d44; text-align: center; margin: 0 20px 40px 20px; }
        .categories { display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; margin: 0 20px 40px 20px; }
        .category-btn { padding: 8px 15px; border: 2px solid; border-radius: 30px; cursor: pointer; font-size: 0.95rem; display: flex; align-items: center; gap: 5px; transition: all 0.2s; background: white; }
        .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; margin: 0 20px 40px 20px; }
        .card { background: white; border-radius: 15px; overflow: hidden; box-shadow: 0 5px 15px rgba(67,97,238,0.1); cursor: pointer; transition: transform 0.2s; }
        .card:hover { transform: translateY(-5px); }
        .media-container { position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; background: #f0f0f0; }
        .media-container img, .media-container video { position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; }
        .play-icon { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 50px; height: 50px; background: rgba(67,97,238,0.9); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.5rem; z-index: 2; }
        .card-content { padding: 15px; }
        .card-content h3 { color: #4361ee; margin-bottom: 5px; font-size: 1.2rem; }
        .card-content p { color: #2d2d44; font-size: 0.95rem; }
        .modal { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.95); display: flex; align-items: center; justify-content: center; zIndex: 2000; cursor: pointer; }
        .modal-content { position: relative; max-width: 90%; max-height: 90%; }
        .modal-close { position: absolute; top: -40px; right: 0; font-size: 2rem; background: none; border: none; color: white; cursor: pointer; }
        .modal video, .modal img { max-width: 100%; max-height: 80vh; border-radius: 10px; }
        @media (max-width: 768px) {
          body { padding-top: 200px; }
          .categories { gap: 8px; margin: 0 15px 30px 15px; }
          .category-btn { padding: 6px 12px; }
          .grid { grid-template-columns: 1fr; gap: 15px; margin: 0 15px 30px 15px; }
          .play-icon { width: 40px; height: 40px; font-size: 1.2rem; }
        }
      `}</style>

      <div className="gallery-wrapper">
        <h1>Galeria de Trabalhos</h1>
        <p className="sub">Antes e depois de nossos projetos</p>

        <div className="categories">
          {categories.map(cat => (
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

        <div className="grid">
          {filteredMedia.map(item => (
            <div key={item.id} className="card" onClick={() => setSelectedMedia(item)}>
              <div className="media-container">
                {item.type === 'video' ? (
                  <>
                    <img src={item.thumbnail} alt={item.title} />
                    <div className="play-icon">▶</div>
                  </>
                ) : (
                  <img src={item.image} alt={item.title} />
                )}
              </div>
              <div className="card-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                {item.type === 'video' && <p style={{ fontSize: "0.8rem", color: "#f72585" }}>🎥 Vídeo</p>}
              </div>
            </div>
          ))}
        </div>

        {selectedMedia && (
          <div className="modal" onClick={() => setSelectedMedia(null)}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setSelectedMedia(null)}>✕</button>
              {selectedMedia.type === 'video' ? (
                <video controls autoPlay><source src={selectedMedia.videoUrl} type="video/mp4" /></video>
              ) : (
                <img src={selectedMedia.image} alt={selectedMedia.title} />
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
