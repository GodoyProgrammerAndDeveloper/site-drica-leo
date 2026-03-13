import { useState } from 'react';

function Galeria() {
  const [categoria, setCategoria] = useState('todos');
  const [imagemSelecionada, setImagemSelecionada] = useState(null);

  const projetos = [
    // Armários e Closets
    {
      id: 1,
      titulo: 'Closet Antes/Depois',
      antes: '/images/Closet Antes.jpeg',
      depois: '/images/Closet masculino.jpeg',
      descricao: 'Transformação de closet',
      categoria: 'Armários e Closets',
      local: 'Recife - PE'
    },
    {
      id: 2,
      titulo: 'Roupas Organizadas',
      antes: '/images/Roupas Antes.jpeg',
      depois: '/images/Roupas Depois.jpeg',
      descricao: 'Organização de guarda-roupas',
      categoria: 'Armários e Closets',
      local: 'Olinda - PE'
    },
    {
      id: 3,
      titulo: 'Roupas Femininas',
      antes: '/images/Roupas Feminias antes.jpeg',
      depois: '/images/Roupas Feminias Depois.jpeg',
      descricao: 'Organização de roupas femininas',
      categoria: 'Armários e Closets',
      local: 'Jaboatão - PE'
    },
    {
      id: 4,
      titulo: 'Sapatos Organizados',
      antes: '/images/Roupas Antes.jpeg',
      depois: '/images/Sapatos Depois.jpeg',
      descricao: 'Organização de calçados',
      categoria: 'Armários e Closets',
      local: 'Recife - PE'
    },
    {
      id: 5,
      titulo: 'Rasteiras em Colmeias',
      antes: '/images/Roupas Antes_02.jpeg',
      depois: '/images/Organizando rasteiras nas colmeias.jpeg',
      descricao: 'Rasteiras organizadas',
      categoria: 'Armários e Closets',
      local: 'Recife - PE'
    },
    {
      id: 6,
      titulo: 'Cabides Organizados',
      antes: '/images/Roupas Antes.jpeg',
      depois: '/images/Cabide Roupoas Masculinas.jpeg',
      descricao: 'Cabides para roupas',
      categoria: 'Armários e Closets',
      local: 'Recife - PE'
    },
    // Cozinhas
    {
      id: 7,
      titulo: 'Cozinha com Colmeias',
      antes: '/images/Organização comeias frente Antes.jpeg',
      depois: '/images/Organização comeias frente Depois.jpeg',
      descricao: 'Organização de cozinha com colmeias',
      categoria: 'Cozinhas Organizadas',
      local: 'Recife - PE'
    },
    {
      id: 8,
      titulo: 'Louça Organizada',
      antes: '/images/Louça organizada_01.jpeg',
      depois: '/images/Louça organizada_02.jpeg',
      descricao: 'Organização de louças',
      categoria: 'Cozinhas Organizadas',
      local: 'Olinda - PE'
    },
    // Despensa
    {
      id: 9,
      titulo: 'Despensa 1',
      antes: '/images/Despensa Antes_01.jpeg',
      depois: '/images/Despensa Depois_01.jpeg',
      descricao: 'Organização de despensa',
      categoria: 'Despensa e Estoque',
      local: 'Recife - PE'
    },
    {
      id: 10,
      titulo: 'Despensa 2',
      antes: '/images/Despensa Antes_02.jpeg',
      depois: '/images/Despensa Depois_02.jpeg',
      descricao: 'Organização de despensa',
      categoria: 'Despensa e Estoque',
      local: 'Olinda - PE'
    },
    // Home Office
    {
      id: 11,
      titulo: 'Pós Mudança',
      antes: '/images/Organização pós mudança_01.jpeg',
      depois: '/images/Organização pós mudança_02.jpeg',
      descricao: 'Organização após mudança',
      categoria: 'Home Office',
      local: 'Recife - PE'
    },
    {
      id: 12,
      titulo: 'Papelaria',
      antes: '/images/Papelaria Antes.jpeg',
      depois: '/images/Papelaria Depois.jpeg',
      descricao: 'Organização de papéis',
      categoria: 'Home Office',
      local: 'Olinda - PE'
    },
    // Quarto Infantil
    {
      id: 13,
      titulo: 'Toalhas',
      antes: '/images/Organização de toalhas_01.jpeg',
      depois: '/images/Organização de toalhas_02.jpeg',
      descricao: 'Organização de toalhas',
      categoria: 'Quarto Infantil',
      local: 'Recife - PE'
    }
  ];

  const categorias = ['todos', ...new Set(projetos.map(item => item.categoria))];

  const projetosFiltrados = categoria === 'todos' 
    ? projetos 
    : projetos.filter(item => item.categoria === categoria);

  return (
    <div className="galeria-page">
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#1f618d', marginBottom: '1rem' }}>
          <i className="fas fa-images"></i> Galeria de Projetos
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#2874a6' }}>
          Veja transformações reais que já realizamos
        </p>
      </div>

      <div className="btn-group" style={{ marginBottom: '3rem', justifyContent: 'center' }}>
        {categorias.map((cat) => (
          <button
            key={cat}
            className={`btn-filter ${categoria === cat ? 'active' : ''}`}
            onClick={() => setCategoria(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '2rem',
        marginBottom: '3rem'
      }}>
        {projetosFiltrados.map(projeto => (
          <div
            key={projeto.id}
            onClick={() => setImagemSelecionada(projeto)}
            style={{
              background: 'white',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
              cursor: 'pointer',
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px' }}>
              <div style={{ position: 'relative' }}>
                <img 
                  src={projeto.antes} 
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
                  src={projeto.depois} 
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
              <h3 style={{ color: '#1f618d', marginBottom: '0.5rem' }}>{projeto.titulo}</h3>
              <p style={{ color: '#2874a6', marginBottom: '0.5rem' }}>{projeto.descricao}</p>
              <p style={{ fontSize: '0.9rem', color: '#1f618d' }}>
                <i className="fas fa-map-marker-alt"></i> {projeto.local}
              </p>
            </div>
          </div>
        ))}
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

export default Galeria;