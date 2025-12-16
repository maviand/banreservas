import React, { useState } from 'react';
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
            <NavLink to="/" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>Personas</NavLink>
            <NavLink to="/business" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>Empresas</NavLink>
            <NavLink to="/loans" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>Pr\u00E9stamos</NavLink>
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

export default Navbar;