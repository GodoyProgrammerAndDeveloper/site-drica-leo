function LogoTexto({ size = 40 }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '8px 16px',
      background: 'rgba(255, 255, 255, 0.9)',
      borderRadius: '60px',
      boxShadow: '0 4px 15px rgba(31, 97, 141, 0.15)',
      border: '1px solid #85c1e9'
    }}>
      <div style={{
        width: size,
        height: size,
        background: 'linear-gradient(135deg, #1f618d, #3498db)',
        borderRadius: '15px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transform: 'rotate(45deg)',
        boxShadow: '0 5px 15px rgba(31, 97, 141, 0.3)'
      }}>
        <div style={{
          transform: 'rotate(-45deg)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2px'
        }}>
          <i className="fas fa-home" style={{ color: 'white', fontSize: size * 0.3 }}></i>
          <i className="fas fa-check" style={{ color: '#f1c40f', fontSize: size * 0.2 }}></i>
        </div>
      </div>
      
      <div style={{
        display: 'flex',
        flexDirection: 'column'
      }}>
        <span style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: size * 0.45,
          fontWeight: '700',
          color: '#1f618d',
          lineHeight: 1.2
        }}>
          Drica & Leo
        </span>
        <span style={{
          fontFamily: 'Quicksand, sans-serif',
          fontSize: size * 0.22,
          color: '#2874a6',
          letterSpacing: '1.5px',
          textTransform: 'uppercase'
        }}>
          Personal Organizer
        </span>
      </div>

      <div style={{
        marginLeft: '5px',
        width: size * 0.5,
        height: size * 0.5,
        background: '#f1c40f',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: size * 0.25,
        color: '#1f618d',
        fontWeight: 'bold'
      }}>
        <i className="fas fa-star"></i>
      </div>
    </div>
  );
}

export default LogoTexto;