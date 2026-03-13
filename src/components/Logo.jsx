function Logo({ size = 150 }) {
  return (
    <div style={{
      width: size,
      height: size,
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #1f618d, #3498db)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      boxShadow: '0 10px 25px rgba(31, 97, 141, 0.3)',
      overflow: 'hidden'
    }}>
      <div style={{
        width: '60%',
        height: '60%',
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.15)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backdropFilter: 'blur(2px)',
        border: '2px solid rgba(255,255,255,0.3)'
      }}>
        <span style={{
          color: 'white',
          fontSize: size * 0.3,
          fontWeight: '800',
          fontFamily: 'Playfair Display, serif'
        }}>
          D&L
        </span>
      </div>
    </div>
  );
}

export default Logo;