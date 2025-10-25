import React from 'react';
import { NavLink } from 'react-router-dom';

// Usamos Tailwind CSS para el diseño flotante y futurista (No requiere BottomNav.css)
const navItems = [
    { path: '/', icon: 'fas fa-chart-bar', label: 'Dashboard' },
    { path: '/laboratorios', icon: 'fas fa-flask', label: 'Labs' },
    // FIX V3.0: Añadimos rutas de acceso rápido clave (IoT y Software) para balancear la navegación
    { path: '/laboratorios/sensores', icon: 'fas fa-thermometer-half', label: 'Sensores' }, // IoT/DHT22
    { path: '/laboratorios/software', icon: 'fas fa-code', label: 'Software' }, // Telemática/Dev
    // Rutas de analítica y documentación
    { path: '/analytics', icon: 'fas fa-chart-line', label: 'Analytics' },
    { path: '/docs/evidencias', icon: 'fas fa-graduation-cap', label: 'SENA' }, // Nombre corto para móvil
    
    // NOTA: Se eliminó /laboratorios/cuantico (acceso desde /laboratorios)
];

const BottomNavigation = () => {
    return (
        // Estilo flotante con Tailwind CSS
        <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 p-3 bg-gray-800/80 backdrop-blur-md rounded-full shadow-2xl border border-green-500/30">
            <div className="flex space-x-4 sm:space-x-6">
                {navItems.map((item) => (
                    <NavLink 
                        key={item.path} 
                        to={item.path} 
                        // Aplicamos el estilo activo/inactivo con NavLink
                        className={({ isActive }) => 
                            `flex flex-col items-center p-2 rounded-full transition-colors duration-300 text-sm 
                            ${isActive ? 'bg-green-600 text-white shadow-lg shadow-green-500/50' : 'text-gray-300 hover:text-green-400 hover:bg-gray-700/50'}`
                        }
                    >
                        {/* Asegúrese de que FontAwesome esté cargado globalmente */}
                        <i className={`${item.icon} text-lg sm:text-xl`}></i>
                        {/* El label se oculta en móviles, pero se mantiene para tablets/desktop */}
                        <span className="hidden sm:block text-xs mt-1">{item.label}</span>
                    </NavLink>
                ))}
            </div>
        </nav>
    );
};

export default BottomNavigation; // <-- EXPORTACIÓN CLAVE
