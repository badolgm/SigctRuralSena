// frontend/src/pages/Login.jsx
import React from 'react';

const Login = () => {
    return (
        <div style={{ padding: '40px', maxWidth: '400px', margin: '50px auto', background: 'white', borderRadius: '10px', boxShadow: '0 8px 20px rgba(0,0,0,0.2)', textAlign: 'center' }}>
            <h2>🔐 Acceso Requerido</h2>
            <p style={{marginBottom: '20px', color: '#777'}}>La mayoría de los módulos requieren autenticación (RF001).</p>
            
            <form>
                <input type="text" placeholder="Usuario / Email" style={inputStyle} required />
                <input type="password" placeholder="Contraseña" style={inputStyle} required />
                <button type="submit" style={buttonStyle}>Iniciar Sesión</button>
            </form>

            <p style={{marginTop: '20px', fontSize: '0.9rem'}}>¿Olvidaste tu contraseña? | Regístrate (HU-01)</p>
        </div>
    );
};

const inputStyle = {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ccc',
    boxSizing: 'border-box'
};

const buttonStyle = {
    width: '100%',
    padding: '12px',
    marginTop: '20px',
    background: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1rem',
    cursor: 'pointer'
};

export default Login;