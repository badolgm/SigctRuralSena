// frontend/src/pages/SenaEvidenciasPage.jsx

import React from 'react';

// Este componente carga el HTML de tu portafolio/evidencias usando un Iframe.
// Asegúrate de que futuristic_portfolioV5.html esté en la carpeta public/
const SenaEvidenciasPage = () => {
    
    // Contenedor que fuerza al iframe a ocupar todo el espacio
    return (
        <div style={{ 
            width: '100%', 
            // 100vh - 80px: Compensa la barra de navegación superior y el footer
            height: 'calc(100vh - 80px)', 
            overflow: 'hidden', 
            padding: '0' 
        }}>
            
            {/* El iframe carga tu archivo de portafolio que debe estar en public/ */}
            <iframe 
                src="/futuristic_portfolioV5.html" 
                title="Evidencias y Portafolio SENA ADS"
                
                style={{
                    width: '100%', 
                    height: '100%', 
                    border: 'none', 
                    backgroundColor: '#f7f9fc' // Fondo claro por defecto
                }}
                
                allowFullScreen={true}
            />
        </div>
    );
};

export default SenaEvidenciasPage;
