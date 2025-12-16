const fs = require('fs');

const landingCtx = `import React from 'react';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import { ShieldCheck, CreditCard, Banknote, ArrowRight, Home, TrendingUp, Smartphone, Globe, Gift, Percent } from 'lucide-react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <>
      <section className="hero-section">
        <div className="container hero-content">
          <div className="hero-badge">NUEVA EXPERIENCIA DIGITAL</div>
          <h1 className="hero-title">M\u00E1s que un banco, somos el motor de tus sue\u00F1os.</h1>
          <p className="hero-subtitle">
            Descubre la evoluci\u00F3n financiera. Gestiona tu dinero con inteligencia, seguridad biom\u00E9trica y acceso global desde tu m\u00F3vil. \u00A1El futuro es hoy!
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Button variant="accent" size="lg">
              Abre tu Cuenta Digital <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="secondary" size="lg" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}>
              Ver Promociones
            </Button>
          </div>
        </div>
      </section>

      {/* Ticker de Promociones */}
      <div className="promo-ticker">
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'center' }}>
           <Gift size={20} />
           <span><strong>\u00A1OFERTA EXCLUSIVA!</strong> Solicita tu Pr\u00E9stamo Personal con tasa fija desde <strong>8.95% anual</strong>. V\u00E1lido hasta fin de mes.</span>
        </div>
      </div>

      <section className="container section-padding">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Soluciones a tu Medida</h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.125rem', maxWidth: '700px', margin: '0 auto' }}>
            Ya sea que est\u00E9s comprando tu primera casa, ahorrando para el retiro o invirtiendo en tu negocio, tenemos el producto perfecto para ti.
          </p>
        </div>
        
        <div className="services-grid">
           {/* Card 1 - Ahorros */}
          <Card interactive title="Cuentas de Ahorro Premium" description="Haz crecer tu patrimonio. Tasa de inter\u00E9s escalonada hasta un 5% anual y cero comisiones de manejo.">
             <div style={{ marginTop: '1.5rem', marginBottom: '1rem', display: 'flex', justifyContent: 'center', color: 'var(--color-primary)' }}>
               <Banknote size={48} strokeWidth={1.5} />
             </div>
             <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(0,0,0,0.05)', color: 'var(--color-primary)', textAlign: 'center' }}>
               <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>\u00A1Abrela en l\u00EDnea!</span>
             </div>
          </Card>

          {/* Card 2 - Tarjetas */}
          <Card interactive title="Tarjetas Sin L\u00EDmites" description="Cashback ilimitado en supermercados, gasolineras y farmacias. \u00A1Sin costo de emisi\u00F3n por el primer a\u00F1o!">
             <div style={{ marginTop: '1.5rem', marginBottom: '1rem', display: 'flex', justifyContent: 'center', color: 'var(--color-accent)' }}>
               <CreditCard size={48} strokeWidth={1.5} />
             </div>
             <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(0,0,0,0.05)', color: 'var(--color-primary)', textAlign: 'center' }}>
               <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>Solic\u00EDtala ya</span>
             </div>
          </Card>

          {/* Card 3 - Pr\u00E9stamos */}
           <Card interactive title="Pr\u00E9stamos Flexibles" description="Aprobaci\u00F3n inmediata. Hasta 60 meses para pagar y la tasa m\u00E1s competitiva del mercado.">
             <div style={{ marginTop: '1.5rem', marginBottom: '1rem', display: 'flex', justifyContent: 'center', color: 'var(--color-primary)' }}>
               <ShieldCheck size={48} strokeWidth={1.5} />
             </div>
             <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(0,0,0,0.05)', color: 'var(--color-primary)', textAlign: 'center' }}>
               <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>Calcula tu cuota</span>
             </div>
          </Card>

          {/* Card 4 - Hipotecario */}
          <Card interactive title="Tu Hogar Propio" description="Financiamiento de hasta el 90% del valor de la propiedad. Asesor\u00EDa personalizada en cada paso.">
             <div style={{ marginTop: '1.5rem', marginBottom: '1rem', display: 'flex', justifyContent: 'center', color: 'var(--color-primary)' }}>
               <Home size={48} strokeWidth={1.5} />
             </div>
          </Card>

          {/* Card 5 - Inversiones */}
          <Card interactive title="Inversiones Inteligentes" description="Certificados financieros con alto rendimiento. Pon tu dinero a trabajar con total seguridad.">
             <div style={{ marginTop: '1.5rem', marginBottom: '1rem', display: 'flex', justifyContent: 'center', color: 'var(--color-accent)' }}>
               <TrendingUp size={48} strokeWidth={1.5} />
             </div>
          </Card>

          {/* Card 6 - Remesas */}
          <Card interactive title="Remesas al Instante" description="Recibe dinero de tus familiares directo a tu cuenta o retira en nuestra amplia red de cajeros.">
             <div style={{ marginTop: '1.5rem', marginBottom: '1rem', display: 'flex', justifyContent: 'center', color: 'var(--color-primary)' }}>
               <Globe size={48} strokeWidth={1.5} />
             </div>
          </Card>
        </div>
      </section>

      {/* App Section */}
      <section className="app-section">
        <div className="container app-content">
          <div className="app-text">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>Tu Banco en tu Bolsillo</h2>
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}><Smartphone style={{color: 'var(--color-accent)'}} /> Pago de servicios e impuestos al instante.</li>
              <li style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}><ShieldCheck style={{color: 'var(--color-accent)'}} /> Control total de tus tarjetas (bloqueo/desbloqueo).</li>
              <li style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}><Percent style={{color: 'var(--color-accent)'}} /> Ofertas exclusivas por geolocalizaci\u00F3n.</li>
            </ul>
            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
              <Button variant="primary" size="lg">Descargar para iOS</Button>
              <Button variant="ghost" size="lg" style={{background: 'rgba(255,255,255,0.9)'}}>Descargar para Android</Button>
            </div>
          </div>
          <div className="app-image">
             {/* Placeholder for App Image */}
             <div style={{ width: '300px', height: '500px', background: 'white', borderRadius: '30px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ccc' }}>
                Vista Previa App
             </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;`;

const cssContent = `.hero-section {
  background: linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 100%);
  color: white;
  padding: 8rem 1rem 6rem;
  position: relative;
  overflow: hidden;
}

.hero-section::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: radial-gradient(circle at 80% 20%, rgba(227, 28, 36, 0.2) 0%, transparent 40%),
                    radial-gradient(circle at 10% 90%, rgba(255, 255, 255, 0.05) 0%, transparent 40%);
  z-index: 1;
}

.hero-content {
  max-width: 900px;
  position: relative;
  z-index: 10;
}

.hero-badge {
  display: inline-block;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  margin-bottom: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: var(--color-accent);
}

.hero-title {
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.hero-subtitle {
  font-size: 1.5rem;
  opacity: 0.9;
  margin-bottom: 3rem;
  max-width: 700px;
  line-height: 1.5;
  font-weight: 300;
}

.promo-ticker {
  background: var(--color-accent);
  color: white;
  padding: 0.75rem;
  font-size: 0.95rem;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.app-section {
  background-color: var(--color-bg-body);
  background: linear-gradient(to right, #eef2f6, #ffffff);
  padding: 6rem 1rem;
  overflow: hidden;
}

.app-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  align-items: center;
}

@media (min-width: 768px) {
  .app-content {
    grid-template-columns: 1fr 1fr;
  }
  .hero-title {
    font-size: 3rem;
  }
}

@media (min-width: 1024px) {
   .hero-title {
    font-size: 4.5rem;
  }
}
`;

fs.writeFileSync('src/pages/LandingPage.jsx', landingCtx, 'utf8');
fs.writeFileSync('src/pages/LandingPage.css', cssContent, 'utf8');
