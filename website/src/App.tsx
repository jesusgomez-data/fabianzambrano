import { useState, useEffect } from 'react';
import { 
  Phone, 
  MapPin, 
  Activity,
  CheckCircle2,
  Video,
  ArrowRight,
  ShieldCheck,
  Stethoscope
} from 'lucide-react';
import { motion } from 'framer-motion';

const Logo = () => (
  <svg width="280" height="60" viewBox="0 0 280 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="main-logo-svg">
    <circle cx="30" cy="30" r="22" stroke="#06b6d4" stroke-width="2.5" />
    <path d="M30 20V40M20 30H40" stroke="#06b6d4" stroke-width="4" stroke-linecap="round" />
    <path d="M30 12C30 12 48 15 48 30C48 45 30 48 30 48" stroke="#06b6d4" stroke-width="2.5" stroke-linecap="round" opacity="0.3" />
    <text x="60" y="32" fill="currentColor" font-family="'Outfit', sans-serif" font-weight="700" font-size="20" className="logo-text-primary">
      FABIAN <tspan fill="#06b6d4">ZAMBRANO</tspan>
    </text>
    <text x="60" y="48" fill="#64748b" font-family="'Outfit', sans-serif" font-weight="500" font-size="9" letter-spacing="0.2em" className="logo-text-secondary">
      BIENESTAR & MOVIMIENTO
    </text>
  </svg>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`nav-fixed ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="container nav-content">
        <a href="#inicio" className="logo-container" style={{ color: scrolled ? '#0f172a' : 'white' }}>
          <Logo />
        </a>
        <div className="nav-links">
          <a href="#inicio">Inicio</a>
          <a href="#servicios">Especialidades</a>
          <a href="#sobre-mi">Sobre Mí</a>
          <a href="#videos">Videos</a>
          <a href="#reserva">Contacto</a>
        </div>
        <a href="#reserva" className="btn-primary">Reservar Cita</a>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="inicio" className="hero">
      <div className="hero-video-bg">
        <video autoPlay muted loop playsInline>
          <source src="/assets/videos/video1.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
      </div>
      <div className="container" style={{ position: 'relative', zIndex: 20 }}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ maxWidth: '800px' }}
        >
          <span className="hero-text-shadow" style={{ 
            color: 'var(--primary)', 
            fontWeight: 800, 
            letterSpacing: '0.2em', 
            textTransform: 'uppercase', 
            fontSize: '0.85rem',
            display: 'block',
            marginBottom: '1.5rem'
          }}>
            Fisioterapia Avanzada & Pilates
          </span>
          <h1 className="hero-text-shadow" style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', marginBottom: '2rem', color: 'var(--secondary)' }}>
            Recupera tu <span className="gradient-text">Bienestar</span> con Movimiento
          </h1>
          <p className="hero-text-shadow" style={{ fontSize: '1.2rem', color: '#0f172a', marginBottom: '3rem', maxWidth: '600px', fontWeight: 500 }}>
            Tratamientos personalizados de terapia manual y pilates clínico para que vuelvas a moverte sin dolor. 
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <a href="#reserva" className="btn-primary" style={{ padding: '1rem 2.5rem' }}>
              Solicitar Disponibilidad <ArrowRight size={20} style={{ marginLeft: '10px' }} />
            </a>
            <a href="#servicios" style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              color: 'var(--secondary)', 
              fontWeight: 700, 
              textDecoration: 'none',
              padding: '1rem'
            }}>
              Ver Especialidades
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const items = [
    { title: "Terapia Manual", icon: <Stethoscope />, desc: "Técnicas especializadas para aliviar el dolor y restaurar la movilidad articular." },
    { title: "Pilates Clínico", icon: <Activity />, desc: "Entrenamiento de precisión enfocado en el core y la postura con reformer y mat." },
    { title: "Adulto Mayor", icon: <ShieldCheck />, desc: "Programas de movilidad y prevención de caídas diseñados para la tercera edad." },
    { title: "Consultas Online", icon: <Video />, desc: "Diagnóstico y seguimiento personalizado desde la comodidad de tu hogar." }
  ];

  return (
    <section id="servicios" className="section bg-sub">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Especialidades Médicas</h2>
          <p style={{ color: 'var(--text-light)', maxWidth: '600px', margin: '0 auto' }}>
            Ofrecemos un enfoque integral para tu salud física, combinando años de experiencia académica y práctica clínica.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {items.map((item, i) => (
            <motion.div 
              whileHover={{ y: -10 }}
              key={i} 
              className="card"
            >
              <div className="icon-box">{item.icon}</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{item.title}</h3>
              <p style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="sobre-mi" className="section">
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '5rem', alignItems: 'center' }}>
        <div style={{ position: 'relative' }}>
          <img src="/assets/images/foto1.jpeg" alt="Fabian" style={{ width: '100%', borderRadius: '32px', boxShadow: '0 30px 60px rgba(0,0,0,0.1)' }} />
          <div style={{ 
            position: 'absolute', 
            bottom: '-30px', 
            right: '-30px', 
            background: 'var(--secondary)', 
            color: 'white', 
            padding: '2rem', 
            borderRadius: '24px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
          }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 800 }}>7+</div>
            <div style={{ fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.7 }}>Años de Experiencia</div>
          </div>
        </div>
        <div>
          <span style={{ color: 'var(--primary)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.8rem' }}>Perfil Profesional</span>
          <h2 style={{ fontSize: '3rem', margin: '1.5rem 0' }}>Lic. Fabian Zambrano</h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-light)', marginBottom: '2rem', lineHeight: '1.8' }}>
            Graduado de la <strong>Universidad Arturo Michelena</strong> (Venezuela). Mi pasión es la fisioterapia manual y la rehabilitación activa. He desarrollado mi carrera en clínicas de prestigio y atención domiciliaria en Venezuela y Argentina.
          </p>
          <div style={{ display: 'grid', gap: '1.2rem' }}>
            {["Fisioterapeuta Colegiado", "Instructor de Pilates Certificado", "Especialista en Geriatría", "Atención Domiciliaria en Madrid"].map((t, i) => (
              <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <CheckCircle2 style={{ color: 'var(--primary)' }} size={24} />
                <span style={{ fontWeight: 600 }}>{t}</span>
              </div>
            ))}
          </div>
          <a href="/assets/docs/cv_fabi_2025.pdf" className="btn-primary" style={{ marginTop: '3rem', display: 'inline-block' }}>
            Descargar Trayectoria Completa
          </a>
        </div>
      </div>
    </section>
  );
};

const VideoGallery = () => {
  const videos = [
    { src: "/assets/videos/video2.mp4", title: "Técnica de Masaje" },
    { src: "/assets/videos/video3.mp4", title: "Pilates Reformer" },
    { src: "/assets/videos/video4.mp4", title: "Ejercicios Mat" },
    { src: "/assets/videos/video5.mp4", title: "Atención Domicilio" }
  ];

  return (
    <section id="videos" className="section bg-sub">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '2.5rem' }}>Galería de Movimiento</h2>
          <p style={{ color: 'var(--text-light)', marginTop: '1rem' }}>Observa nuestras técnicas y ejercicios en acción real.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '3rem', justifyContent: 'center' }}>
          {videos.map((v, i) => (
            <div key={i} className="mobile-mockup" style={{ margin: '0 auto' }}>
               <div className="mobile-screen">
                  <video autoPlay muted loop playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
                    <source src={v.src} type="video/mp4" />
                  </video>
                  <div style={{ 
                    position: 'absolute', 
                    bottom: 0, 
                    left: 0, 
                    right: 0, 
                    background: 'linear-gradient(transparent, rgba(0,0,0,0.8))', 
                    padding: '2rem 1rem 1rem', 
                    textAlign: 'center',
                    color: 'white'
                  }}>
                    <span style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase' }}>{v.title}</span>
                  </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Booking = () => {
  const [formData, setFormData] = useState({ name: '', service: 'Terapia Manual' });

  return (
    <section id="reserva" className="section">
      <div className="container">
        <div style={{ 
          background: 'white', 
          borderRadius: '40px', 
          border: '1px solid var(--border)', 
          overflow: 'hidden', 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          boxShadow: '0 40px 100px rgba(0,0,0,0.05)'
        }}>
          <div style={{ padding: '4rem', background: 'var(--secondary)', color: 'white' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'white' }}>Reserva tu Sesión</h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '4rem', fontSize: '1.1rem' }}>
              Selecciona tu servicio y consulta los horarios disponibles directamente vía WhatsApp.
            </p>
            <div style={{ display: 'grid', gap: '2rem' }}>
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                <MapPin style={{ color: 'var(--primary)' }} />
                <span>Leganés, Madrid & Domicilio</span>
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                <Phone style={{ color: 'var(--primary)' }} />
                <span>+34 682 077 678</span>
              </div>
            </div>
          </div>
          <div style={{ padding: '4rem' }}>
            <div style={{ display: 'grid', gap: '2rem' }}>
              <div>
                <label style={{ display: 'block', fontWeight: 700, marginBottom: '0.8rem', fontSize: '0.9rem' }}>Nombre Completo</label>
                <input type="text" placeholder="Escribe tu nombre" onChange={e => setFormData({...formData, name: e.target.value})} />
              </div>
              <div>
                <label style={{ display: 'block', fontWeight: 700, marginBottom: '0.8rem', fontSize: '0.9rem' }}>Servicio de Interés</label>
                <select onChange={e => setFormData({...formData, service: e.target.value})}>
                  <option>Terapia Manual</option>
                  <option>Pilates Reformer/Mat</option>
                  <option>Atención Adultos Mayores</option>
                  <option>Consulta Online</option>
                </select>
              </div>
              <button 
                className="btn-primary" 
                style={{ width: '100%', padding: '1.2rem', fontSize: '1.1rem' }}
                onClick={() => window.open(`https://wa.me/34682077678?text=Hola Fabian, mi nombre es ${formData.name}. Me gustaría consultar disponibilidad para ${formData.service}.`, '_blank')}
              >
                Consultar por WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer>
    <div className="container" style={{ textAlign: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
        <Logo />
      </div>
      <div style={{ color: 'var(--text-light)', fontSize: '0.9rem', marginBottom: '1rem' }}>
        © 2025 Fabian Zambrano. Todos los derechos reservados.
      </div>
      <div style={{ fontSize: '0.8rem', color: 'var(--text-light)', opacity: 0.8 }}>
        Diseño y desarrollo por <a href="https://portfolio-jesusgomez.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 600 }}>Jesús Gómez</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <VideoGallery />
      <Booking />
      <Footer />
    </>
  );
}
