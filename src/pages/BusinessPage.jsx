import React from 'react';
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
           <p>Herramientas financieras robustas dise\u00F1adas para optimizar tu flujo de caja, gestionar n\u00F3minas y expandir tus operaciones globalmente.</p>
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
           <Card interactive title="Gesti\u00F3n de N\u00F3mina Autom\u00E1tica" description="Automatiza el pago a tus colaboradores con nuestra plataforma segura. Dispersi\u00F3n inmediata 24/7.">
              <Users size={48} className="text-primary mb-4" />
           </Card>
           
           <Card interactive title="Financiamiento Comercial" description="L\u00EDneas de cr\u00E9dito revolventes y pr\u00E9stamos a t\u00E9rmino para capital de trabajo y expansi\u00F3n.">
              <PieChart size={48} className="text-accent mb-4" />
           </Card>

           <Card interactive title="Comercio Internacional" description="Cartas de cr\u00E9dito, transferencias SWIFT y compra-venta de divisas con tasas preferenciales.">
              <Globe size={48} className="text-primary mb-4" />
           </Card>

           <Card interactive title="Soluciones de Cobro (POS)" description="Terminales de punto de venta y botones de pago e-commerce. Acepta todas las tarjetas.">
              <Building2 size={48} className="text-accent mb-4" />
           </Card>

           <Card interactive title="Leasing de Equipos" description="Adquiere maquinaria y flotillas con beneficios fiscales. Arrendamiento con opci\u00F3n a compra.">
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
               <p>Nuestros gerentes especializados est\u00E1n listos para visitar tu empresa y dise\u00F1ar un plan a medida.</p>
               <ul className="contact-features">
                 <li><ShieldCheck size={18} /> Asesor\u00EDa financiera experta</li>
                 <li><Briefcase size={18} /> Atenci\u00F3n prioritaria en sucursales</li>
                 <li><Globe size={18} /> Acceso a NetBanking Empresarial</li>
               </ul>
            </div>
            <div className="contact-form-card">
               <h3>Solicita una cita</h3>
               <form>
                  <input type="text" placeholder="Nombre de la Empresa" />
                  <input type="text" placeholder="RNC" />
                  <input type="email" placeholder="Correo Electr\u00F3nico" />
                  <input type="tel" placeholder="Tel\u00E9fono" />
                  <Button variant="primary" fullWidth>Enviar Solicitud</Button>
               </form>
            </div>
         </div>
      </section>
    </div>
  );
};
export default BusinessPage;