import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="container footer-grid">
                <div className="footer-col">
                    <h3>Banreservas</h3>
                    <p>El banco de todos los dominicanos. Impulsando el bienestar social y econ\u00F3mico de la Rep\u00FAblica Dominicana.</p>
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
                        <li><Link to="/">Tarjetas de Cr\u00E9dito</Link></li>
                        <li><Link to="/loans">Pr\u00E9stamos Personales</Link></li>
                        <li><Link to="/loans">Hipotecas</Link></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h3>Empresas</h3>
                    <ul className="footer-menu">
                        <li><Link to="/business">Cuentas Corrientes</Link></li>
                        <li><Link to="/business">N\u00F3mina Autom\u00E1tica</Link></li>
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
                    <p>\u00A9 2025 Banco de Reservas de la Rep\u00FAblica Dominicana. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};
export default Footer;