const fs = require('fs');

const landing = `import React from 'react';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import { ShieldCheck, CreditCard, Banknote, ArrowRight } from 'lucide-react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <>
      <section className="hero-section">
        <div className="container hero-content">
          <h1 className="hero-title">El banco de todos los dominicanos, ahora m\u00E1s digital.</h1>
          <p className="hero-subtitle">
            Experimenta la nueva banca en l\u00EDnea de Banreservas. M\u00E1s r\u00E1pida, m\u00E1s segura y dise\u00F1ada para impulsar tus sue\u00F1os.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Button variant="accent" size="lg">
              Acceder a TuBanco <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="secondary" size="lg" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}>
              Hazte Cliente
            </Button>
          </div>
        </div>
      </section>

      <section className="container services-section">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Soluciones Financieras</h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.125rem' }}>
            Productos dise\u00F1ados para cada etapa de tu vida
          </p>
        </div>
        
        <div className="services-grid">
          <Card interactive title="Cuentas de Ahorro" description="Haz crecer tu dinero con nuestras tasas preferenciales y cero comisiones.">
             <div style={{ marginTop: '1.5rem', color: 'var(--color-primary)', display: 'flex', justifyContent: 'center' }}>
               <Banknote size={64} strokeWidth={1.5} />
             </div>
          </Card>
          <Card interactive title="Tarjetas de Cr\u00E9dito" description="Disfruta de beneficios exclusivos, Puntos Banreservas y cashback.">
             <div style={{ marginTop: '1.5rem', color: 'var(--color-accent)', display: 'flex', justifyContent: 'center' }}>
               <CreditCard size={64} strokeWidth={1.5} />
             </div>
          </Card>
           <Card interactive title="Pr\u00E9stamos Personales" description="Financiamiento r\u00E1pido y flexible para lograr tus metas de hoy.">
             <div style={{ marginTop: '1.5rem', color: 'var(--color-primary)', display: 'flex', justifyContent: 'center' }}>
               <ShieldCheck size={64} strokeWidth={1.5} />
             </div>
          </Card>
        </div>
      </section>
    </>
  );
};

export default LandingPage;`;

const navbar = `import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Landmark } from 'lucide-react';
import Button from '../common/Button';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-brand">
          <Landmark size={28} />
          <span>Banreservas</span>
        </Link>
        
        <div className="navbar-nav">
          <NavLink to="/" className={({isActive}) => \`nav-link \${isActive ? 'active' : ''}\`}>Personas</NavLink>
          <NavLink to="/business" className={({isActive}) => \`nav-link \${isActive ? 'active' : ''}\`}>Empresas</NavLink>
          <NavLink to="/loans" className={({isActive}) => \`nav-link \${isActive ? 'active' : ''}\`}>Pr\u00E9stamos</NavLink>
        </div>

        <div className="navbar-actions">
           <Button variant="accent" size="sm">TuBanco</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;`;

const app = `import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <Router>
      <div className="app-layout" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </main>
        <footer style={{ background: 'var(--color-bg-dark)', color: 'white', padding: '2rem', textAlign: 'center' }}>
          <div className="container">
            <p>\u00A9 2025 Banco de Reservas de la Rep\u00FAblica Dominicana. Todos los derechos reservados.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;`;

fs.writeFileSync('src/pages/LandingPage.jsx', landing, 'utf8');
fs.writeFileSync('src/components/layout/Navbar.jsx', navbar, 'utf8');
fs.writeFileSync('src/App.jsx', app, 'utf8');
