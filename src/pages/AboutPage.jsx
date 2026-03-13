import React from "react";

const AboutPage = () => {
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
          marginBottom: "20px",
          position: "relative",
          display: "inline-block"
        }}>
          Sobre Nós
        </h1>
        <div style={{
          width: "80px",
          height: "4px",
          background: "linear-gradient(135deg, #8b5cf6, #f43f5e)",
          margin: "0 auto",
          borderRadius: "2px"
        }}></div>
      </div>

      {/* HISTÓRIA */}
      <div style={{
        background: "white",
        borderRadius: "30px",
        padding: "50px",
        boxShadow: "0 20px 40px rgba(139, 92, 246, 0.1)",
        marginBottom: "60px",
        border: "1px solid #f0f0f0"
      }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          marginBottom: "30px"
        }}>
          <div style={{
            width: "60px",
            height: "60px",
            background: "linear-gradient(135deg, #8b5cf6, #f43f5e)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "2rem",
            color: "white"
          }}>
            📖
          </div>
          <h2 style={{
            fontSize: "2.2rem",
            color: "#8b5cf6",
            margin: 0
          }}>
            Nossa História
          </h2>
        </div>
        <p style={{
          fontSize: "1.1rem",
          color: "#444",
          lineHeight: "1.8",
          marginBottom: "20px"
        }}>
          Somos Adriana (Drica) e Leonita (Léo), duas irmãs pernambucanas com uma 
          paixão em comum: transformar vidas através da organização. Nossa jornada 
          começou há mais de uma década, quando percebemos que um ambiente organizado 
          vai muito além da estética - ele traz paz de espírito, economia de tempo 
          e qualidade de vida.
        </p>
        <p style={{
          fontSize: "1.1rem",
          color: "#444",
          lineHeight: "1.8"
        }}>
          Com formação em Design de Interiores e especialização em Organização 
          Profissional, desenvolvemos uma metodologia única que combina técnicas 
          avançadas com um toque pessoal e acolhedor. Cada projeto é tratado com 
          a dedicação que merece, respeitando a individualidade de cada cliente 
          e suas necessidades específicas.
        </p>
      </div>

      {/* MISSÃO E VISÃO */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "30px",
        marginBottom: "60px"
      }}>
        {/* MISSÃO */}
        <div style={{
          background: "linear-gradient(135deg, #f9f9f9, white)",
          borderRadius: "20px",
          padding: "40px",
          boxShadow: "0 10px 25px rgba(139, 92, 246, 0.05)",
          border: "1px solid #f0f0f0"
        }}>
          <div style={{
            width: "50px",
            height: "50px",
            background: "#8b5cf6",
            borderRadius: "15px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.8rem",
            color: "white",
            marginBottom: "25px"
          }}>
            🎯
          </div>
          <h3 style={{
            fontSize: "1.8rem",
            color: "#8b5cf6",
            marginBottom: "15px"
          }}>Missão</h3>
          <p style={{
            fontSize: "1.1rem",
            color: "#555",
            lineHeight: "1.7"
          }}>
            Levar organização e harmonia para os lares, transformando espaços e simplificando a vida das pessoas.
          </p>
        </div>

        {/* VISÃO */}
        <div style={{
          background: "linear-gradient(135deg, #f9f9f9, white)",
          borderRadius: "20px",
          padding: "40px",
          boxShadow: "0 10px 25px rgba(139, 92, 246, 0.05)",
          border: "1px solid #f0f0f0"
        }}>
          <div style={{
            width: "50px",
            height: "50px",
            background: "#f43f5e",
            borderRadius: "15px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.8rem",
            color: "white",
            marginBottom: "25px"
          }}>
            👁️
          </div>
          <h3 style={{
            fontSize: "1.8rem",
            color: "#f43f5e",
            marginBottom: "15px"
          }}>Visão</h3>
          <p style={{
            fontSize: "1.1rem",
            color: "#555",
            lineHeight: "1.7"
          }}>
            Ser referência em organização residencial no Brasil, mostrando que é possível ter uma casa organizada sem abrir mão da personalidade e do aconchego.
          </p>
        </div>
      </div>

      {/* VALORES */}
      <div style={{ marginBottom: "60px" }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "15px",
          marginBottom: "40px"
        }}>
          <div style={{
            width: "50px",
            height: "50px",
            background: "linear-gradient(135deg, #8b5cf6, #f43f5e)",
            borderRadius: "15px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.5rem",
            color: "white"
          }}>
            💎
          </div>
          <h2 style={{
            fontSize: "2rem",
            color: "#8b5cf6",
            margin: 0
          }}>
            Nossos Valores
          </h2>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "25px"
        }}>
          <div style={{
            background: "white",
            borderRadius: "20px",
            padding: "30px 20px",
            textAlign: "center",
            boxShadow: "0 10px 20px rgba(139, 92, 246, 0.05)",
            border: "1px solid #f0f0f0"
          }}>
            <div style={{ fontSize: "3rem", marginBottom: "15px" }}>❤️</div>
            <h4 style={{ fontSize: "1.3rem", color: "#8b5cf6", marginBottom: "10px" }}>Amor</h4>
            <p style={{ color: "#666", fontSize: "0.95rem", lineHeight: "1.6" }}>
              Colocamos amor em cada detalhe, porque organizar é um ato de carinho consigo mesmo.
            </p>
          </div>
          <div style={{
            background: "white",
            borderRadius: "20px",
            padding: "30px 20px",
            textAlign: "center",
            boxShadow: "0 10px 20px rgba(139, 92, 246, 0.05)",
            border: "1px solid #f0f0f0"
          }}>
            <div style={{ fontSize: "3rem", marginBottom: "15px" }}>🤝</div>
            <h4 style={{ fontSize: "1.3rem", color: "#8b5cf6", marginBottom: "10px" }}>Respeito</h4>
            <p style={{ color: "#666", fontSize: "0.95rem", lineHeight: "1.6" }}>
              Respeitamos a história e os pertences de cada cliente, trabalhando com discrição e ética.
            </p>
          </div>
          <div style={{
            background: "white",
            borderRadius: "20px",
            padding: "30px 20px",
            textAlign: "center",
            boxShadow: "0 10px 20px rgba(139, 92, 246, 0.05)",
            border: "1px solid #f0f0f0"
          }}>
            <div style={{ fontSize: "3rem", marginBottom: "15px" }}>✨</div>
            <h4 style={{ fontSize: "1.3rem", color: "#8b5cf6", marginBottom: "10px" }}>Excelência</h4>
            <p style={{ color: "#666", fontSize: "0.95rem", lineHeight: "1.6" }}>
              Buscamos a excelência em cada projeto, com técnicas atualizadas e resultados duradouros.
            </p>
          </div>
          <div style={{
            background: "white",
            borderRadius: "20px",
            padding: "30px 20px",
            textAlign: "center",
            boxShadow: "0 10px 20px rgba(139, 92, 246, 0.05)",
            border: "1px solid #f0f0f0"
          }}>
            <div style={{ fontSize: "3rem", marginBottom: "15px" }}>🌱</div>
            <h4 style={{ fontSize: "1.3rem", color: "#8b5cf6", marginBottom: "10px" }}>Transformação</h4>
            <p style={{ color: "#666", fontSize: "0.95rem", lineHeight: "1.6" }}>
              Acreditamos no poder transformador da organização para uma vida mais leve e feliz.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
