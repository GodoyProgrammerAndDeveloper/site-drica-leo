import { useNavigate } from 'react-router-dom';

function GuardaRoupas() {
  const navigate = useNavigate();

  const handleAgendar = () => {
    navigate('/consultoria');
    setTimeout(() => alert('Vamos agendar sua consultoria para guarda-roupas!'), 100);
  };

  return (
    <div className="servico-header">
      <h1><i className="fas fa-shirt"></i> Guarda-roupas</h1>
      <div className="servico-descricao">Organização de armários e closets por Drica & Leo</div>
      
      <div className="servico-conteudo">
        <div className="servico-imagem">
          <img 
            src="https://images.pexels.com/photos/6197120/pexels-photo-6197120.jpeg?auto=compress&cs=tinysrgb&w=600" 
            alt="Guarda-roupas organizado" 
            style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '20px' }}
          />
        </div>
        
        <div className="servico-info">
          <h3>Transforme em 5 passos · método exclusivo</h3>
          <p>Nosso método exclusivo para guarda-roupas funciona em 5 passos simples:</p>
          <ol style={{ margin: '20px 0', paddingLeft: '20px' }}>
            <li>Análise completa do espaço e hábitos</li>
            <li>Seleção e descarte consciente</li>
            <li>Categorização por tipo e frequência de uso</li>
            <li>Organização por cores e estações</li>
            <li>Manutenção e hábitos duradouros</li>
          </ol>
          <p><strong>Resultado:</strong> Mais tempo pela manhã, menos estresse e um closet dos sonhos.</p>
          
          <div className="servico-preco">A partir de R$ 450</div>
          <button className="btn-cupom" onClick={handleAgendar}>Agendar consultoria</button>
          <button className="btn-saiba" style={{marginLeft: '10px'}} onClick={() => alert('Solicitar orçamento personalizado')}>Solicitar orçamento</button>
        </div>
      </div>
    </div>
  );
}

export default GuardaRoupas;
