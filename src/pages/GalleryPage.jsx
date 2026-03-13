import React, { useState } from "react";
import { galleryData, galleryCategories } from "../data/galleryData";

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = selectedCategory === 'todos' 
    ? galleryData 
    : galleryData.filter(img => img.category === selectedCategory);

  return (
    <div style={{ padding: '100px 20px 40px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5rem', color: '#8b5cf6', textAlign: 'center', marginBottom: '20px' }}>
        Nossa Galeria
      </h1>
      <p style={{ fontSize: '1.2rem', color: '#666', textAlign: 'center', marginBottom: '40px' }}>
        Conheça alguns dos nossos trabalhos
      </p>

      {/* CATEGORIAS */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center', marginBottom: '40px' }}>
        {galleryCategories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            style={{
              padding: '10px 20px',
              border: '2px solid',
              borderColor: selectedCategory === cat.id ? '#8b5cf6' : '#e5e7eb',
              background: selectedCategory === cat.id ? '#8b5cf6' : 'white',
              color: selectedCategory === cat.id ? 'white' : '#666',
              borderRadius: '30px',
              cursor: 'pointer',
              fontSize: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <span>{cat.icon}</span>
            <span>{cat.label}</span>
          </button>
        ))}
      </div>

      {/* GRADE DE IMAGENS */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
        gap: '20px'
      }}>
        {filteredImages.map(item => (
          <div 
            key={item.id}
            onClick={() => setSelectedImage(item)}
            style={{
              background: 'white',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              cursor: 'pointer'
            }}
          >
            <img 
              src={item.image} 
              alt={item.title}
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover'
              }}
            />
            <div style={{ padding: '15px' }}>
              <h3 style={{ color: '#8b5cf6', marginBottom: '5px' }}>{item.title}</h3>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedImage && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0,0,0,0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2000
          }}
          onClick={() => setSelectedImage(null)}
        >
          <div
            style={{
              background: 'white',
              maxWidth: '800px',
              width: '90%',
              maxHeight: '90vh',
              overflow: 'auto',
              borderRadius: '12px',
              position: 'relative'
            }}
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              style={{
                position: 'absolute',
                top: '10px',
                right: '15px',
                fontSize: '2rem',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#666',
                zIndex: 10
              }}
            >
              ×
            </button>
            <img 
              src={selectedImage.image} 
              alt={selectedImage.title}
              style={{
                width: '100%',
                maxHeight: '500px',
                objectFit: 'cover'
              }}
            />
            <div style={{ padding: '20px' }}>
              <h2 style={{ color: '#8b5cf6', marginBottom: '10px' }}>{selectedImage.title}</h2>
              <p style={{ color: '#666' }}>{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
