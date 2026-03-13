import { useNavigate } from 'react-router-dom';

function Despensas() {
  const navigate = useNavigate();

  const handleAgendar = () => {
    navigate('/consultoria');
    setTimeout(() => alert('Vamos agendar sua consultoria para despensa!'), 100);
  };

  return (
    <div className="servico-header">
      <h1><i className="fas fa-boxes"></i> Despensas</h1>
      <div className="servico-descricao">Despensas organizadas por Drica & Leo</div>
      
      <div className="servico-conteudo">
        <div className="servico-imagem">
          <img 
            src="https://images.pexels.com/photos/4108717/pexels-photo-4108717.jpeg" 
            alt="Despensa organizada" 
            style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '20px' }}
          />
        </div>
        
        <div className="servico-info">
          <h3>Cada pote no lugar certo</h3>
          <p>Despensas organizadas e práticas para o dia a dia.</p>
          <ul style={{ listStyle: 'none', margin: '20px 0' }}>
            <li><i className="fas fa-check-circle" style={{color: '#27ae60', marginRight: '10px'}}></i> Organização por categorias</li>
            <li><i className="fas fa-check-circle" style={{color: '#27ae60', marginRight: '10px'}}></i> Potes e etiquetas</li>
            <li><i className="fas fa-check-circle" style={{color: '#27ae60', marginRight: '10px'}}></i> Controle de validade</li>
            <li><i className="fas fa-check-circle" style={{color: '#27ae60', marginRight: '10px'}}></i> Aproveitamento de espaço</li>
          </ul>
          
          <div className="servico-preco">A partir de R$ 280</div>
          <button className="btn-cupom" onClick={handleAgendar}>Agendar consultoria</button>
          <button className="btn-saiba" style={{marginLeft: '10px'}} onClick={() => alert('Solicitar orçamento personalizado')}>Solicitar orçamento</button>
        </div>
      </div>
    </div>
  );
}

export default Despensas;