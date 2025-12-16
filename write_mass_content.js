import fs from 'fs';

// --- Login Modal with AES-256 ---
const loginModalCtx = `import React, { useState } from 'react';
import { X, Lock, Eye, EyeOff, ShieldCheck } from 'lucide-react';
import CryptoJS from 'crypto-js';
import './LoginModal.css';

const LoginModal = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // AES-256 Encryption Simulation
    const secretKey = 'banreservas-secure-key-2025'; // In real app, this key management is complex
    const encryptedData = CryptoJS.AES.encrypt(JSON.stringify({ username, password }), secretKey).toString();

    console.log('AES-256 Encrypted Payload:', encryptedData);

    setTimeout(() => {
      alert('Login Seguro Procesado via AES-256.\\nPayload: ' + encryptedData.substring(0, 20) + '...');
      setIsLoading(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="login-overlay">
      <div className="login-modal">
        <button className="close-btn" onClick={onClose}><X size={24} /></button>
        <div className="login-header">
          <div className="icon-bg">
            <ShieldCheck size={40} className="text-primary" />
          </div>
          <h2>TuBanco Seguro</h2>
          <p>Ingresa tus credenciales con encriptaci\\u00F3n de grado militar AES-256.</p>
        </div>

        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label>Usuario</label>
            <input 
              type="text" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              placeholder="Ingresa tu usuario"
            />
          </div>
          <div className="form-group">
            <label>Contrase\\u00F1a</label>
            <div className="password-input">
              <input 
                type={showPassword ? "text" : "password"} 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Ingresa tu clave"
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
          
          <div className="security-badge">
            <Lock size={14} /> Conexi\\u00F3n Encriptada SSL/TLS + AES-256
          </div>

          <button type="submit" className="login-btn" disabled={isLoading}>
            {isLoading ? 'Procesando...' : 'Acceder de forma segura'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;`;

const loginModalCss = `.login-overlay {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease;
}

.login-modal {
  background: white;
  width: 90%;
  max-width: 400px;
  border-radius: 20px;
  padding: 2rem;
  position: relative;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  animation: slideUp 0.3s ease;
}

.close-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  cursor: pointer;
  color: #666;
}

.login-header {
  text-align: center;
  margin-bottom: 2rem;
}

.icon-bg {
  width: 80px;
  height: 80px;
  background: #f0fdf4;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
}

.login-header h2 {
  color: var(--color-primary);
  margin-bottom: 0.5rem;
}

.login-header p {
  font-size: 0.9rem;
  color: #666;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: #333;
}

.form-group input {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.2s;
}

.form-group input:focus {
  outline: none;
  border-color: var(--color-accent);
  box-shadow: 0 0 0 3px rgba(227, 28, 36, 0.1);
}

.password-input {
  position: relative;
}

.password-input button {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #999;
  cursor: pointer;
}

.security-badge {
  background: #f8fafc;
  color: #64748b;
  font-size: 0.8rem;
  padding: 0.5rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.login-btn {
  width: 100%;
  background: var(--color-primary);
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 10px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
}

.login-btn:hover {
  background: var(--color-primary-dark);
}

@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
@keyframes slideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
`;


// --- Business Page ---
const businessCtx = `import React from 'react';
import { Building2, Briefcase, Users, PieChart, Globe, Truck, ShieldCheck } from 'lucide-react';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import './BusinessPage.css';

const BusinessPage = () => {
  return (
    <div className="business-page">
      <section className="business-hero">
        <div className="container">
           <div className="badge">SOLUCIONES CORPORATIVAS</div>
           <h1>Impulsamos el crecimiento de tu empresa.</h1>
           <p>Herramientas financieras robustas dise\\u00F1adas para optimizar tu flujo de caja, gestionar n\\u00F3minas y expandir tus operaciones globalmente.</p>
           <div className="hero-buttons">
             <Button variant="accent" size="lg">Contactar Asesor</Button>
             <Button variant="secondary" size="lg" style={{color:'white', borderColor:'rgba(255,255,255,0.3)'}}>Ver Productos</Button>
           </div>
        </div>
      </section>

      <section className="container section-padding">
        <div className="section-header">
           <h2>Ecosistema Empresarial</h2>
           <p>Todo lo que tu negocio necesita en un solo lugar.</p>
        </div>

        <div className="business-grid">
           <Card interactive title="Gesti\\u00F3n de N\\u00F3mina Autom\\u00E1tica" description="Automatiza el pago a tus colaboradores con nuestra plataforma segura. Dispersi\\u00F3n inmediata 24/7.">
              <Users size={48} className="text-primary mb-4" />
           </Card>
           
           <Card interactive title="Financiamiento Comercial" description="L\\u00EDneas de cr\\u00E9dito revolventes y pr\\u00E9stamos a t\\u00E9rmino para capital de trabajo y expansi\\u00F3n.">
              <PieChart size={48} className="text-accent mb-4" />
           </Card>

           <Card interactive title="Comercio Internacional" description="Cartas de cr\\u00E9dito, transferencias SWIFT y compra-venta de divisas con tasas preferenciales.">
              <Globe size={48} className="text-primary mb-4" />
           </Card>

           <Card interactive title="Soluciones de Cobro (POS)" description="Terminales de punto de venta y botones de pago e-commerce. Acepta todas las tarjetas.">
              <Building2 size={48} className="text-accent mb-4" />
           </Card>

           <Card interactive title="Leasing de Equipos" description="Adquiere maquinaria y flotillas con beneficios fiscales. Arrendamiento con opci\\u00F3n a compra.">
              <Truck size={48} className="text-primary mb-4" />
           </Card>

           <Card interactive title="Seguros Corporativos" description="Protege tu patrimonio, flota y empleados contra cualquier eventualidad.">
              <ShieldCheck size={48} className="text-accent mb-4" />
           </Card>
        </div>
      </section>
      
      <section className="bg-gray">
         <div className="container contact-section">
            <div className="contact-text">
               <h2>Hablemos de negocios</h2>
               <p>Nuestros gerentes especializados est\\u00E1n listos para visitar tu empresa y dise\\u00F1ar un plan a medida.</p>
               <ul className="contact-features">
                 <li><ShieldCheck size={18} /> Asesor\\u00EDa financiera experta</li>
                 <li><Briefcase size={18} /> Atenci\\u00F3n prioritaria en sucursales</li>
                 <li><Globe size={18} /> Acceso a NetBanking Empresarial</li>
               </ul>
            </div>
            <div className="contact-form-card">
               <h3>Solicita una cita</h3>
               <form>
                  <input type="text" placeholder="Nombre de la Empresa" />
                  <input type="text" placeholder="RNC" />
                  <input type="email" placeholder="Correo Electr\\u00F3nico" />
                  <input type="tel" placeholder="Tel\\u00E9fono" />
                  <Button variant="primary" fullWidth>Enviar Solicitud</Button>
               </form>
            </div>
         </div>
      </section>
    </div>
  );
};
export default BusinessPage;`;

const businessCss = `.business-hero {
  background: linear-gradient(rgba(0,32,91,0.9), rgba(0,32,91,0.8)), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80');
  background-size: cover;
  background-position: center;
  color: white;
  padding: 8rem 1rem 6rem;
  text-align: center;
}
.business-hero h1 { font-size: 3.5rem; margin-bottom: 1.5rem; }
.business-hero p { font-size: 1.25rem; max-width: 800px; margin: 0 auto 3rem; opacity: 0.9; }
.badge { background: var(--color-accent); padding: 0.5rem 1rem; border-radius: 5px; display: inline-block; margin-bottom: 2rem; font-weight: bold; font-size: 0.8rem; letter-spacing: 1px; }
.business-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin-top: 3rem; }
.text-primary { color: var(--color-primary); }
.text-accent { color: var(--color-accent); }
.bg-gray { background: #f8fafc; padding: 6rem 0; }
.contact-section { display: grid; grid-template-columns: 1fr; gap: 4rem; align-items: center; }
.contact-form-card { background: white; padding: 2rem; border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); }
.contact-form-card h3 { margin-bottom: 1.5rem; color: var(--color-primary); }
.contact-form-card input { width: 100%; padding: 1rem; margin-bottom: 1rem; border: 1px solid #e2e8f0; border-radius: 8px; }
.contact-features { list-style: none; padding: 0; margin-top: 2rem; }
.contact-features li { display: flex; items-center: center; gap: 0.75rem; margin-bottom: 1rem; font-size: 1.1rem; }
@media(min-width: 768px) { .contact-section { grid-template-columns: 1fr 1fr; } }
`;

// --- Loans Page ---
const loansCtx = `import React, { useState } from 'react';
import { Calculator, Car, Home, User, CheckCircle } from 'lucide-react';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import './LoansPage.css';

const LoansPage = () => {
  const [amount, setAmount] = useState(100000);
  const [months, setMonths] = useState(12);
  
  const calculatePayment = () => {
     const rate = 0.18; // 18% annual dummy rate
     const monthlyRate = rate / 12;
     const x = Math.pow(1 + monthlyRate, months);
     const monthly = (amount * x * monthlyRate) / (x - 1);
     return monthly.toLocaleString('es-DO', { style: 'currency', currency: 'DOP' });
  };

  return (
    <div className="loans-page">
      <section className="loans-hero">
        <div className="container">
           <h1>Haz realidad tus proyectos</h1>
           <p>Tasas fijas competitivas, aprobaci\\u00F3n r\\u00E1pida y plazos flexibles de hasta 70 a\\u00F1os.</p>
        </div>
      </section>

      <section className="container section-padding">
         <div className="calculator-wrapper">
            <div className="calc-content">
               <h2>Calculadora de Pr\\u00E9stamos</h2>
               <p>Estima tu cuota mensual al instante. *Sujeto a aprobaci\\u00F3n de cr\\u00E9dito.</p>
               
               <div className="input-range-group">
                  <label>Monto: RD\${amount.toLocaleString()}</label>
                  <input type="range" min="10000" max="5000000" step="10000" value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
               </div>
               
               <div className="input-range-group">
                  <label>Plazo: {months} meses ({Math.floor(months/12)} a\\u00F1os)</label>
                  <input type="range" min="6" max="120" step="6" value={months} onChange={(e) => setMonths(Number(e.target.value))} />
               </div>

               <div className="result-box">
                  <span>Cuota Estimada:</span>
                  <div className="amount">{calculatePayment()}</div>
               </div>
            </div>
            <div className="calc-info bg-primary text-white p-8 rounded-xl">
               <h3 className="text-2xl font-bold mb-4">Requisitos B\\u00E1sicos</h3>
               <ul className="space-y-4">
                  <li className="flex gap-2"><CheckCircle /> C\\u00E9dula de Identidad</li>
                  <li className="flex gap-2"><CheckCircle /> Carta de Trabajo</li>
                  <li className="flex gap-2"><CheckCircle /> Estados de Cuenta (3 meses)</li>
               </ul>
               <div className="mt-8">
                  <Button variant="accent" fullWidth>Solicitar Ahora</Button>
               </div>
            </div>
         </div>
      </section>

      <section className="bg-gray section-padding">
         <div className="container">
            <h2 className="text-center mb-12">Cat\\u00E1logo de Cr\\u00E9dito</h2>
            <div className="loans-grid">
               <Card interactive title="Pr\\u00E9stamo Personal" description="Para lo que quieras: viajes, remodelaciones o consolidaci\\u00F3n de deudas.">
                  <User size={64} className="text-accent mb-4 mx-auto" style={{display:'block'}} />
               </Card>
               <Card interactive title="Pr\\u00E9stamo Hipotecario" description="La llave de tu casa propia. Financiamiento de hasta el 90% del valor.">
                  <Home size={64} className="text-primary mb-4 mx-auto" style={{display:'block'}} />
               </Card>
               <Card interactive title="AutoCr\\u00E9dito" description="Estrena el veh\\u00EDculo de tus sue\\u00F1os con tasa preferencial de feria.">
                  <Car size={64} className="text-accent mb-4 mx-auto" style={{display:'block'}} />
               </Card>
            </div>
         </div>
      </section>
    </div>
  );
};
export default LoansPage;`;

const loansCss = `.loans-hero {
  background: linear-gradient(to right, #00205b, #e31c24);
  color: white;
  padding: 6rem 1rem;
  text-align: center;
}
.loans-hero h1 { font-size: 3rem; margin-bottom: 1rem; }
.calculator-wrapper { display: grid; grid-template-columns: 1fr; gap: 2rem; background: white; border-radius: 20px; box-shadow: 0 20px 40px rgba(0,0,0,0.1); padding: 2rem; margin-top: -4rem; position: relative; z-index: 10; }
@media(min-width: 768px) { .calculator-wrapper { grid-template-columns: 2fr 1fr; } }
.input-range-group { margin-bottom: 2rem; }
.input-range-group label { display: block; font-weight: bold; margin-bottom: 0.5rem; font-size: 1.2rem; color: var(--color-primary); }
.input-range-group input { width: 100%; height: 8px; background: #e2e8f0; border-radius: 4px; appearance: none; }
.input-range-group input::-webkit-slider-thumb { appearance: none; width: 24px; height: 24px; background: var(--color-accent); border-radius: 50%; cursor: pointer; }
.result-box { background: #f0fdf4; padding: 1.5rem; border-radius: 12px; border: 1px solid #bbf7d0; text-align: center; }
.result-box .amount { font-size: 2.5rem; font-weight: 800; color: #15803d; }
.calc-info { background: var(--color-primary); color: white; padding: 2rem; border-radius: 12px; }
.loans-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; }
`;

// --- Footer ---
const footerCtx = `import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="container footer-grid">
                <div className="footer-col">
                    <h3>Banreservas</h3>
                    <p>El banco de todos los dominicanos. Impulsando el bienestar social y econ\\u00F3mico de la Rep\\u00FAblica Dominicana.</p>
                    <div className="social-links">
                        <a href="#"><Facebook size={20} /></a>
                        <a href="#"><Twitter size={20} /></a>
                        <a href="#"><Instagram size={20} /></a>
                        <a href="#"><Linkedin size={20} /></a>
                    </div>
                </div>
                <div className="footer-col">
                    <h3>Personas</h3>
                    <ul className="footer-menu">
                        <li><Link to="/">Cuentas de Ahorro</Link></li>
                        <li><Link to="/">Tarjetas de Cr\\u00E9dito</Link></li>
                        <li><Link to="/loans">Pr\\u00E9stamos Personales</Link></li>
                        <li><Link to="/loans">Hipotecas</Link></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h3>Empresas</h3>
                    <ul className="footer-menu">
                        <li><Link to="/business">Cuentas Corrientes</Link></li>
                        <li><Link to="/business">N\\u00F3mina Autom\\u00E1tica</Link></li>
                        <li><Link to="/business">Comercio Internacional</Link></li>
                        <li><Link to="/business">POS y Pagos</Link></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h3>Contacto</h3>
                    <ul className="contact-list">
                        <li><Phone size={16} /> 809-960-2121</li>
                        <li><Mail size={16} /> contacto@banreservas.com</li>
                        <li><MapPin size={16} /> Av. Winston Churchill, Santo Domingo</li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <p>\\u00A9 2025 Banco de Reservas de la Rep\\u00FAblica Dominicana. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};
export default Footer;`;

const footerCss = `.main-footer { background: var(--color-primary-dark); color: white; padding-top: 4rem; margin-top: auto; }
.footer-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 3rem; padding-bottom: 4rem; }
.footer-col h3 { font-size: 1.25rem; margin-bottom: 1.5rem; position: relative; padding-bottom: 0.5rem; }
.footer-col h3::after { content: ''; position: absolute; left: 0; bottom: 0; width: 40px; height: 3px; background: var(--color-accent); }
.footer-col p { opacity: 0.8; line-height: 1.6; }
.footer-menu { list-style: none; padding: 0; }
.footer-menu li { margin-bottom: 0.75rem; }
.footer-menu a { color: rgba(255,255,255,0.7); text-decoration: none; transition: color 0.2s; }
.footer-menu a:hover { color: white; padding-left: 5px; }
.contact-list { list-style: none; padding: 0; }
.contact-list li { display: flex; items-center; gap: 0.75rem; margin-bottom: 1rem; color: rgba(255,255,255,0.8); }
.social-links { display: flex; gap: 1rem; margin-top: 1.5rem; }
.social-links a { width: 36px; height: 36px; background: rgba(255,255,255,0.1); display: flex; items-center; justify-content: center; border-radius: 50%; color: white; transition: background 0.2s; }
.social-links a:hover { background: var(--color-accent); }
.footer-bottom { border-top: 1px solid rgba(255,255,255,0.1); padding: 1.5rem 0; text-align: center; color: rgba(255,255,255,0.5); font-size: 0.9rem; }
`;

// --- Navbar Update (Login Trigger) ---
const navbarCtx = `import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Landmark } from 'lucide-react';
import Button from '../common/Button';
import LoginModal from '../auth/LoginModal';
import './Navbar.css';

const Navbar = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="container navbar-container">
          <Link to="/" className="navbar-brand">
            <Landmark size={28} />
            <span>Banreservas</span>
          </Link>
          
          <div className="navbar-nav">
            <NavLink to="/" className={({isActive}) => \`nav-link \${isActive ? 'active' : ''}\`}>Personas</NavLink>
            <NavLink to="/business" className={({isActive}) => \`nav-link \${isActive ? 'active' : ''}\`}>Empresas</NavLink>
            <NavLink to="/loans" className={({isActive}) => \`nav-link \${isActive ? 'active' : ''}\`}>Pr\\u00E9stamos</NavLink>
          </div>

          <div className="navbar-actions">
             <Button variant="accent" size="sm" onClick={() => setIsLoginOpen(true)}>TuBanco</Button>
          </div>
        </div>
      </nav>
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
};

export default Navbar;`;

// --- App Router Update ---
const appCtx = `import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import LandingPage from './pages/LandingPage';
import BusinessPage from './pages/BusinessPage';
import LoansPage from './pages/LoansPage';

function App() {
  return (
    <Router>
      <div className="app-layout" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/business" element={<BusinessPage />} />
            <Route path="/loans" element={<LoansPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
export default App;`;

// Helpers to write files
if (!fs.existsSync('src/components/auth')) fs.mkdirSync('src/components/auth', { recursive: true });

fs.writeFileSync('src/components/auth/LoginModal.jsx', loginModalCtx, 'utf8');
fs.writeFileSync('src/components/auth/LoginModal.css', loginModalCss, 'utf8');
fs.writeFileSync('src/pages/BusinessPage.jsx', businessCtx, 'utf8');
fs.writeFileSync('src/pages/BusinessPage.css', businessCss, 'utf8');
fs.writeFileSync('src/pages/LoansPage.jsx', loansCtx, 'utf8');
fs.writeFileSync('src/pages/LoansPage.css', loansCss, 'utf8');
fs.writeFileSync('src/components/layout/Footer.jsx', footerCtx, 'utf8');
fs.writeFileSync('src/components/layout/Footer.css', footerCss, 'utf8');
fs.writeFileSync('src/components/layout/Navbar.jsx', navbarCtx, 'utf8');
fs.writeFileSync('src/App.jsx', appCtx, 'utf8');
