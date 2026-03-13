import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div style={{ padding: '100px 20px', textAlign: 'center' }}>
      <h1>Detalhes do Serviço {id}</h1>
      <button onClick={() => navigate('/servicos')}>Voltar</button>
    </div>
  );
};

export default ServiceDetail;
