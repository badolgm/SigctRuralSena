// frontend/src/pages/laboratorios/LaboratorioCuantico.jsx
import React from 'react';
// Importamos el CSS solo para asegurar que existe
import './LaboratorioCuantico.css'; 

const LaboratorioCuantico = () => {
    
    // Contenedor que obliga al iframe a ocupar todo el espacio
    return (
        <div style={{ 
            width: '100%', 
            // 100vh - 80px: Compensa la barra de navegación superior y el footer.
            height: 'calc(100vh - 80px)', 
            overflow: 'hidden', 
            padding: '0' 
        }}>
            
            {/* El iframe carga el archivo estático que ya tienes en public/ */}
            <iframe 
                src="/lab_cuantico.html" // Asume que lab_cuantico.html está en la carpeta public/
                title="Laboratorio Cuántico del Dr. Binary"
                
                style={{
                    width: '100%', 
                    height: '100%', 
                    border: 'none', 
                    backgroundColor: 'transparent' 
                }}
                
                allowFullScreen={true}
            />
        </div>
    );
};

export default LaboratorioCuantico;
