import { useNavigate } from 'react-router-dom';

function Inicio() {
  const navigate = useNavigate();
  
  const posts = [
    {
      titulo: '5 Sinais de Que Você Precisa de um Personal Organizer',
      descricao: 'Identifique os sinais que indicam que a organização pode transformar sua rotina.',
      tag: 'autoconhecimento'
    },
    {
      titulo: 'Como Organizar a Despensa em 1 Hora',
      descricao: 'Guia prático para organizar sua despensa de forma rápida e eficiente.',
      tag: 'passo a passo'
    },
    {
      titulo: 'Organização para Mães',
      descricao: 'Dicas para conciliar a rotina com crianças e manter a casa organizada.',
      tag: 'família'
    }
  ];

  const servicos = [
    { titulo: 'Guarda-roupas', path: '/guarda-roupas', imagem: 'https://images.pexels.com/photos/6197120/pexels-photo-6197120.jpeg', descricao: 'Organização de armários e closets' },
    { titulo: 'Despensas', path: '/despensas', imagem: 'https://images.pexels.com/photos/4108717/pexels-photo-4108717.jpeg', descricao: 'Despensas organizadas e funcionais' },
    { titulo: 'Escritórios', path: '/escritorios', imagem: 'https://images.pexels.com/photos/3779444/pexels-photo-3779444.jpeg', descricao: 'Home office produtivo' },
    { titulo: 'Quartos Kids', path: '/kids', imagem: 'https://images.pexels.com/photos/2765830/pexels-photo-2765830.jpeg', descricao: 'Espaços lúdicos e organizados' }
  ];

  const handleAgendar = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    alert(`Consulta agendada para ${formData.get('data')} às ${formData.get('horario')}! Entraremos em contato em breve.`);
    e.target.reset();
  };

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
        <div className="grid-descricao">
          <div className="coluna-descricao">
            <p><strong>Drica & Leo</strong> são personal organizers em Pernambuco, especializados em transformar espaços caóticos em ambientes funcionais e acolhedores.</p>
            <p>Com anos de experiência, desenvolvemos métodos exclusivos que se adaptam ao seu estilo de vida, garantindo resultados duradouros.</p>
          </div>
          <div className="coluna-descricao">
            <p><strong>Nossos diferenciais:</strong></p>
            <ul className="lista-vantagens">
              <li><i className="fas fa-clock"></i> Atendimento personalizado</li>
              <li><i className="fas fa-brain"></i> Redução do estresse</li>
              <li><i className="fas fa-hand-holding-heart"></i> Mais qualidade de vida</li>
              <li><i className="fas fa-arrow-trend-up"></i> Produtividade garantida</li>
            </ul>
          </div>
        </div>
        <div className="chamada-curiosidade" onClick={() => alert('Mais de 200 famílias já transformaram seus lares conosco!')}>
          <i className="fas fa-lightbulb"></i> Mais de 200 famílias já transformaram seus lares conosco!
        </div>
      </div>

      <div className="blog-posts">
        <h2><i className="fas fa-pen-fancy"></i> Blog da Organização</h2>
        <div className="blog-grid">
          {posts.map((post, index) => (
            <div key={index} className="blog-card" onClick={() => alert(`Em breve: ${post.titulo}`)}>
              <h3>{post.titulo}</h3>
              <p>{post.descricao}</p>
              <span className="tag">{post.tag}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="modelos-grid">
        {servicos.map((servico, index) => (
          <div key={index} className="modelo-card" onClick={() => navigate(servico.path)}>
            <img src={servico.imagem} alt={servico.titulo} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <h3>{servico.titulo}</h3>
            <p>{servico.descricao}</p>
            <button className="btn-saiba" onClick={(e) => { e.stopPropagation(); navigate(servico.path); }}>Ver mais</button>
          </div>
        ))}
      </div>

      <div className="calendario-section">
        <div className="calendario-header">
          <h3><i className="fas fa-calendar-check"></i> Consultoria Gratuita de 15 Minutos</h3>
          <p>Agende uma conversa para conhecer nosso trabalho.</p>
        </div>
        <div className="calendly-placeholder">
          <p><i className="fas fa-video"></i> Atendimento online ou presencial (PE)</p>
          <form onSubmit={handleAgendar}>
            <input type="text" name="nome" placeholder="Seu nome completo" required />
            <input type="email" name="email" placeholder="Seu melhor e-mail" required />
            <input type="date" name="data" required />
            <select name="horario" required>
              <option value="09:00">09:00</option>
              <option value="10:00">10:00</option>
              <option value="14:00">14:00</option>
              <option value="15:00">15:00</option>
              <option value="16:00">16:00</option>
            </select>
            <button type="submit" className="calendly-btn">Agendar horário</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Inicio;