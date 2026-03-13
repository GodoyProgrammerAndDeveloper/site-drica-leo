function Consultoria() {
  return (
    <div className="servico-page">
      <div className="servico-header" style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#1f618d', marginBottom: '1rem' }}>
          <i className="fas fa-calendar-check" style={{ marginRight: '1rem' }}></i>
          Consultoria
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#2874a6', borderLeft: '4px solid #85c1e9', paddingLeft: '1rem' }}>
          Organização profissional em Pernambuco
        </p>
      </div>

      <div style={{ 
        background: 'white',
        padding: '3rem',
        borderRadius: '30px',
        boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
        textAlign: 'center',
        marginBottom: '2rem'
      }}>
        <i className="fas fa-sparkles" style={{ fontSize: '4rem', color: '#1f618d', marginBottom: '1rem' }}></i>
        <h2 style={{ color: '#1f618d', marginBottom: '1rem' }}>Conteúdo em breve</h2>
        <p style={{ color: '#2874a6', marginBottom: '2rem' }}>
          Estamos preparando conteúdos incríveis sobre organização de Consultoria.
        </p>
        <div className="btn-group">
          <button 
            className="btn-schedule"
            onClick={() => window.location.href = '/consultoria'}
          >
            <i className="fas fa-calendar-check"></i> Agendar consultoria
          </button>
        </div>
      </div>
    </div>
  );
}

export default Consultoria;
