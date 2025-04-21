function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#1a1a1a', color: 'white', minHeight: '100vh', padding: '2rem' }}>
      <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#dc2626' }}>Batería de Artillería – EMCH</h1>
        <p>Ejército del Perú</p>
      </header>

      <section style={{ marginBottom: '2rem', backgroundColor: '#2d2d2d', padding: '1rem', borderRadius: '10px' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#facc15' }}>Marchas de Campaña</h2>
        <p>La Batería de Artillería entona marchas vibrantes que fortalecen el espíritu de cuerpo y la disciplina durante sus desplazamientos operacionales y ceremoniales.</p>
        <div style={{ backgroundColor: '#444', height: '200px', marginTop: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#999' }}>
          [Espacio para foto]
        </div>
      </section>

      <section style={{ marginBottom: '2rem', backgroundColor: '#2d2d2d', padding: '1rem', borderRadius: '10px' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#facc15' }}>Ceremonias</h2>
        <p>Participamos activamente en ceremonias institucionales, demostrando gallardía, respeto y orgullo por nuestro uniforme.</p>
        <div style={{ backgroundColor: '#444', height: '200px', marginTop: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#999' }}>
          [Espacio para foto]
        </div>
      </section>

      <section style={{ marginBottom: '2rem', backgroundColor: '#2d2d2d', padding: '1rem', borderRadius: '10px' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#facc15' }}>Actividades</h2>
        <p>Desde entrenamientos con simuladores hasta operaciones cívicas, nuestra batería participa con compromiso, técnica y precisión.</p>
        <div style={{ backgroundColor: '#444', height: '200px', marginTop: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#999' }}>
          [Espacio para foto]
        </div>
      </section>

      <footer style={{ textAlign: 'center', color: '#aaa', marginTop: '2rem' }}>
        &copy; 2025 Batería de Artillería – Escuela Militar de Chorrillos
      </footer>
    </div>
  );
}

export default App;
