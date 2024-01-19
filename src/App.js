import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Izquierda: Nombre */}
        <div className="left-section">
          <h1>Julio Damian Melendez Xia</h1>
        </div>

        {/* Centro: Enlaces y botones */}
        <div className="center-section">
          <div className="circle">
            {/* Agrega tu página aquí */}
            <p>Tu Página</p>
          </div>

          <div className="buttons">
            {/* Agrega enlaces y botones según sea necesario */}
            <button>
              <a href="https://www.facebook.com/">Facebook</a>
            </button>
            <button>
              <a href="mailto:damianmelendez5678@gmail.com">Email</a>
            </button>
            <button>
              <a href="https://github.com/">GitHub</a>
            </button>
            <button>
              <a href="https://wa.me/1234567890">WhatsApp</a>
            </button>
            <button>
              <a href="https://www.instagram.com/">Instagram</a>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
