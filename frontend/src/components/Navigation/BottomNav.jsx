// frontend/src/components/Navigation/BottomNav.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './BottomNav.css';

const BottomNav = () => {
  const location = useLocation();
  
  const navItems = [
    { 
      path: '/', 
      icon: '🏠', 
      label: 'Dashboard',
      description: 'Panel principal'
    },
    { 
      path: '/laboratorios', 
      icon: '🧪', 
      label: 'Laboratorios',
      description: 'STEM Labs'
    },
    { 
      path: '/sensores', 
      icon: '📡', 
      label: 'Sensores',
      description: 'IoT Sensors'
    },
    { 
      path: '/analytics', 
      icon: '📊', 
      label: 'Analytics',
      description: 'Data Analysis'
    }
  ];

  return (
    <nav className="bottom-nav">
      {navItems.map(item => (
        <Link
          key={item.path}
          to={item.path}
          className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
          title={item.description}
        >
          <span className="nav-icon">{item.icon}</span>
          <span className="nav-label">{item.label}</span>
        </Link>
      ))}
    </nav>
  );
};

export default BottomNav;