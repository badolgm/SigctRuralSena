import React from 'react';
import { Sparkles, BarChart2, Cpu, Activity } from 'lucide-react';

const Analytics = () => {
  // Datos simulados para el dashboard
  const stats = [
    { name: 'Modelos Entrenados', value: '4', icon: Cpu, color: 'text-purple-400' },
    { name: 'Clasificaciones Hoy', value: '1,245', icon: Activity, color: 'text-green-400' },
    { name: 'Precisión Media', value: '94.8%', icon: BarChart2, color: 'text-blue-400' },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 sm:p-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Encabezado */}
        <header className="mb-10 border-b border-green-500/30 pb-4">
          <h1 className="text-4xl font-extrabold text-green-400 flex items-center">
            <Sparkles className="w-8 h-8 mr-3 text-yellow-400" />
            Dashboard de Analítica IA
          </h1>
          <p className="text-gray-400 mt-2">
            Vista general del rendimiento de los modelos de clasificación de enfermedades de cultivos.
          </p>
        </header>

        {/* Tarjetas de Estadísticas */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {stats.map((stat) => (
            <div 
              key={stat.name} 
              className="p-6 bg-gray-800 rounded-xl shadow-lg border border-gray-700/50 hover:border-green-500/50 transition duration-300"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-400">{stat.name}</p>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <p className="mt-4 text-3xl font-bold text-white">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Sección de Visualización Placeholder */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-200 mb-4">Visualización de Datos de Cultivos</h2>
          
          <div className="h-64 flex items-center justify-center bg-gray-800 rounded-xl shadow-inner border border-dashed border-gray-600">
            <p className="text-gray-500 text-lg">
              [Gráficas de rendimiento del modelo de IA aquí (e.g., Accuracy vs. Time)]
            </p>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Analytics;
