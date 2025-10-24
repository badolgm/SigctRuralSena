import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './TopNav.css';

const TopNav = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: '🏠 Dashboard', icon: '🏠' },
    { path: '/laboratorios', label: '🧪 Laboratorios STEM', icon: '🧪' },
    { path: '/evidencias', label: '📁 Evidencias ADSO', icon: '📁' },
    { path: '/documentacion', label: '📚 Documentación', icon: '📚' },
    { path: '/analytics', label: '📊 Analytics IA', icon: '📊' }
  ];

  return (
    <nav className="top-nav">
      <div className="nav-container">
        <div className="nav-brand">
          <span className="brand-icon">🌱</span>
          <h1 className="brand-title">SIGC&T-Rural v2.0</h1>
          <span className="brand-subtitle">ADSO | SENA 3070388</span>
        </div>
        
        <ul className="nav-menu">
          {navItems.map((item) => (
            <li key={item.path} className="nav-item">
              <Link 
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav-user">
          <span className="user-icon">👤</span>
          <span className="user-name">Bernardo Gómez</span>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;