import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Consultoria() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    tipo: 'online',
    mensagem: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Obrigado ${formData.nome}! Entraremos em contato em até 24h para agendar sua consultoria ${formData.tipo}.`);
    navigate('/');
  };

  return (
    <div className="servico-header">
      <h1><i className="fas fa-calendar-check"></i> Consultoria</h1>
      <div className="servico-descricao">Consultoria personalizada com Drica & Leo</div>
      
      <div className="servico-conteudo">
        <div className="servico-imagem">
          <img 
            src="https://images.pexels.com/photos/6953897/pexels-photo-6953897.jpeg" 
            alt="Consultoria" 
            style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '20px' }}
          />
        </div>
        
        <div className="servico-info">
          <h3>Atendimento online ou presencial</h3>
          
          <div style={{ display: 'flex', gap: '20px', margin: '20px 0' }}>
            <div style={{ flex: 1, background: '#d4e6f1', padding: '15px', borderRadius: '15px', textAlign: 'center' }}>
              <i className="fas fa-video" style={{ fontSize: '2rem', color: '#3498db' }}></i>
              <h4>Online</h4>
              <p>Atendimento por vídeo para todo o Brasil</p>
              <p><strong>R$ 250</strong></p>
            </div>
            <div style={{ flex: 1, background: '#d4e6f1', padding: '15px', borderRadius: '15px', textAlign: 'center' }}>
              <i className="fas fa-home" style={{ fontSize: '2rem', color: '#3498db' }}></i>
              <h4>Presencial</h4>
              <p>Em domicílio (Recife e região)</p>
              <p><strong>R$ 350</strong></p>
            </div>
          </div>

          <p><strong>Consultoria gratuita de 15 min:</strong> Entenda como funciona e veja se é para você.</p>
          
          <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
            <input type="text" name="nome" placeholder="Seu nome" value={formData.nome} onChange={handleChange} required style={{ width: '100%', padding: '10px', margin: '5px 0', borderRadius: '30px', border: '1px solid #85c1e9' }} />
            <input type="email" name="email" placeholder="Seu e-mail" value={formData.email} onChange={handleChange} required style={{ width: '100%', padding: '10px', margin: '5px 0', borderRadius: '30px', border: '1px solid #85c1e9' }} />
            <input type="tel" name="telefone" placeholder="Seu telefone" value={formData.telefone} onChange={handleChange} required style={{ width: '100%', padding: '10px', margin: '5px 0', borderRadius: '30px', border: '1px solid #85c1e9' }} />
            
            <select name="tipo" value={formData.tipo} onChange={handleChange} style={{ width: '100%', padding: '10px', margin: '5px 0', borderRadius: '30px', border: '1px solid #85c1e9' }}>
              <option value="online">Consultoria Online</option>
              <option value="presencial">Consultoria Presencial (PE)</option>
              <option value="gratuita">Consultoria Gratuita (15 min)</option>
            </select>
            
            <textarea name="mensagem" placeholder="Fale sobre suas necessidades..." value={formData.mensagem} onChange={handleChange} rows="4" style={{ width: '100%', padding: '10px', margin: '5px 0', borderRadius: '20px', border: '1px solid #85c1e9' }}></textarea>
            
            <button type="submit" className="btn-cupom" style={{ width: '100%' }}>Solicitar consultoria</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Consultoria;