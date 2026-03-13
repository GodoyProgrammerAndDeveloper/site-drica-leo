import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const [logoAmpliado, setLogoAmpliado] = useState(false);

  const services = [
    { icon: '👗', title: 'Guarda-roupas', desc: 'Organização completa com técnicas Marie Kondo' },
    { icon: '🍳', title: 'Cozinhas', desc: 'Despensa funcional e organização total' },
    { icon: '💻', title: 'Escritórios', desc: 'Home office produtivo e organizado' },
    { icon: '🛋️', title: 'Salas', desc: 'Ambientes integrados e aconchegantes' },
    { icon: '🧸', title: 'Quartos Kids', desc: 'Espaço lúdico e funcional para crianças' },
    { icon: '📦', title: 'Despensas', desc: 'Organização completa de alimentos' }
  ];

  const testimonials = [
    { 
      name: 'Cliente', 
      text: 'Muito boa. Pontual. Discreta. Muito educada. Recomendo!',
      icon: '👤'
    },
    { 
      name: 'Rodrigo Medeiros', 
      text: 'Profissional muito organizada e detalhista, trabalha com perfeição. Recomendo com certeza.',
      icon: '👨'
    },
    { 
      name: 'Manuella Rosal', 
      text: 'Adriana é impecável. Muito atenta, sabe escutar e consequentemente entender sua necessidade. Tudo ficou muito organizado e fácil de encontrar e reorganizar. Ela leva equipamentos bem interessantes e válidos, como máquina para etiquetar, banco retrátil... Além disso, ela me deu dicas valiosas para outros cômodos não contratados, cheirinhos e como evitar mofo... Pode contratar de olhos fechados.',
      icon: '👩'
    },
    { 
      name: 'Karolina', 
      text: 'Uma ótima profissional, trabalha com excelência fez todo o serviço organizer da minha casa e é muito atenciosa a todos os detalhes. Super recomendo.',
      icon: '👩'
    },
    { 
      name: 'Heleonora Nunes', 
      text: 'Adriana é uma profissional honesta, competente, criativa, inteligente, responsável, discreta, comprometida com o trabalho. Eu recomendo sim Adriana. Estou muito satisfeita com a Personal organizer.',
      icon: '👩'
    }
  ];

  return (
    <div style={{
      padding: "100px 20px 40px",
      maxWidth: "1200px",
      margin: "0 auto"
    }}>
      {/* SELO DE PROFISSIONAL CERTIFICADO */}
      <div style={{
        position: "fixed",
        top: "120px",
        right: "20px",
        background: "linear-gradient(135deg, #8b5cf6, #f43f5e)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "50px",
        fontSize: "0.9rem",
        fontWeight: "bold",
        boxShadow: "0 4px 15px rgba(139, 92, 246, 0.3)",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        gap: "8px",
        border: "2px solid white"
      }}>
        <span style={{ fontSize: "1.2rem" }}>🏆</span>
        <span>Profissional Certificado</span>
      </div>

      {/* LOGO CLICÁVEL */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <img
          src="/images/logo.png"
          alt="Logo Drica & Léo"
          onClick={() => setLogoAmpliado(true)}
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            objectFit: "cover",
            cursor: "pointer",
            border: "4px solid #8b5cf6",
            boxShadow: "0 4px 15px rgba(139, 92, 246, 0.3)"
          }}
        />
        <p style={{ marginTop: "10px", color: "#666", fontSize: "0.9rem" }}>
          Clique na logo para ampliar
        </p>
      </div>

      {/* MODAL DO LOGO */}
      {logoAmpliado && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2000,
            cursor: "pointer"
          }}
          onClick={() => setLogoAmpliado(false)}
        >
          <div
            style={{
              position: "relative",
              maxWidth: "90%",
              maxHeight: "90%"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLogoAmpliado(false)}
              style={{
                position: "absolute",
                top: "-40px",
                right: "0",
                fontSize: "2rem",
                background: "none",
                border: "none",
                color: "white",
                cursor: "pointer",
                padding: "10px"
              }}
            >
              ✕
            </button>
            <img
              src="/images/logo.png"
              alt="Logo Drica & Léo Ampliado"
              style={{
                maxWidth: "100%",
                maxHeight: "80vh",
                objectFit: "contain",
                borderRadius: "10px"
              }}
            />
          </div>
        </div>
      )}

      {/* HERO SECTION */}
      <section style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '40px',
        marginBottom: '80px',
        alignItems: 'center'
      }}>
        <div style={{ textAlign: 'left' }}>
          <h1 style={{
            fontSize: '3rem',
            color: '#8b5cf6',
            marginBottom: '10px'
          }}>Drica & Léo</h1>
          <p style={{
            fontSize: '1.3rem',
            color: '#f43f5e',
            marginBottom: '20px'
          }}>Personal Organizer</p>
          <p style={{
            fontSize: '1.1rem',
            color: '#666',
            lineHeight: '1.8',
            marginBottom: '30px'
          }}>
            Transformamos casas em lares organizados, onde cada objeto tem seu lugar 
            e cada espaço conta uma história. Com mais de 10 anos de experiência, 
            levamos profissionalismo, dedicação e excelência para cada projeto.
          </p>
          <div style={{ display: 'flex', gap: '15px' }}>
            <button 
              onClick={() => navigate('/contato')}
              style={{
                padding: '12px 30px',
                background: '#8b5cf6',
                color: 'white',
                border: 'none',
                borderRadius: '30px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              Fale Conosco
            </button>
            <button 
              onClick={() => navigate('/servicos')}
              style={{
                padding: '12px 30px',
                background: 'transparent',
                color: '#8b5cf6',
                border: '2px solid #8b5cf6',
                borderRadius: '30px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              Conheça nossos serviços
            </button>
          </div>
        </div>
        <div style={{
          width: '100%',
          height: '400px',
          borderRadius: '20px',
          overflow: 'hidden'
        }}>
          <img 
            src="/images/Organização com colmeias.jpeg" 
            alt="Organização profissional"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </div>
      </section>

      {/* SOBRE NÓS */}
      <section style={{ marginBottom: '80px' }}>
        <h2 style={{
          fontSize: '2.5rem',
          color: '#8b5cf6',
          textAlign: 'center',
          marginBottom: '40px'
        }}>Sobre Nós</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '40px',
          background: '#f9f9f9',
          padding: '40px',
          borderRadius: '20px'
        }}>
          <div style={{ color: '#666', lineHeight: '1.8' }}>
            <p>
              Somos Adriana (Drica) e Leonita (Léo), duas irmãs pernambucanas com uma 
              paixão em comum: transformar vidas através da organização. Nossa jornada 
              começou há mais de uma década, quando percebemos que um ambiente organizado 
              traz não apenas beleza estética, mas também paz de espírito, economia de 
              tempo e qualidade de vida.
            </p>
            <p>
              Com formação em Design de Interiores e especialização em Organização 
              Profissional, desenvolvemos uma metodologia única que combina técnicas 
              avançadas com um toque pessoal e acolhedor. Cada projeto é tratado com 
              a dedicação que merece, respeitando a individualidade de cada cliente 
              e suas necessidades específicas.
            </p>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section style={{ marginBottom: '80px' }}>
        <h2 style={{
          fontSize: '2.5rem',
          color: '#8b5cf6',
          textAlign: 'center',
          marginBottom: '40px'
        }}>Nossos Serviços</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '25px',
          marginBottom: '40px'
        }}>
          {services.map((service, index) => (
            <div 
              key={index} 
              style={{
                background: 'white',
                padding: '30px',
                borderRadius: '15px',
                textAlign: 'center',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                cursor: 'pointer'
              }}
              onClick={() => navigate('/servicos')}
            >
              <div style={{ fontSize: '3rem', marginBottom: '15px' }}>{service.icon}</div>
              <h3 style={{
                fontSize: '1.3rem',
                color: '#8b5cf6',
                marginBottom: '10px'
              }}>{service.title}</h3>
              <p style={{
                color: '#666',
                fontSize: '0.95rem',
                lineHeight: '1.6'
              }}>{service.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center' }}>
          <button 
            onClick={() => navigate('/servicos')}
            style={{
              padding: '12px 30px',
              background: '#8b5cf6',
              color: 'white',
              border: 'none',
              borderRadius: '30px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            Ver todos os serviços
          </button>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section style={{ marginBottom: '80px' }}>
        <h2 style={{
          fontSize: '2.5rem',
          color: '#8b5cf6',
          textAlign: 'center',
          marginBottom: '40px'
        }}>O que nossos clientes dizem</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '25px'
        }}>
          {testimonials.map((testimonial, index) => (
            <div key={index} style={{
              background: 'white',
              padding: '30px',
              borderRadius: '15px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
                marginBottom: '15px'
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: '#f43f5e',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '2rem'
                }}>
                  {testimonial.icon}
                </div>
                <h4 style={{ fontSize: '1.1rem', color: '#8b5cf6' }}>{testimonial.name}</h4>
              </div>
              <p style={{
                color: '#666',
                lineHeight: '1.8',
                marginBottom: '15px',
                fontStyle: 'italic'
              }}>"{testimonial.text}"</p>
              <div style={{ color: '#ffc107', fontSize: '1.2rem' }}>
                {'★'.repeat(5)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{
        textAlign: 'center',
        background: 'linear-gradient(135deg, #8b5cf6, #f43f5e)',
        color: 'white',
        padding: '60px',
        borderRadius: '20px'
      }}>
        <h2 style={{
          fontSize: '2.5rem',
          marginBottom: '20px',
          color: 'white'
        }}>Pronto para transformar seu espaço?</h2>
        <p style={{
          fontSize: '1.2rem',
          marginBottom: '30px',
          opacity: '0.9'
        }}>
          Entre em contato e agende uma visita. Vamos juntos criar o lar dos seus sonhos!
        </p>
        <button 
          onClick={() => navigate('/contato')}
          style={{
            padding: '12px 30px',
            background: 'white',
            color: '#8b5cf6',
            border: 'none',
            borderRadius: '30px',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer'
          }}
        >
          Falar no WhatsApp
        </button>
      </section>
    </div>
  );
};

export default HomePage;
