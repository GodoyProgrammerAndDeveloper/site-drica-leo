function TesteUrgente() {
  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h1 style={{ color: 'green', fontSize: '48px' }}>✅ FUNCIONOU!</h1>
      <p style={{ fontSize: '24px' }}>Se você está vendo isso, o React está funcionando.</p>
      <div style={{ marginTop: '30px' }}>
        <img 
          src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600" 
          alt="Teste"
          style={{ width: '100%', maxWidth: '600px', borderRadius: '10px' }}
        />
        <p>Imagem do Unsplash carregada</p>
      </div>
    </div>
  );
}

export default TesteUrgente;