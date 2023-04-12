import React from 'react';
import './LandingPage.css'; // Importamos el archivo CSS donde se definirán los estilos

function LandingPage() {
  return (
    <div className="landing-page">
      <header className="header">
        <h1 className="title">Título del header</h1>
        {/* Aquí va el contenido del header */}
      </header>
      <main className="main">
        <h2 className="section-title">Título de la sección principal</h2>
        {/* Aquí va el contenido principal de la landing page */}
      </main>
      <footer className="footer">
        <p className="copy">Copyright © 2023</p>
        {/* Aquí va el contenido del footer */}
      </footer>
    </div>
  );
}

export default LandingPage;
