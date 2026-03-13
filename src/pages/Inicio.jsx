import { useNavigate } from 'react-router-dom';

function Inicio() {
  const navigate = useNavigate();

  const servicos = [
    { titulo: 'Guarda-roupas', path: '/guarda-roupas', icone: 'fa-shirt' },
    { titulo: 'Cozinhas', path: '/cozinhas', icone: 'fa-kitchen-set' },
    { titulo: 'Home Office', path: '/escritorios', icone: 'fa-laptop' },
    { titulo: 'Salas', path: '/salas', icone: 'fa-couch' },
    { titulo: 'Quarto Infantil', path: '/kids', icone: 'fa-child' },
    { titulo: 'Despensa', path: '/despensas', icone: 'fa-boxes' }
  ];

  return (
    <>
      <div className="boas-vindas">
        <h1>Drica & Leo: <span>organização que transforma</span></h1>
        <div className="subtitulo">Personal organizers em Pernambuco</div>
      </div>

      <div className="sobre-profissao">
        <h3><i className="fas fa-sparkle"></i> Sobre Nós</h3>
        <div className="intro-motivacional">
          "Mais do que organizar objetos, organizamos vidas, tempo e emoções."
        </div>
        <p style={{ textAlign: 'center', marginTop: '1rem' }}>
          Drica & Leo são personal organizers em Pernambuco, especializados em transformar espaços.
        </p>
      </div>

      <div className="modelos-grid">
        {servicos.map((servico, index) => (
          <div 
            key={index}
            onClick={() => navigate(servico.path)}
            style={{
              background: 'white',
              borderRadius: '20px',
              padding: '2rem',
              textAlign: 'center',
              cursor: 'pointer',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s'
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <i className={`fas ${servico.icone}`} style={{ fontSize: '3rem', color: '#1f618d', marginBottom: '1rem' }}></i>
            <h3>{servico.titulo}</h3>
            <button className="btn-view" style={{ marginTop: '1rem' }}>
              Ver mais <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        ))}
      </div>

      <div className="btn-group" style={{ justifyContent: 'center', marginTop: '2rem' }}>
        <button className="btn-schedule" onClick={() => navigate('/consultoria')}>
          <i className="fas fa-calendar-check"></i> Agendar consultoria
        </button>
      </div>
    </>
  );
}

export default Inicio;