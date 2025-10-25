import React from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
    { path: '/', icon: 'fas fa-chart-bar', label: 'Dashboard' },
    { path: '/laboratorios', icon: 'fas fa-flask', label: 'Labs' },
    { path: '/laboratorios/sensores', icon: 'fas fa-thermometer-half', label: 'Sensores' },
    { path: '/laboratorios/software', icon: 'fas fa-code', label: 'Software' },
    { path: '/analytics', icon: 'fas fa-chart-line', label: 'Analytics' },
    { path: '/docs/evidencias', icon: 'fas fa-graduation-cap', label: 'SENA' },
];

const BottomNavigation = () => {
    return (
        <nav 
            className="fixed bottom-4 left-1/2 z-50 bg-gray-800/90 backdrop-blur-md rounded-full shadow-2xl border border-green-500/30 px-6 py-4"
            style={{ transform: 'translateX(-50%)' }}
        >
            <div className="flex items-center justify-center" style={{ gap: '2rem' }}>
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            `flex flex-col items-center justify-center rounded-xl transition-all duration-300 ${
                                isActive 
                                    ? 'bg-green-600 text-white shadow-lg shadow-green-500/50' 
                                    : 'bg-gray-700/50 text-gray-300 hover:text-green-400 hover:bg-gray-600/70'
                            }`
                        }
                        style={{
                            padding: '0.75rem 1.25rem',
                            minWidth: '80px',
                            textAlign: 'center'
                        }}
                    >
                        <i className={`${item.icon} mb-2`} style={{ fontSize: '1.25rem' }}></i>
                        <span style={{ 
                            fontSize: '0.75rem', 
                            fontWeight: '600',
                            whiteSpace: 'nowrap'
                        }}>
                            {item.label}
                        </span>
                    </NavLink>
                ))}
            </div>
        </nav>
    );
};

export default BottomNavigation;
