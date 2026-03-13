import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [modalAberto, setModalAberto] = useState(false);

  const abrirModal = () => setModalAberto(true);
  const fecharModal = () => setModalAberto(false);

  return (
    <>
      <header className="header">
        <div className="logo-container" onClick={abrirModal}>
          <img src="/images/logo.png" alt="Drica & Leo" className="logo-img" />
          <div className="logo-texto">
            <h1>Drica <span>&</span> Leo</h1>
            <p>ORGANIZER</p>
          </div>
        </div>
      </header>

      {modalAberto && (
        <div className="modal" onClick={fecharModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={fecharModal}>&times;</span>
            <img src="/images/logo.png" alt="Drica & Leo" className="modal-img" />
            <h2>Drica & Leo</h2>
            <p>ORGANIZER</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
