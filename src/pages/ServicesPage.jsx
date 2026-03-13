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
      margin: "0 auto"
    }}>
      {/* CABEÇALHO */}
      <div style={{
        textAlign: "center",
        marginBottom: "60px"
      }}>
        <h1 style={{
          fontSize: "3rem",
          color: "#8b5cf6",
          marginBottom: "20px"
        }}>
          Nossos Serviços
        </h1>
        <p style={{
          fontSize: "1.3rem",
          color: "#666",
          maxWidth: "800px",
          margin: "0 auto"
        }}>
          Mais do que organização, transformamos espaços para transformar vidas
        </p>
      </div>

      {/* CARDS DE SERVIÇOS - COM IMAGENS */}
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
              boxShadow: "0 10px 30px rgba(139, 92, 246, 0.1)",
              border: "1px solid #f0f0f0",
              transition: "transform 0.2s"
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
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
                onError={(e) => {
                  e.target.src = "/images/logo.png"; // fallback caso a imagem não exista
                }}
              />
              <div style={{
                position: "absolute",
                top: "20px",
                left: "20px",
                background: "rgba(139, 92, 246, 0.9)",
                color: "white",
                padding: "10px 15px",
                borderRadius: "30px",
                fontSize: "1.5rem",
                display: "flex",
                alignItems: "center",
                gap: "10px"
              }}>
                <span>{service.icon}</span>
                <span style={{ fontSize: "1rem", fontWeight: "600" }}>{service.title}</span>
              </div>
            </div>

            {/* CONTEÚDO */}
            <div style={{ padding: "30px" }}>
              {/* BENEFÍCIO */}
              <div style={{
                background: "#f9f9f9",
                padding: "20px",
                borderRadius: "15px",
                marginBottom: "20px"
              }}>
                <h3 style={{
                  fontSize: "1.2rem",
                  color: "#f43f5e",
                  marginBottom: "10px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px"
                }}>
                  <span style={{ fontSize: "1.5rem" }}>✨</span>
                  Benefício
                </h3>
                <p style={{
                  color: "#444",
                  fontSize: "1rem",
                  lineHeight: "1.7",
                  margin: 0
                }}>{service.benefit}</p>
              </div>

              {/* QUALIDADE */}
              <div style={{
                background: "#f5f3ff",
                padding: "20px",
                borderRadius: "15px"
              }}>
                <h3 style={{
                  fontSize: "1.2rem",
                  color: "#8b5cf6",
                  marginBottom: "10px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px"
                }}>
                  <span style={{ fontSize: "1.5rem" }}>🏆</span>
                  Qualidade
                </h3>
                <p style={{
                  color: "#444",
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
        background: "linear-gradient(135deg, #8b5cf6, #f43f5e)",
        borderRadius: "30px",
        boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)"
      }}>
        <h2 style={{
          fontSize: "2.5rem",
          color: "white",
          marginBottom: "20px"
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
              color: "#8b5cf6",
              border: "none",
              borderRadius: "50px",
              fontSize: "1.2rem",
              fontWeight: "600",
              cursor: "pointer",
              boxShadow: "0 5px 15px rgba(0,0,0,0.2)"
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
              cursor: "pointer"
            }}
          >
            <i className="fab fa-whatsapp"></i> WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
