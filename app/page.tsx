export default function Home() {
  return (
    <main className="font-sans text-gray-800">
      {/* 1. Home / Landing Page */}
      <section className="min-h-screen flex flex-col justify-center items-center bg-green-50 text-center p-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          🌱 Transformamos datos ambientales en decisiones estratégicas regenerativas
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-3xl">
          Evalúa de forma rápida y visual el potencial regenerativo del capital natural de cualquier territorio.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <a href="#contacto" className="bg-green-600 text-white px-6 py-3 rounded-2xl shadow hover:bg-green-700">
            Solicita una demo
          </a>
          <a href="#contacto" className="bg-white border border-green-600 text-green-600 px-6 py-3 rounded-2xl hover:bg-green-50">
            Únete a la prueba piloto
          </a>
        </div>
        <div className="mt-10 w-full max-w-4xl">
          <div className="bg-gray-200 h-64 rounded-xl flex items-center justify-center">
            [Mockup Mapa + Dashboard]
          </div>
        </div>
      </section>

      {/* 2. Cómo Funciona */}
      <section className="py-20 bg-white px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Tres pasos para entender y mejorar tu territorio</h2>
        <div className="grid md:grid-cols-3 gap-10 text-left max-w-6xl mx-auto">
          <div>
            <h3 className="font-semibold text-xl mb-2">Paso 1: Recogida de datos</h3>
            <p>Integración de datos GIS, satélites, mapas oficiales y registros históricos.</p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">Paso 2: Análisis y puntuación</h3>
            <p>Generación de scores por variable y score global de potencial regenerativo.</p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">Paso 3: Informe visual y ejecutable</h3>
            <p>Mapas, gráficos y recomendaciones prácticas listos para stakeholders e inversores.</p>
          </div>
        </div>
        <div className="mt-10">
          <div className="bg-gray-100 h-48 rounded-xl flex items-center justify-center">
            [Infografía / Diagrama de Flujo]
          </div>
        </div>
      </section>

      {/* 3. Beneficios */}
      <section className="py-20 bg-green-50 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Beneficios</h2>
        <ul className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <li><strong>Inversores:</strong> Identifica oportunidades de inversión sostenible y de alto impacto.</li>
          <li><strong>Gobiernos y administraciones:</strong> Facilita planificación estratégica y justificación de políticas verdes.</li>
          <li><strong>Operadores / ONGs:</strong> Priorización de proyectos y comunicación clara de impacto ambiental.</li>
          <li><strong>Gestores de restauración:</strong> Mapas y recomendaciones tangibles para implementar soluciones basadas en la naturaleza.</li>
        </ul>
      </section>

      {/* 4. Casos de Uso */}
      <section className="py-20 bg-white px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Casos de Uso</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="p-6 border rounded-xl">
            <h3 className="font-semibold mb-2">AWS Zaragoza</h3>
            <p>Evaluación de escasez regeneración hidrológica para su nuevo centro de datos.</p>
          </div>
          <div className="p-6 border rounded-xl">
            <h3 className="font-semibold mb-2">Commonland</h3>
            <p>Priorización de áreas para restauración paisajística y conexión ecológica.</p>
          </div>
        </div>
        <div className="mt-10 text-center">
          <em>Mini-testimonios de usuarios piloto destacando la utilidad de los informes.</em>
        </div>
      </section>

      {/* 5. Funcionalidades */}
      <section className="py-20 bg-green-50 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Funcionalidades destacadas</h2>
        <ul className="list-disc text-left max-w-4xl mx-auto space-y-2">
          <li>Puntuaciones por variable y global.</li>
          <li>Mapas interactivos y gráficos descargables.</li>
          <li>Informes exportables en PDF/Excel.</li>
          <li>Personalización según tipo de usuario o proyecto.</li>
        </ul>
      </section>

      {/* 6. CTA Final */}
      <section className="py-20 bg-green-600 text-white text-center px-6">
        <h2 className="text-3xl font-bold mb-6">¿Listo para probar?</h2>
        <div className="flex justify-center gap-6 flex-wrap">
          <a href="#contacto" className="bg-white text-green-700 px-6 py-3 rounded-2xl shadow hover:bg-gray-100">
            Solicita acceso a la prueba piloto
          </a>
          <a href="#contacto" className="bg-green-800 px-6 py-3 rounded-2xl shadow hover:bg-green-900">
            Agenda una demo
          </a>
        </div>
      </section>

      {/* 7. Equipo */}
      <section className="py-20 bg-white px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Sobre Nosotros</h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <div>
            <h3 className="font-semibold">Cristina Lafuente</h3>
            <p>Experta en soluciones basadas en la naturaleza y planificación de paisajes regenerativos y análisis GIS.</p>
          </div>
          <div>
            <h3 className="font-semibold">Juan Rueda</h3>
            <p>Desarrollador y experto en ESG reporting.</p>
          </div>
        </div>
      </section>

      {/* 8. Contacto (Google Forms) */}
      <section id="contacto" className="py-20 bg-green-50 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Contacto</h2>
        <div className="max-w-3xl mx-auto aspect-video bg-white rounded-xl overflow-hidden shadow">
          <iframe
            src="https://docs.google.com/forms/d/e/REEMPLAZA_CON_TU_ID/viewform?embedded=true"
            className="w-full h-full"
          >
            Cargando…
          </iframe>
        </div>
      </section>

      {/* 9. Footer */}
      <footer className="bg-gray-900 text-gray-300 py-10 px-6 text-center">
        <p>© 2025 Herramienta de Evaluación de Capital Natural</p>
        <p className="mt-2">Contacto: info@capitalnatural.com • Redes sociales</p>
      </footer>
    </main>
  );
}
