export default function DjPage() {
  return (
    <main className="min-h-screen bg-dj-black text-dj-silver">
      {/* Header */}
      <header className="bg-dj-gray p-6 border-b-2 border-dj-red flex justify-center shadow-lg">
        <h1 className="text-3xl font-bold tracking-widest text-white">DJ GILDARDO GONZÁLEZ</h1>
      </header>

      {/* Contenido principal */}
      <section className="p-10 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-dj-red">Siente el ritmo</h2>
        <p className="text-dj-silver/80">
          Aquí pondremos los paquetes de audio, galería de eventos y formulario de contacto.
        </p>
      </section>
    </main>
  );
}
