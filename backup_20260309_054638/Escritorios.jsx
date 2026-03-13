import { useNavigate } from 'react-router-dom';

function Escritorios() {
  const navigate = useNavigate();

  const handleAgendar = () => {
    navigate('/consultoria');
    setTimeout(() => alert('Vamos agendar sua consultoria para home office!'), 100);
  };

  return (
    <div className="servico-header">
      <h1><i className="fas fa-laptop"></i> Escritórios</h1>
      <div className="servico-descricao">Home office produtivo por Drica & Leo</div>
      
      <div className="servico-conteudo">
        <div className="servico-imagem">
          <img 
            src="https://images.pexels.com/photos/3779444/pexels-photo-3779444.jpeg?auto=compress&cs=tinysrgb&w=600" 
            alt="Escritório organizado" 
            style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '20px' }}
          />
        </div>
        
        <div className="servico-info">
          <h3>Home office com foco e harmonia</h3>
          <p>Transforme seu escritório em um ambiente produtivo e agradável.</p>
          <ul style={{ listStyle: 'none', margin: '20px 0' }}>
            <li><i className="fas fa-check-circle" style={{color: '#27ae60', marginRight: '10px'}}></i> Organização de papéis e documentos</li>
            <li><i className="fas fa-check-circle" style={{color: '#27ae60', marginRight: '10px'}}></i> Sistema de arquivamento eficiente</li>
            <li><i className="fas fa-check-circle" style={{color: '#27ae60', marginRight: '10px'}}></i> Organização de cabos e eletrônicos</li>
            <li><i className="fas fa-check-circle" style={{color: '#27ae60', marginRight: '10px'}}></i> Ergonomia e funcionalidade</li>
          </ul>
          
          <div className="servico-preco">A partir de R$ 350</div>
          <button className="btn-cupom" onClick={handleAgendar}>Agendar consultoria</button>
          <button className="btn-saiba" style={{marginLeft: '10px'}} onClick={() => alert('Solicitar orçamento personalizado')}>Solicitar orçamento</button>
        </div>
      </div>
    </div>
  );
}

export default Escritorios;
