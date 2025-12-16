import React from 'react';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import { ShieldCheck, CreditCard, Banknote, ArrowRight } from 'lucide-react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <>
      <section className="hero-section">
        <div className="container hero-content">
          <h1 className="hero-title">El banco de todos los dominicanos, ahora más digital.</h1>
          <p className="hero-subtitle">
            Experimenta la nueva banca en línea de Banreservas. Más rápida, más segura y diseñada para impulsar tus sueños.
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
            Productos diseñados para cada etapa de tu vida
          </p>
        </div>
        
        <div className="services-grid">
          <Card interactive title="Cuentas de Ahorro" description="Haz crecer tu dinero con nuestras tasas preferenciales y cero comisiones.">
             <div style={{ marginTop: '1.5rem', color: 'var(--color-primary)', display: 'flex', justifyContent: 'center' }}>
               <Banknote size={64} strokeWidth={1.5} />
             </div>
          </Card>
          <Card interactive title="Tarjetas de Crédito" description="Disfruta de beneficios exclusivos, Puntos Banreservas y cashback.">
             <div style={{ marginTop: '1.5rem', color: 'var(--color-accent)', display: 'flex', justifyContent: 'center' }}>
               <CreditCard size={64} strokeWidth={1.5} />
             </div>
          </Card>
           <Card interactive title="Préstamos Personales" description="Financiamiento rápido y flexible para lograr tus metas de hoy.">
             <div style={{ marginTop: '1.5rem', color: 'var(--color-primary)', display: 'flex', justifyContent: 'center' }}>
               <ShieldCheck size={64} strokeWidth={1.5} />
             </div>
          </Card>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
