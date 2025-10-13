#!/usr/bin/env python3
"""
Modelo ARIMA para predicción de series temporales
BBB2 - Motor IA
"""
import numpy as np
from statsmodels.tsa.arima.model import ARIMA
import pickle
import os

class ARIMAPredictor:
    def __init__(self, order=(5,1,0)):
        self.order = order
        self.model = None
        
    def train(self, data):
        """Entrena modelo con datos históricos"""
        self.model = ARIMA(data, order=self.order)
        self.model_fit = self.model.fit()
        return self.model_fit
    
    def predict(self, steps=24):
        """Predice próximas N horas"""
        if self.model_fit is None:
            raise ValueError("Modelo no entrenado")
        forecast = self.model_fit.forecast(steps=steps)
        return forecast
    
    def save_model(self, filepath):
        """Guarda modelo entrenado"""
        with open(filepath, 'wb') as f:
            pickle.dump(self.model_fit, f)
    
    def load_model(self, filepath):
        """Carga modelo guardado"""
        with open(filepath, 'rb') as f:
            self.model_fit = pickle.load(f)

if __name__ == '__main__':
    # Ejemplo de uso
    data = np.random.randn(100)  # Reemplazar con datos reales
    predictor = ARIMAPredictor()
    predictor.train(data)
    forecast = predictor.predict(24)
    print(f"Predicción 24h: {forecast}")
