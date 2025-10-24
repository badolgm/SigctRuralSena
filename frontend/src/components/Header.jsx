import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-10 bg-gray-900 shadow-lg border-b border-green-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-xl font-bold text-green-400 hover:text-green-300 transition duration-150">
            🌱 SIGC&T-Rural v2.0
          </Link>
          <nav className="hidden md:flex space-x-4">
            <Link to="/laboratorios" className="text-gray-300 hover:text-white transition duration-150">Laboratorios STEM</Link>
            <Link to="/cursos" className="text-gray-300 hover:text-white transition duration-150">Cursos</Link>
          </nav>
        </div>
        
        <div>
          <button className="px-4 py-2 bg-yellow-600 text-white rounded-lg font-semibold hover:bg-yellow-700 transition duration-150">Acceso</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
