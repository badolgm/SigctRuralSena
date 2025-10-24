import React, { useState } from 'react';
import './PlantDiseaseClassifier.css';

const PlantDiseaseClassifier = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      setPreview(URL.createObjectURL(file));
      setResult(null);
      setError(null);
    }
  };

  const handleClassify = async () => {
    if (!selectedImage) {
      setError('Por favor selecciona una imagen primero');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append('image', selectedImage);

      const response = await fetch('/api/ia/classifications/classify/', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Error al clasificar la imagen');
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="plant-disease-classifier">
      <div className="classifier-card">
        <h3>🤖 Clasificador de Enfermedades IA</h3>
        
        <div className="upload-section">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageSelect}
            id="image-upload"
            className="file-input"
          />
          <label htmlFor="image-upload" className="upload-button">
            📸 Seleccionar Imagen
          </label>
        </div>

        {preview && (
          <div className="preview-section">
            <img src={preview} alt="Preview" className="image-preview" />
            <button 
              onClick={handleClassify} 
              disabled={loading}
              className="classify-button"
            >
              {loading ? '🔄 Analizando...' : '🔍 Clasificar'}
            </button>
          </div>
        )}

        {error && (
          <div className="error-message">
            ❌ {error}
          </div>
        )}

        {result && (
          <div className="result-section">
            <h4>📊 Resultados:</h4>
            <div className="result-card">
              <p className="disease-name">
                <strong>Enfermedad:</strong> {result.prediction_data.disease}
              </p>
              <div className="confidence-bar">
                <div 
                  className="confidence-fill"
                  style={{ width: `${result.confidence * 100}%` }}
                />
              </div>
              <p className="confidence-text">
                Confianza: {(result.confidence * 100).toFixed(2)}%
              </p>
              
              {result.disease && (
                <div className="disease-info">
                  <h5>💊 Recomendaciones:</h5>
                  <p>{result.disease.treatment || 'Consulte con un especialista'}</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlantDiseaseClassifier;
