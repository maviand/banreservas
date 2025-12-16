import React, { useState } from 'react';
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
           <p>Tasas fijas competitivas, aprobaci\u00F3n r\u00E1pida y plazos flexibles de hasta 70 a\u00F1os.</p>
        </div>
      </section>

      <section className="container section-padding">
         <div className="calculator-wrapper">
            <div className="calc-content">
               <h2>Calculadora de Pr\u00E9stamos</h2>
               <p>Estima tu cuota mensual al instante. *Sujeto a aprobaci\u00F3n de cr\u00E9dito.</p>
               
               <div className="input-range-group">
                  <label>Monto: RD${amount.toLocaleString()}</label>
                  <input type="range" min="10000" max="5000000" step="10000" value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
               </div>
               
               <div className="input-range-group">
                  <label>Plazo: {months} meses ({Math.floor(months/12)} a\u00F1os)</label>
                  <input type="range" min="6" max="120" step="6" value={months} onChange={(e) => setMonths(Number(e.target.value))} />
               </div>

               <div className="result-box">
                  <span>Cuota Estimada:</span>
                  <div className="amount">{calculatePayment()}</div>
               </div>
            </div>
            <div className="calc-info bg-primary text-white p-8 rounded-xl">
               <h3 className="text-2xl font-bold mb-4">Requisitos B\u00E1sicos</h3>
               <ul className="space-y-4">
                  <li className="flex gap-2"><CheckCircle /> C\u00E9dula de Identidad</li>
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
            <h2 className="text-center mb-12">Cat\u00E1logo de Cr\u00E9dito</h2>
            <div className="loans-grid">
               <Card interactive title="Pr\u00E9stamo Personal" description="Para lo que quieras: viajes, remodelaciones o consolidaci\u00F3n de deudas.">
                  <User size={64} className="text-accent mb-4 mx-auto" style={{display:'block'}} />
               </Card>
               <Card interactive title="Pr\u00E9stamo Hipotecario" description="La llave de tu casa propia. Financiamiento de hasta el 90% del valor.">
                  <Home size={64} className="text-primary mb-4 mx-auto" style={{display:'block'}} />
               </Card>
               <Card interactive title="AutoCr\u00E9dito" description="Estrena el veh\u00EDculo de tus sue\u00F1os con tasa preferencial de feria.">
                  <Car size={64} className="text-accent mb-4 mx-auto" style={{display:'block'}} />
               </Card>
            </div>
         </div>
      </section>
    </div>
  );
};
export default LoansPage;