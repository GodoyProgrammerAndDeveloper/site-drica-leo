import { useNavigate } from 'react-router-dom';

function Salas() {
  const navigate = useNavigate();

  const handleAgendar = () => {
    navigate('/consultoria');
    setTimeout(() => alert('Vamos agendar sua consultoria para salas!'), 100);
  };

  return (
    <div className="servico-header">
      <h1><i className="fas fa-couch"></i> Salas</h1>
      <div className="servico-descricao">Organização de salas por Drica & Leo</div>
      
      <div className="servico-conteudo">
        <div className="servico-imagem">
          <img 
            src="https://images.unsplash.com/photo-1560448204-603b3fc33ddc" 
            alt="Sala organizada" 
            style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '20px' }}
          />
        </div>
        
        <div className="servico-info">
          <h3>Sala de estar e jantar</h3>
          <p>Ambientes aconchegantes e funcionais para receber e relaxar.</p>
          <ul style={{ listStyle: 'none', margin: '20px 0' }}>
            <li><i className="fas fa-check-circle" style={{color: '#27ae60', marginRight: '10px'}}></i> Organização de estantes e racks</li>
            <li><i className="fas fa-check-circle" style={{color: '#27ae60', marginRight: '10px'}}></i> Espaços para livros e objetos decorativos</li>
            <li><i className="fas fa-check-circle" style={{color: '#27ae60', marginRight: '10px'}}></i> Aproveitamento de cantos</li>
            <li><i className="fas fa-check-circle" style={{color: '#27ae60', marginRight: '10px'}}></i> Decoração funcional</li>
          </ul>
          
          <div className="servico-preco">A partir de R$ 320</div>
          <button className="btn-cupom" onClick={handleAgendar}>Agendar consultoria</button>
          <button className="btn-saiba" style={{marginLeft: '10px'}} onClick={() => alert('Solicitar orçamento personalizado')}>Solicitar orçamento</button>
        </div>
      </div>
    </div>
  );
}

export default Salas;
