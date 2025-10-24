// frontend/src/pages/laboratorios/LabsIndexPage.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './LabsIndexPage.css'; 
// Asumimos que LabsIndexPage.css existe y tiene los estilos de fondo y tarjetas

const LabsIndexPage = () => {
    
    // Lista centralizada de todos los laboratorios con enlaces a recursos libres y rutas internas
    const labs = [
        // --- VÍNCULOS CLAVE DE IA Y ANALÍTICA (ALTA PRIORIDAD) ---
        {
            path: 'https://github.com/spMohanty/PlantVillage-Dataset',
            icon: '🖼️',
            title: 'PlantVillage Dataset (Imágenes IA)',
            description: 'Acceso al conjunto de datos clave para el entrenamiento del modelo de clasificación de enfermedades de cultivos (Recurso Base de IA).',
            status: 'Recurso Base', 
            isExternal: true
        },
        {
            path: '/analytics', 
            icon: '📈',
            title: 'Visualización de Modelos de IA',
            description: 'Monitorización del rendimiento del modelo de clasificación de imágenes (Analítica Avanzada).',
            status: 'Activo',
            isExternal: false
        },
        
        // --- LABORIOS INTERNOS ---
        {
            path: '/laboratorios/cuantico',
            icon: '⚛️',
            title: 'Laboratorio Cuántico (Interno)',
            description: 'Simulador avanzado de ecuaciones, álgebra y binarios. ¡Experimentos con el Dr. Binary!',
            status: 'Activo',
            isExternal: false
        },
        {
            path: '/laboratorios/sensores',
            icon: '📡',
            title: 'Monitoreo IoT y Sensores (Interno)',
            description: 'Vista en tiempo real de datos de campo (T°, Humedad, Suelo). Conexión directa con el BeagleBone.',
            status: 'Activo',
            isExternal: false
        },
        {
            path: '/laboratorios/software',
            icon: '💻',
            title: 'Desarrollo de Software',
            description: 'Entorno de pruebas para APIs, microservicios y despliegues. Acceso a la documentación técnica.',
            status: 'Activo',
            isExternal: false
        },
        {
            path: '/laboratorios/robotica',
            icon: '🤖',
            title: 'Laboratorio de Robótica y Automatización',
            description: 'Simulación de rutas y lógica de control para brazos robóticos y sistemas de precisión.',
            status: 'Activo',
            isExternal: false
        },
        // Los laboratorios que mencionaste que existen en tu carpeta:
        {
            path: '/laboratorios/agricultura',
            icon: '🌱',
            title: 'Laboratorio de Agricultura de Precisión',
            description: 'Análisis de datos climáticos y de suelo para optimizar la siembra y cosecha.',
            status: 'Activo',
            isExternal: false
        },
        {
            path: '/laboratorios/energias',
            icon: '💡',
            title: 'Laboratorio de Energías Sostenibles',
            description: 'Modelado y simulación de fuentes de energía renovable (solar y eólica).',
            status: 'En Desarrollo',
            isExternal: false
        },
        {
            path: '/laboratorios/opensource',
            icon: '🔗',
            title: 'Laboratorio Open Source',
            description: 'Entorno para contribuir y experimentar con tecnologías de código abierto.',
            status: 'En Desarrollo',
            isExternal: false
        },
        
        // --- INTEGRACIÓN REQUERIMIENTOS SENA / DOCUMENTACIÓN (NUEVOS) ---
        {
            path: '/docs/evidencias', // RUTA CORREGIDA: Se dirige a SenaEvidenciasPage.jsx
            icon: '🎓',
            title: 'Evidencias Proyecto ADS (SENA)',
            description: 'Portafolio que compila las evidencias, fichas y logros del proyecto de Análisis y Desarrollo de Software.',
            status: 'Documentación',
            isExternal: false // Es una ruta interna (componente SenaEvidenciasPage.jsx)
        },
        {
            path: '/docs/MASTERDOC.md', 
            icon: '📄',
            title: 'Documentación General (SENA)',
            description: 'Acceso a MASTERDOC.md, Arquitectura 3-BBB y requerimientos técnicos del proyecto.',
            status: 'Documentación',
            isExternal: true // Es un archivo estático
        },
    ];

    const LabCard = ({ lab, index }) => {
        let statusClass;
        // Lógica de status para CSS
        if (lab.status === 'Activo') {
            statusClass = 'status-active';
        } else if (lab.status === 'Documentación') {
            statusClass = 'status-doc'; 
        } else if (lab.status === 'Recurso Base') {
            statusClass = 'status-base'; 
        } else {
            statusClass = 'status-external'; 
        }

        // Definir si se usa <Link> (ruta interna) o <a> (ruta externa)
        const LinkComponent = lab.isExternal ? 'a' : Link;
        
        // Props del enlace (target="_blank" para externos o archivos estáticos)
        const linkProps = lab.isExternal ? 
            { href: lab.path, target: "_blank", rel: "noopener noreferrer" } : 
            { to: lab.path };

        return (
            <LinkComponent key={index} {...linkProps} className="lab-card">
                <div className="lab-icon">{lab.icon}</div>
                <span className={`lab-status ${statusClass}`}>
                    {lab.status}
                </span>
                <h3 className="lab-title-card">{lab.title}</h3>
                <p className="lab-description">{lab.description}</p>
            </LinkComponent>
        );
    };

    return (
        <div className="labs-index-container">
            <h1 className="labs-index-title">🧪 Centro de Laboratorios STEM</h1>
            <p className="labs-index-subtitle">
                Explora entornos de simulación (Interno), accede a recursos abiertos de alto nivel o revisa la documentación oficial del proyecto.
            </p>

            <div className="labs-grid">
                {labs.map((lab, index) => (
                    <LabCard lab={lab} key={index} />
                ))}
            </div>
        </div>
    );
};

export default LabsIndexPage;
