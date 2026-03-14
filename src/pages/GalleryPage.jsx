import React, { useState } from 'react';
import { galleryData, galleryCategories } from '../data/galleryData';

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = selectedCategory === 'todos' 
    ? galleryData 
    : galleryData.filter(img => img.category === selectedCategory);

  return (
    <div style={{ padding: '100px 20px 40px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', color: '#4361ee', fontSize: '2.5rem', marginBottom: '10px' }}>Galeria</h1>
      <p style={{ textAlign: 'center', color: '#666', marginBottom: '40px' }}>Veja alguns dos nossos trabalhos</p>
      
      <div style={{ 
        display: 'flex', 
        gap: '10px', 
        justifyContent: 'center', 
        flexWrap: 'wrap', 
        marginBottom: '30px' 
      }}>
        {galleryCategories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            style={{
              padding: '10px 20px',
              background: selectedCategory === cat.id ? '#4361ee' : 'white',
              color: selectedCategory === cat.id ? 'white' : '#4361ee',
              border: '2px solid #4361ee',
              borderRadius: '30px',
              cursor: 'pointer',
              fontSize: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '5px'
            }}
          >
            <span>{cat.icon}</span> {cat.label}
          </button>
        ))}
      </div>

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
              borderRadius: '15px',
              overflow: 'hidden',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
              cursor: 'pointer',
              transition: 'transform 0.2s'
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
              <h3 style={{ color: '#4361ee', marginBottom: '5px' }}>{item.title}</h3>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0,0,0,0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2000,
            cursor: 'pointer'
          }}
          onClick={() => setSelectedImage(null)}
        >
          <div
            style={{
              position: 'relative',
              maxWidth: '90%',
              maxHeight: '90%'
            }}
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              style={{
                position: 'absolute',
                top: '-40px',
                right: '0',
                fontSize: '2rem',
                background: 'none',
                border: 'none',
                color: 'white',
                cursor: 'pointer'
              }}
            >
              ✕
            </button>
            <img 
              src={selectedImage.image} 
              alt={selectedImage.title}
              style={{
                maxWidth: '100%',
                maxHeight: '80vh',
                objectFit: 'contain',
                borderRadius: '10px'
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
