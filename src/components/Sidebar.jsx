import { Link, useLocation } from 'react-router-dom';

function Sidebar() {
  const location = useLocation();
  
  const abas = [
    { path: '/', icone: 'fa-house', label: 'Início' },
    { path: '/guarda-roupas', icone: 'fa-shirt', label: 'Armários e Closets' },
    { path: '/cozinhas', icone: 'fa-kitchen-set', label: 'Cozinhas Organizadas' },
    { path: '/escritorios', icone: 'fa-laptop', label: 'Home Office' },
    { path: '/salas', icone: 'fa-couch', label: 'Salas' },
    { path: '/kids', icone: 'fa-child', label: 'Quarto Infantil' },
    { path: '/despensas', icone: 'fa-boxes', label: 'Despensa e Estoque' },
    { path: '/consultoria', icone: 'fa-calendar-check', label: 'Agende sua Consultoria' },
    { path: '/blog', icone: 'fa-blog', label: 'Blog' },
    { path: '/galeria', icone: 'fa-images', label: 'Galeria' },
    { path: '/contato', icone: 'fa-envelope', label: 'Contato' }
  ];

  return (
    <div className="sidebar">
      <div className="perfil-resumo">
        <div className="moldura-avatar">
          <img 
            className="avatar" 
            src="https://via.placeholder.com/150x150/3498db/ffffff?text=D%26L" 
            alt="Drica & Leo"
          />
        </div>
        <h2>Drica & Leo</h2>
        <div className="local">
          <i className="fas fa-map-marker-alt"></i> Pernambuco · personal organizer
        </div>
        <a 
          className="instagram-link" 
          href="https://instagram.com/drica.e.leo.organizer" 
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram"></i> @drica.e.leo.organizer
        </a>
      </div>

      <div className="nav-abas">
        {abas.map((aba) => (
          <Link
            key={aba.path}
            to={aba.path}
            className={`aba-item ${location.pathname === aba.path ? 'ativo' : ''}`}
          >
            <i className={`fas ${aba.icone}`}></i> {aba.label}
          </Link>
        ))}
      </div>

      <div className="oferta-rapida">
        <div className="tag">✨ CHAMA NA OFERTA ✨</div>
        <div className="desconto">+10% OFF</div>
        <div style={{ fontWeight: 400 }}>em todos os serviços</div>
        <div 
          className="codigo" 
          onClick={() => {
            navigator.clipboard.writeText('DRICA10');
            alert('Cupom DRICA10 copiado!');
          }}
        >
          DRICA10
        </div>
      </div>
    </div>
  );
}

export default Sidebar;