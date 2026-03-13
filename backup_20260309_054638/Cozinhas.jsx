import { useNavigate } from 'react-router-dom';

function Cozinhas() {
  const navigate = useNavigate();

  const handleAgendar = () => {
    navigate('/consultoria');
    setTimeout(() => alert('Vamos agendar sua consultoria para cozinha!'), 100);
  };

  return (
    <div className="servico-header">
      <h1><i className="fas fa-kitchen-set"></i> Cozinhas</h1>
      <div className="servico-descricao">Organização de cozinhas por Drica & Leo</div>
      
      <div className="servico-conteudo">
        <div className="servico-imagem">
          <img 
            src="https://images.pexels.com/photos/4108717/pexels-photo-4108717.jpeg?auto=compress&cs=tinysrgb&w=600" 
            alt="Cozinha organizada" 
            style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '20px' }}
          />
        </div>
        
        <div className="servico-info">
          <h3>Cozinha funcional e organizada</h3>
          <p>Organização completa de utensílios, panelas, mantimentos e otimização de espaços.</p>
          <ul style={{ listStyle: 'none', margin: '20px 0' }}>
            <li><i className="fas fa-check-circle" style={{color: '#27ae60', marginRight: '10px'}}></i> Organização por categorias</li>
            <li><i className="fas fa-check-circle" style={{color: '#27ae60', marginRight: '10px'}}></i> Etiquetagem e identificação</li>
            <li><i className="fas fa-check-circle" style={{color: '#27ae60', marginRight: '10px'}}></i> Aproveitamento de espaços</li>
            <li><i className="fas fa-check-circle" style={{color: '#27ae60', marginRight: '10px'}}></i> Soluções com colmeias e potes</li>
          </ul>
          
          <div className="servico-preco">A partir de R$ 380</div>
          <button className="btn-cupom" onClick={handleAgendar}>Agendar consultoria</button>
          <button className="btn-saiba" style={{marginLeft: '10px'}} onClick={() => alert('Solicitar orçamento personalizado')}>Solicitar orçamento</button>
        </div>
      </div>
    </div>
  );
}

export default Cozinhas;
