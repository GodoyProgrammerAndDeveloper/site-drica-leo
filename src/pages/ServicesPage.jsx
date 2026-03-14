import React from "react";
import { useNavigate } from "react-router-dom";

const ServicesPage = () => {
  const navigate = useNavigate();

  const services = [
    { 
      id: 1,
      icon: "👗", 
      title: "Guarda-roupas", 
      benefit: "Ganhe tempo na hora de se vestir e prolongue a vida útil das suas roupas",
      quality: "Técnicas Marie Kondo, dobras especiais e sistemas de etiquetagem profissional",
      image: "/images/Cabide Roupoas Masculinas.jpeg"
    },
    { 
      id: 2,
      icon: "🍳", 
      title: "Cozinhas", 
      benefit: "Cozinhe com prazer em um espaço onde tudo está ao alcance das mãos",
      quality: "Despensa funcional, potes herméticos e organização por categorias",
      image: "/images/Louça organizada_01.jpeg"
    },
    { 
      id: 3,
      icon: "💻", 
      title: "Escritórios", 
      benefit: "Aumente sua produtividade com um home office livre de distrações",
      quality: "Gestão de cabos, organização de documentos e ergonomia do espaço",
      image: "/images/Papelaria Depois.jpeg"
    },
    { 
      id: 4,
      icon: "🛋️", 
      title: "Salas", 
      benefit: "Receba bem em um ambiente aconchegante e harmonioso",
      quality: "Estantes organizadas, decoração funcional e espaços integrados",
      image: "/images/Organização comeias frente Depois.jpeg"
    },
    { 
      id: 5,
      icon: "🧸", 
      title: "Quartos Kids", 
      benefit: "Estimule a autonomia das crianças com um quarto que elas mesmas organizam",
      quality: "Espaço lúdico, brinquedos acessíveis e área de estudos funcional",
      image: "/images/Roupas Feminias Depois.jpeg"
    },
    { 
      id: 6,
      icon: "📦", 
      title: "Despensas", 
      benefit: "Economize nas compras com tudo à vista e controle de validade",
      quality: "Estoque organizado, etiquetagem completa e aproveitamento máximo",
      image: "/images/Despensa Depois_01.jpeg"
    }
  ];

  return (
    <div style={{
      padding: "100px 20px 40px",
      maxWidth: "1200px",
      margin: "0 auto",
      backgroundColor: "#fef6f9"
    }}>
      {/* CABEÇALHO */}
      <div style={{
        textAlign: "center",
        marginBottom: "60px"
      }}>
        <h1 style={{
          fontSize: "3rem",
          color: "#4361ee",
          marginBottom: "20px",
          fontWeight: "bold"
        }}>
          Nossos Serviços
        </h1>
        <p style={{
          fontSize: "1.3rem",
          color: "#f72585",
          maxWidth: "800px",
          margin: "0 auto"
        }}>
          Transformamos sua casa com organização profissional e qualidade
        </p>
      </div>

      {/* CARDS DE SERVIÇOS */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "30px",
        marginBottom: "80px"
      }}>
        {services.map(service => (
          <div
            key={service.id}
            style={{
              background: "white",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 10px 30px rgba(67, 97, 238, 0.1)",
              border: "1px solid #e0e0e0",
              transition: "transform 0.3s",
              cursor: "pointer"
            }}
            onClick={() => navigate(`/servicos/${service.id}`)}
          >
            {/* IMAGEM */}
            <div style={{
              height: "250px",
              overflow: "hidden",
              position: "relative"
            }}>
              <img
                src={service.image}
                alt={service.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }}
              />
              <div style={{
                position: "absolute",
                top: "20px",
                left: "20px",
                background: "#4361ee",
                color: "white",
                padding: "10px 15px",
                borderRadius: "30px",
                fontSize: "1.5rem",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
              }}>
                <span>{service.icon}</span>
                <span style={{ fontSize: "1rem", fontWeight: "600" }}>{service.title}</span>
              </div>
            </div>

            {/* CONTEÚDO */}
            <div style={{ padding: "30px" }}>
              {/* BENEFÍCIO */}
              <div style={{
                background: "#f8f9fa",
                padding: "20px",
                borderRadius: "15px",
                marginBottom: "20px",
                border: "1px solid #e9ecef"
              }}>
                <h3 style={{
                  fontSize: "1.2rem",
                  color: "#f72585",
                  marginBottom: "10px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px"
                }}>
                  <span style={{ fontSize: "1.5rem" }}>✨</span>
                  Benefício
                </h3>
                <p style={{
                  color: "#2d2d44",
                  fontSize: "1rem",
                  lineHeight: "1.7",
                  margin: 0
                }}>{service.benefit}</p>
              </div>

              {/* QUALIDADE */}
              <div style={{
                background: "#f0f4ff",
                padding: "20px",
                borderRadius: "15px",
                border: "1px solid #d0e0ff"
              }}>
                <h3 style={{
                  fontSize: "1.2rem",
                  color: "#4361ee",
                  marginBottom: "10px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px"
                }}>
                  <span style={{ fontSize: "1.5rem" }}>🏆</span>
                  Qualidade
                </h3>
                <p style={{
                  color: "#2d2d44",
                  fontSize: "1rem",
                  lineHeight: "1.7",
                  margin: 0
                }}>{service.quality}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CHAMADA PARA AÇÃO */}
      <div style={{
        textAlign: "center",
        padding: "60px 40px",
        background: "linear-gradient(135deg, #4361ee, #f72585)",
        borderRadius: "30px",
        boxShadow: "0 20px 40px rgba(67, 97, 238, 0.3)"
      }}>
        <h2 style={{
          fontSize: "2.5rem",
          color: "white",
          marginBottom: "20px",
          fontWeight: "bold"
        }}>
          Venha nos conhecer!
        </h2>
        <p style={{
          fontSize: "1.3rem",
          color: "white",
          opacity: 0.9,
          maxWidth: "700px",
          margin: "0 auto 30px"
        }}>
          Faça um orçamento sem compromisso e descubra como podemos transformar seu espaço
        </p>
        <div style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center"
        }}>
          <button
            onClick={() => navigate('/contato')}
            style={{
              padding: "15px 40px",
              background: "white",
              color: "#4361ee",
              border: "none",
              borderRadius: "50px",
              fontSize: "1.2rem",
              fontWeight: "600",
              cursor: "pointer",
              boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
              transition: "transform 0.2s"
            }}
          >
            Fazer orçamento
          </button>
          <button
            onClick={() => window.open('https://wa.me/5581994732981', '_blank')}
            style={{
              padding: "15px 40px",
              background: "transparent",
              color: "white",
              border: "2px solid white",
              borderRadius: "50px",
              fontSize: "1.2rem",
              fontWeight: "600",
              cursor: "pointer",
              transition: "transform 0.2s"
            }}
          >
            <i className="fab fa-whatsapp"></i> WhatsApp
          </button>
        </div>
      </div>

      {/* CSS RESPONSIVO INLINE */}
      <style>{`
        @media (max-width: 768px) {
          div[style*="grid-template-columns: repeat(2, 1fr)"] {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          
          h1 {
            font-size: 2.5rem !important;
          }
          
          h2 {
            font-size: 2rem !important;
          }
          
          div[style*="display: flex; gap: 20px; justify-content: center"] {
            flex-direction: column !important;
            align-items: center !important;
          }
          
          button {
            width: 100% !important;
            max-width: 300px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ServicesPage;
