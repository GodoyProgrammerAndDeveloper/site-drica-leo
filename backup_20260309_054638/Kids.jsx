import { useNavigate } from 'react-router-dom';

function Kids() {
  const navigate = useNavigate();

  const handleAgendar = () => {
    navigate('/consultoria');
    setTimeout(() => alert('Vamos agendar sua consultoria para quarto kids!'), 100);
  };

  return (
    <div className="servico-header">
      <h1><i className="fas fa-child"></i> Quartos kids</h1>
      <div className="servico-descricao">Organização lúdica por Drica & Leo</div>
      
      <div className="servico-conteudo">
        <div className="servico-imagem">
          <img 
            src="https://images.pexels.com/photos/2765830/pexels-photo-2765830.jpeg?auto=compress&cs=tinysrgb&w=600" 
            alt="Quarto infantil organizado" 
            style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '20px' }}
          />
        </div>
        
        <div className="servico-info">
          <h3>Organização lúdica</h3>
          <p>Espaços que estimulam a autonomia e a criatividade das crianças.</p>
          <ul style={{ listStyle: 'none', margin: '20px 0' }}>
            <li><i className="fas fa-check-circle" style={{color: '#27ae60', marginRight: '10px'}}></i> Organização de brinquedos por categorias</li>
            <li><i className="fas fa-check-circle" style={{color: '#27ae60', marginRight: '10px'}}></i> Espaços acessíveis para crianças</li>
            <li><i className="fas fa-check-circle" style={{color: '#27ae60', marginRight: '10px'}}></i> Roupas organizadas por tamanho e estação</li>
            <li><i className="fas fa-check-circle" style={{color: '#27ae60', marginRight: '10px'}}></i> Área de estudos e atividades</li>
          </ul>
          
          <div className="servico-preco">A partir de R$ 380</div>
          <button className="btn-cupom" onClick={handleAgendar}>Agendar consultoria</button>
          <button className="btn-saiba" style={{marginLeft: '10px'}} onClick={() => alert('Solicitar orçamento personalizado')}>Solicitar orçamento</button>
        </div>
      </div>
    </div>
  );
}

export default Kids;
