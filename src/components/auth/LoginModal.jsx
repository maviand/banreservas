import React, { useState } from 'react';
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
      alert('Login Seguro Procesado via AES-256.\nPayload: ' + encryptedData.substring(0, 20) + '...');
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
          <p>Ingresa tus credenciales con encriptaci\u00F3n de grado militar AES-256.</p>
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
            <label>Contrase\u00F1a</label>
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
            <Lock size={14} /> Conexi\u00F3n Encriptada SSL/TLS + AES-256
          </div>

          <button type="submit" className="login-btn" disabled={isLoading}>
            {isLoading ? 'Procesando...' : 'Acceder de forma segura'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;