import React from 'react';
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
            <p>© 2025 Banco de Reservas de la República Dominicana. Todos los derechos reservados.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;