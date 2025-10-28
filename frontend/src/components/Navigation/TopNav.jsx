import React from 'react';
// Cambiamos la importación para usar NavLink
import { NavLink } from 'react-router-dom';
// Importamos Font Awesome para los iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFlask, faFolder, faBook, faChartLine, faSeedling, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import './TopNav.css';

const TopNav = () => {
  // Eliminamos: const location = useLocation();
  // Eliminamos: import { useLocation } from 'react-router-dom';

  // Usaremos Font Awesome en lugar de los emojis, y ya no necesitamos useLocation para la clase 'active'
  const navItems = [
    { path: '/', label: 'Dashboard', icon: faHome },
    { path: '/laboratorios', label: 'Laboratorios STEM', icon: faFlask },
    { path: '/evidencias', label: 'Evidencias ADSO', icon: faFolder },
    { path: '/documentacion', label: 'Documentación', icon: faBook },
    { path: '/analytics', label: 'Analytics IA', icon: faChartLine }
  ];

  return (
    <nav className="top-nav">
      <div className="nav-container">
        <div className="nav-brand">
          {/* Implementamos el icono de Font Awesome para el logo */}
          <span className="brand-icon">
            <FontAwesomeIcon icon={faSeedling} />
          </span>
          <h1 className="brand-title">SIGC&T-Rural v2.0</h1>
          <span className="brand-subtitle">ADSO | SENA 3070388</span>
        </div>
        
        <ul className="nav-menu">
          {navItems.map((item) => (
            <li key={item.path} className="nav-item">
              <NavLink 
                to={item.path}
                className="nav-link"
                // 'active' es la clase que NavLink añade automáticamente
                activeClassName="active" 
              >
                {/* Usamos el componente de icono de Font Awesome */}
                <span className="nav-icon">
                  <FontAwesomeIcon icon={item.icon} />
                </span>
                <span className="nav-label">{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="nav-user">
          {/* Implementamos el icono de usuario de Font Awesome */}
          <span className="user-icon">
            <FontAwesomeIcon icon={faUserCircle} />
          </span>
          <span className="user-name">Bernardo Gómez</span>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;