{/* HEADER FIXO COM MENU E BOTÕES SOCIAIS */}
<div style={{
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  background: "white",
  padding: "15px 30px",
  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  zIndex: 999,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexWrap: "wrap"
}}>
  {/* LOGO (ESQUERDA) */}
  <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
    <img 
      src="/images/logo.png" 
      alt="Drica & Léo" 
      style={{ width: "50px", height: "50px", borderRadius: "50%", objectFit: "cover", cursor: "pointer" }}
      onClick={() => setLogoAmpliado(true)}
    />
    <div>
      <h2 style={{ margin: 0, fontSize: "1.3rem", color: "#4361ee" }}>Drica & Léo</h2>
      <p style={{ margin: 0, fontSize: "0.8rem", color: "#f72585" }}>Personal Organizer</p>
    </div>
  </div>

  {/* MENU E BOTÕES (DIREITA) */}
  <div style={{ display: "flex", alignItems: "center", gap: "30px", flexWrap: "wrap" }}>
    {/* MENU DE NAVEGAÇÃO */}
    <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
      <a href="/" style={{ textDecoration: "none", color: "#4361ee", fontWeight: "600" }}>Início</a>
      <a href="/servicos" style={{ textDecoration: "none", color: "#2d2d44", fontWeight: "500" }}>Serviços</a>
      <a href="/sobre" style={{ textDecoration: "none", color: "#2d2d44", fontWeight: "500" }}>Sobre</a>
      <a href="/galeria" style={{ textDecoration: "none", color: "#2d2d44", fontWeight: "500" }}>Galeria</a>
      <a href="/contato" style={{ textDecoration: "none", color: "#2d2d44", fontWeight: "500" }}>Contato</a>
    </div>

    {/* BOTÕES SOCIAIS */}
    <div style={{ display: "flex", gap: "10px", position: "relative" }}>
      {/* SELO ACIMA DOS BOTÕES */}
      <div style={{
        position: "absolute",
        top: "-40px",
        right: "0",
        background: "linear-gradient(135deg, #4361ee, #f72585)",
        color: "white",
        padding: "5px 15px",
        borderRadius: "50px",
        fontSize: "0.8rem",
        fontWeight: "bold",
        display: "flex",
        alignItems: "center",
        gap: "5px",
        whiteSpace: "nowrap",
        border: "2px solid white",
        boxShadow: "0 2px 10px rgba(0,0,0,0.2)"
      }}>
        <span>🏆</span> Profissional Certificado
      </div>

      <a 
        href="https://wa.me/5581994732981" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{
          background: "#25d366",
          color: "white",
          padding: "8px 16px",
          borderRadius: "50px",
          textDecoration: "none",
          fontWeight: "600",
          fontSize: "0.9rem",
          display: "flex",
          alignItems: "center",
          gap: "5px"
        }}
      >
        <i className="fab fa-whatsapp"></i> WhatsApp
      </a>
      <a 
        href="https://instagram.com/adrianamoura.organizer" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{
          background: "linear-gradient(45deg, #f09433, #d62976, #962fbf, #4f5bd5)",
          color: "white",
          padding: "8px 16px",
          borderRadius: "50px",
          textDecoration: "none",
          fontWeight: "600",
          fontSize: "0.9rem",
          display: "flex",
          alignItems: "center",
          gap: "5px"
        }}
      >
        <i className="fab fa-instagram"></i> Instagram
      </a>
    </div>
  </div>
</div>

{/* REMOVA O SELO ANTIGO QUE ESTAVA SOLTO */}
