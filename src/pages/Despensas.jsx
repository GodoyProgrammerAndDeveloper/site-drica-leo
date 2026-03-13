import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Despensas() {
  const navigate = useNavigate();
  const [imagemSelecionada, setImagemSelecionada] = useState(null);

  const galeria = [
    {
      id: 1,
      titulo: 'Despensa 1',
      antes: '/images/Despensa Antes_01.jpeg',
      depois: '/images/Despensa Depois_01.jpeg',
      descricao: 'Organização de despensa - Projeto 1',
      local: 'Recife - PE'
    },
    {
      id: 2,
      titulo: 'Despensa 2',
      antes: '/images/Despensa Antes_02.jpeg',
      depois: '/images/Despensa Depois_02.jpeg',
      descricao: 'Organização de despensa - Projeto 2',
      local: 'Olinda - PE'
    }
  ];

  return (
    <div className="servico-page">
      <div className="servico-header" style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#1f618d', marginBottom: '1rem' }}>
          <i className="fas fa-boxes" style={{ marginRight: '1rem' }}></i>
          Despensa e Estoque
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#2874a6', borderLeft: '4px solid #85c1e9', paddingLeft: '1rem' }}>
          Organização profissional para sua despensa
        </p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '2rem',
        marginBottom: '3rem'
      }}>
        {galeria.map((item) => (
          <div 
            key={item.id}
            onClick={() => setImagemSelecionada(item)}
            style={{
              background: 'white',
              borderRadius: '20px',
              overflow: 'hidden',
              cursor: 'pointer',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px' }}>
              <div style={{ position: 'relative' }}>
                <img 
                  src={item.antes} 
                  alt="Antes" 
                  style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/300x200/ff4444/ffffff?text=Erro';
                  }}
                />
                <span style={{
                  position: 'absolute',
                  top: '10px',
                  left: '10px',
                  background: 'rgba(255,0,0,0.8)',
                  color: 'white',
                  padding: '3px 10px',
                  borderRadius: '50px',
                  fontSize: '0.8rem'
                }}>Antes</span>
              </div>
              <div style={{ position: 'relative' }}>
                <img 
                  src={item.depois} 
                  alt="Depois" 
                  style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/300x200/27ae60/ffffff?text=Erro';
                  }}
                />
                <span style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  background: 'rgba(0,128,0,0.8)',
                  color: 'white',
                  padding: '3px 10px',
                  borderRadius: '50px',
                  fontSize: '0.8rem'
                }}>Depois</span>
              </div>
            </div>
            <div style={{ padding: '1.5rem' }}>
              <h3 style={{ color: '#1f618d', marginBottom: '0.5rem' }}>{item.titulo}</h3>
              <p style={{ color: '#2874a6', marginBottom: '0.5rem' }}>{item.descricao}</p>
              <p style={{ fontSize: '0.9rem', color: '#1f618d' }}>
                <i className="fas fa-map-marker-alt"></i> {item.local}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="btn-group" style={{ justifyContent: 'center', marginTop: '2rem' }}>
        <button className="btn-schedule" onClick={() => navigate('/consultoria')}>
          <i className="fas fa-calendar-check"></i> Agendar consultoria
        </button>
      </div>

      {imagemSelecionada && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.9)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '2rem'
        }} onClick={() => setImagemSelecionada(null)}>
          <div style={{
            background: 'white',
            padding: '2rem',
            borderRadius: '30px',
            maxWidth: '1000px',
            width: '90%',
            maxHeight: '90vh',
            overflow: 'auto'
          }} onClick={e => e.stopPropagation()}>
            <button
              className="btn-back"
              onClick={() => setImagemSelecionada(null)}
              style={{ marginBottom: '1rem' }}
            >
              <i className="fas fa-arrow-left"></i> Voltar
            </button>
            <h2 style={{ color: '#1f618d', marginBottom: '1rem' }}>{imagemSelecionada.titulo}</h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '2rem',
              marginBottom: '2rem'
            }}>
              <div>
                <img src={imagemSelecionada.antes} alt="Antes" style={{ width: '100%', borderRadius: '15px' }} />
                <p style={{ textAlign: 'center', marginTop: '0.5rem', color: 'red', fontWeight: 'bold' }}>Antes</p>
              </div>
              <div>
                <img src={imagemSelecionada.depois} alt="Depois" style={{ width: '100%', borderRadius: '15px' }} />
                <p style={{ textAlign: 'center', marginTop: '0.5rem', color: 'green', fontWeight: 'bold' }}>Depois</p>
              </div>
            </div>
            <p><strong>Descrição:</strong> {imagemSelecionada.descricao}</p>
            <p><strong>Local:</strong> {imagemSelecionada.local}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Despensas;