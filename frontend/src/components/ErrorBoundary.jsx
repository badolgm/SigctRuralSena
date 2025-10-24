// frontend/src/components/ErrorBoundary.jsx
import React, { Component } from 'react';

// Este componente captura errores de JavaScript en cualquier lugar de sus componentes hijos.
// Muestra una UI alternativa en lugar de dejar que la aplicación se caiga.

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false, 
      error: null, 
      errorInfo: null 
    };
  }

  // Se llama después de que un componente hijo ha lanzado un error.
  static getDerivedStateFromError(error) {
    // Actualiza el estado para que la próxima renderización muestre la UI de fallback.
    return { hasError: true, error: error };
  }

  // También se puede usar para registrar el error en un servicio de reportes.
  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary ha capturado un error:", error, errorInfo);
    this.setState({
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      // Si hay un error, renderiza una UI de fallback con Tailwind CSS.
      return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white p-6">
          <div className="bg-red-900 border-l-4 border-red-500 text-red-100 p-4 shadow-xl rounded-lg max-w-lg w-full">
            <h1 className="text-3xl font-bold mb-3">🚨 ¡Algo salió mal!</h1>
            <p className="mb-4 text-sm">
              Ha ocurrido un error inesperado en un componente. Por favor, intenta recargar la página.
            </p>
            {/* Opcional: Mostrar detalles del error solo en desarrollo */}
            <details className="mt-4 text-xs bg-red-800 p-3 rounded">
              <summary className="cursor-pointer font-semibold">Ver detalles técnicos</summary>
              <pre className="mt-2 whitespace-pre-wrap break-words text-red-300">
                {this.state.error && this.state.error.toString()}
                <br />
                {this.state.errorInfo && this.state.errorInfo.componentStack}
              </pre>
            </details>
          </div>
        </div>
      );
    }

    // Si no hay error, renderiza los componentes hijos normalmente.
    return this.props.children;
  }
}

export default ErrorBoundary;
