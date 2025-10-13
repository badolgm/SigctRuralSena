# 🤝 Guía de Contribución

¡Gracias por tu interés en contribuir a SIGC&T-Rural!

## 📋 Proceso de Contribución

### 1. Fork el Repositorio
```bash
# Hacer fork desde GitHub
git clone https://github.com/TU_USUARIO/SIGCT-Rural-ADSO.git
cd SIGCT-Rural-v2
```

### 2. Crear Rama Feature
```bash
git checkout -b feature/mi-nueva-funcionalidad
# o
git checkout -b fix/correccion-bug
```

### 3. Hacer Cambios
- Escribe código limpio y documentado
- Sigue los estándares del proyecto
- Agrega tests si es necesario

### 4. Commit y Push
```bash
git add .
git commit -m "feat: descripción clara del cambio"
git push origin feature/mi-nueva-funcionalidad
```

### 5. Abrir Pull Request
- Describe claramente los cambios
- Referencia issues relacionados
- Espera revisión del mantenedor

## 📝 Estándares de Código

### Python (Backend)
- **Estilo**: PEP 8
- **Type Hints**: Obligatorios
- **Docstrings**: Google style
- **Testing**: pytest con >80% coverage

```python
def calcular_promedio(valores: list[float]) -> float:
    """
    Calcula el promedio de una lista de valores.
    
    Args:
        valores: Lista de números flotantes
        
    Returns:
        Promedio de los valores
        
    Raises:
        ValueError: Si la lista está vacía
    """
    if not valores:
        raise ValueError("Lista vacía")
    return sum(valores) / len(valores)
```

### JavaScript/React (Frontend)
- **Estilo**: ESLint + Prettier
- **Componentes**: Functional components + Hooks
- **Testing**: Jest + React Testing Library

```javascript
/**
 * Componente para mostrar datos de sensor
 * @param {Object} props - Propiedades
 * @param {number} props.temperatura - Temperatura actual
 * @returns {JSX.Element}
 */
const SensorCard = ({ temperatura }) => {
  return (
    <div className="sensor-card">
      <h3>Temperatura</h3>
      <p>{temperatura}°C</p>
    </div>
  );
};
```

## 🧪 Testing

### Ejecutar Tests
```bash
# Backend
cd backend
python -m pytest

# Frontend
cd frontend
npm test
```

### Escribir Tests
- Tests unitarios para lógica de negocio
- Tests de integración para APIs
- Tests E2E para flujos críticos

## 📚 Documentación

- Documenta funciones complejas
- Actualiza README si cambias features
- Agrega ejemplos de uso
- Mantén los comentarios actualizados

## 🐛 Reportar Bugs

Abre un issue con:
1. **Descripción clara** del problema
2. **Pasos para reproducir**
3. **Comportamiento esperado vs actual**
4. **Logs/screenshots**
5. **Entorno** (OS, versiones)

### Template de Issue
```markdown
## Descripción
[Descripción breve del bug]

## Pasos para Reproducir
1. Ir a '...'
2. Hacer clic en '...'
3. Ver error

## Comportamiento Esperado
[Qué debería pasar]

## Comportamiento Actual
[Qué pasa realmente]

## Screenshots
[Si aplica]

## Entorno
- OS: Ubuntu 22.04
- Python: 3.11
- Django: 4.2.7
```

## 💡 Sugerir Features

Abre un issue con:
- **Problema** que resuelve
- **Solución propuesta**
- **Alternativas consideradas**
- **Impacto** en el proyecto

## 📞 Contacto

**Bernardo Adolfo Gómez Montoya**  
📧 bgomezm9@soy.sena.edu.co  
🎓 SENA Regional Magdalena Medio

---

**Código de Conducta**: Sé respetuoso, colaborativo y profesional.
