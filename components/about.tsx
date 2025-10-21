import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 md:px-20 bg-cardBg flex flex-col md:flex-row items-center gap-10"
    >
      <div className="w-48 h-48 bg-gray-800 rounded-full overflow-hidden relative">
        <Image 
          src="/media/SobreMi.jpg"
          alt="Imagen sobre Didier"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 192px, 192px"
        />
      </div>
      <div>
        <h2 className="text-3xl font-bold mb-4 text-neonGreen">Sobre Mí</h2>
        <p className="text-black/80 max-w-2xl">
          Soy una desarrollador que ama ver como el codigo se convierte
          en realidad. Me especializo en desarrollo front-end, y soy alguien muy dedicado y apasionado a lo que hago.
        </p>
      </div>
    </section>
  );
}