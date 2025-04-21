function App() {
  const marchaImages = [
    "/Marcha_Campaña.png",
    "/Marcha_Campaña(1).jpeg"
  ];

  const ceremoniaImages = [
    "/Ceremonia.jpg",
    "/Ceremonia(1).jpg",
    "/Ceremonia(2).jpeg"
  ];

  const actividadImages = [
    "/Actividad.png",
    "/Actividad(1).jpg",
    "/Actividad(2).jpeg"
  ];

  const renderGallery = (images) => (
    <div style={{ display: 'flex', gap: '1rem', overflowX: 'auto', marginTop: '1rem' }}>
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt="Imagen de galería"
          style={{
            height: '200px',
            borderRadius: '8px',
            objectFit: 'cover',
            flexShrink: 0
          }}
        />
      ))}
    </div>
  );

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#1a1a1a', color: 'white', minHeight: '100vh', padding: '2rem' }}>
      <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#dc2626' }}>Batería de Artillería – EMCH</h1>
        <p>Ejército del Perú</p>
      </header>

      <section style={{ marginBottom: '2rem', backgroundColor: '#2d2d2d', padding: '1rem', borderRadius: '10px' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#facc15' }}>Marchas de Campaña</h2>
        <p>La Batería de Artillería entona marchas vibrantes que fortalecen el espíritu de cuerpo y la disciplina durante sus desplazamientos operacionales y ceremoniales.</p>
        {renderGallery(marchaImages)}
      </section>

      <section style={{ marginBottom: '2rem', backgroundColor: '#2d2d2d', padding: '1rem', borderRadius: '10px' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#facc15' }}>Ceremonias</h2>
        <p>Participamos activamente en ceremonias institucionales, demostrando gallardía, respeto y orgullo por nuestro uniforme.</p>
        {renderGallery(ceremoniaImages)}
      </section>

      <section style={{ marginBottom: '2rem', backgroundColor: '#2d2d2d', padding: '1rem', borderRadius: '10px' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#facc15' }}>Actividades</h2>
        <p>Desde entrenamientos con simuladores hasta operaciones cívicas, nuestra batería participa con compromiso, técnica y precisión.</p>
        {renderGallery(actividadImages)}
      </section>

      <footer style={{ textAlign: 'center', color: '#aaa', marginTop: '2rem' }}>
        &copy; 2025 Batería de Artillería – Escuela Militar de Chorrillos
      </footer>
    </div>
  );
}

export default App;
