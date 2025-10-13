import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <h1>🌱 SIGC&T-Rural v2.0</h1>
        <p>Sistema Inteligente de Gestión Científica y Tecnológica</p>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            Contador: {count}
          </button>
        </div>
        <p className="info">
          Autor: Bernardo Adolfo Gómez Montoya<br/>
          SENA - Ficha 3070388
        </p>
      </header>
    </div>
  )
}

export default App
