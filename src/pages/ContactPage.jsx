import React from "react";

const ContactPage = () => {
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
          Entre em Contato
        </h1>
        <div style={{
          width: "80px",
          height: "4px",
          background: "linear-gradient(135deg, #8b5cf6, #f43f5e)",
          margin: "0 auto",
          borderRadius: "2px"
        }}></div>
        <p style={{
          fontSize: "1.2rem",
          color: "#666",
          marginTop: "20px"
        }}>
          Estamos prontas para atender você
        </p>
      </div>

      {/* CARDS DE CONTATO - COM IMAGENS/ÍCONES */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "25px",
        marginBottom: "60px"
      }}>
        {/* WHATSAPP */}
        <div style={{
          background: "white",
          borderRadius: "20px",
          padding: "35px",
          boxShadow: "0 10px 30px rgba(37, 211, 102, 0.1)",
          border: "1px solid #e0f2e9",
          display: "flex",
          alignItems: "center",
          gap: "20px"
        }}>
          <div style={{
            width: "70px",
            height: "70px",
            background: "#25d366",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "2.5rem",
            color: "white"
          }}>
            📱
          </div>
          <div>
            <h3 style={{
              fontSize: "1.3rem",
              color: "#25d366",
              marginBottom: "5px"
            }}>WhatsApp</h3>
            <p style={{
              fontSize: "1.1rem",
              color: "#444",
              marginBottom: "5px"
            }}>(81) 99473-2981</p>
            <p style={{
              fontSize: "0.9rem",
              color: "#666"
            }}>Clique para conversar</p>
          </div>
        </div>

        {/* INSTAGRAM */}
        <div style={{
          background: "white",
          borderRadius: "20px",
          padding: "35px",
          boxShadow: "0 10px 30px rgba(225, 48, 108, 0.1)",
          border: "1px solid #fce4ec",
          display: "flex",
          alignItems: "center",
          gap: "20px"
        }}>
          <div style={{
            width: "70px",
            height: "70px",
            background: "linear-gradient(45deg, #f09433, #d62976, #962fbf, #4f5bd5)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "2.5rem",
            color: "white"
          }}>
            📷
          </div>
          <div>
            <h3 style={{
              fontSize: "1.3rem",
              color: "#d62976",
              marginBottom: "5px"
            }}>Instagram</h3>
            <p style={{
              fontSize: "1.1rem",
              color: "#444",
              marginBottom: "5px"
            }}>@adrianamoura.organizer</p>
            <p style={{
              fontSize: "0.9rem",
              color: "#666"
            }}>Siga-nos e veja nosso trabalho</p>
          </div>
        </div>

        {/* E-MAIL */}
        <div style={{
          background: "white",
          borderRadius: "20px",
          padding: "35px",
          boxShadow: "0 10px 30px rgba(139, 92, 246, 0.1)",
          border: "1px solid #ede9fe",
          display: "flex",
          alignItems: "center",
          gap: "20px"
        }}>
          <div style={{
            width: "70px",
            height: "70px",
            background: "#8b5cf6",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "2.5rem",
            color: "white"
          }}>
            ✉️
          </div>
          <div>
            <h3 style={{
              fontSize: "1.3rem",
              color: "#8b5cf6",
              marginBottom: "5px"
            }}>E-mail</h3>
            <p style={{
              fontSize: "1.1rem",
              color: "#444",
              marginBottom: "5px"
            }}>Adrianadebritomoura@gmail.com</p>
            <p style={{
              fontSize: "0.9rem",
              color: "#666"
            }}>Envie sua mensagem</p>
          </div>
        </div>

        {/* LOCALIZAÇÃO */}
        <div style={{
          background: "white",
          borderRadius: "20px",
          padding: "35px",
          boxShadow: "0 10px 30px rgba(244, 63, 94, 0.1)",
          border: "1px solid #ffe4e6",
          display: "flex",
          alignItems: "center",
          gap: "20px"
        }}>
          <div style={{
            width: "70px",
            height: "70px",
            background: "#f43f5e",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "2.5rem",
            color: "white"
          }}>
            📍
          </div>
          <div>
            <h3 style={{
              fontSize: "1.3rem",
              color: "#f43f5e",
              marginBottom: "5px"
            }}>Localização</h3>
            <p style={{
              fontSize: "1.1rem",
              color: "#444",
              marginBottom: "5px"
            }}>Recife - Pernambuco</p>
            <p style={{
              fontSize: "0.9rem",
              color: "#666"
            }}>Atendemos em toda região</p>
          </div>
        </div>
      </div>

      {/* HORÁRIO DE ATENDIMENTO */}
      <div style={{
        background: "linear-gradient(135deg, #f9f9f9, white)",
        borderRadius: "20px",
        padding: "40px",
        marginBottom: "40px"
      }}>
        <h3 style={{
          fontSize: "1.8rem",
          color: "#8b5cf6",
          marginBottom: "20px",
          textAlign: "center"
        }}>Horário de Atendimento</h3>
        <div style={{
          textAlign: "center"
        }}>
          <p style={{ fontSize: "1.2rem", color: "#444", fontWeight: "500" }}>
            Segunda a sábado das 08:00 às 18:00
          </p>
        </div>
      </div>

      {/* FORMULÁRIO DE CONTATO */}
      <div style={{
        background: "white",
        borderRadius: "20px",
        padding: "40px",
        marginBottom: "40px",
        boxShadow: "0 10px 30px rgba(139, 92, 246, 0.1)",
        border: "1px solid #f0f0f0"
      }}>
        <h3 style={{
          fontSize: "1.8rem",
          color: "#8b5cf6",
          marginBottom: "30px",
          textAlign: "center"
        }}>Envie sua mensagem</h3>
        
        <form
          action="https://formsubmit.co/Adrianadebritomoura@gmail.com"
          method="POST"
          style={{
            display: "grid",
            gap: "20px",
            maxWidth: "600px",
            margin: "0 auto"
          }}
        >
          <input
            type="text"
            name="nome"
            placeholder="Seu nome"
            required
            style={{
              padding: "15px",
              borderRadius: "10px",
              border: "1px solid #e0e0e0",
              fontSize: "1rem"
            }}
          />
          <input
            type="email"
            name="email"
            placeholder="Seu e-mail"
            required
            style={{
              padding: "15px",
              borderRadius: "10px",
              border: "1px solid #e0e0e0",
              fontSize: "1rem"
            }}
          />
          <textarea
            name="mensagem"
            placeholder="Sua mensagem"
            rows="5"
            required
            style={{
              padding: "15px",
              borderRadius: "10px",
              border: "1px solid #e0e0e0",
              fontSize: "1rem",
              resize: "vertical"
            }}
          ></textarea>
          
          <input
            type="hidden"
            name="_subject"
            value="Novo contato do site Drica & Léo"
          />
          <input
            type="hidden"
            name="_captcha"
            value="false"
          />
          
          <button
            type="submit"
            style={{
              padding: "15px 30px",
              background: "linear-gradient(135deg, #8b5cf6, #f43f5e)",
              color: "white",
              border: "none",
              borderRadius: "30px",
              fontSize: "1.1rem",
              fontWeight: "600",
              cursor: "pointer",
              width: "100%"
            }}
          >
            Enviar mensagem
          </button>
        </form>
        
        <p style={{
          textAlign: "center",
          marginTop: "20px",
          color: "#666",
          fontSize: "0.9rem"
        }}>
          Seu e-mail será enviado com segurança. Responderemos em até 24h.
        </p>
      </div>

      {/* CHAMADA FINAL */}
      <div style={{
        textAlign: "center",
        padding: "40px",
        background: "white",
        borderRadius: "20px"
      }}>
        <p style={{
          fontSize: "1.2rem",
          color: "#666",
          marginBottom: "20px"
        }}>
          Escolha a melhor forma de falar conosco!
        </p>
        <div style={{
          display: "flex",
          gap: "15px",
          justifyContent: "center"
        }}>
          <a
            href="https://wa.me/5581994732981"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "12px 30px",
              background: "#25d366",
              color: "white",
              textDecoration: "none",
              borderRadius: "30px",
              fontWeight: "600"
            }}
          >
            WhatsApp
          </a>
          <a
            href="https://instagram.com/adrianamoura.organizer"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "12px 30px",
              background: "linear-gradient(45deg, #f09433, #d62976, #962fbf, #4f5bd5)",
              color: "white",
              textDecoration: "none",
              borderRadius: "30px",
              fontWeight: "600"
            }}
          >
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
