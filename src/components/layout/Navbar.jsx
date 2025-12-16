import React from 'react';
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
          <NavLink to="/" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>Personas</NavLink>
          <NavLink to="/business" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>Empresas</NavLink>
          <NavLink to="/loans" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>Préstamos</NavLink>
        </div>

        <div className="navbar-actions">
           <Button variant="accent" size="sm">TuBanco</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
