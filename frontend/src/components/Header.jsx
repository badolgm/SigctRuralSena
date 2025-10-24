import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    // FIX: Aumentamos padding (py-4) y z-index a 20 para que esté por encima de todo.
    <header className="fixed top-0 left-0 w-full z-20 bg-gray-900 shadow-xl border-b border-green-500/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-6">
          {/* FIX: Título principal más grande (text-2xl) y prominente (font-extrabold) */}
          <Link to="/" className="text-2xl font-extrabold text-green-400 hover:text-green-300 transition duration-150 tracking-wide">
            🌱 SIGC&T-Rural v2.0
          </Link>
          {/* FIX: Añadimos Analytics a la navegación de escritorio */}
          <nav className="hidden md:flex space-x-6 text-base font-medium">
            <Link to="/laboratorios" className="text-gray-300 hover:text-white transition duration-150 hover:border-b-2 border-green-500">Laboratorios STEM</Link>
            <Link to="/cursos" className="text-gray-300 hover:text-white transition duration-150 hover:border-b-2 border-green-500">Cursos</Link>
            <Link to="/analytics" className="text-gray-300 hover:text-white transition duration-150 hover:border-b-2 border-green-500">Analíticas IA</Link>
          </nav>
        </div>
        
        <div>
          <button className="px-5 py-2 bg-yellow-500 text-gray-900 rounded-lg font-bold shadow-lg shadow-yellow-500/50 hover:bg-yellow-400 transition duration-150 text-sm">Acceso</button>
        </div>
      </div>
    </header>
  );
};

export default Header;

