
import Image from "next/image";

const projects = [
  { title: "Torneo Halo", img: "/media/Sitiio1.png", link:"https://halo-torneo.netlify.app/" },
  { title: "Desarrollador Libre", img: "/media/sitio3.png", link:"https://freelancerjoh.netlify.app/" },
  { title: "Municipalidad Alajuelita", img: "/media/sitio2.png", link:"https://gestioncultural-alajuelita.netlify.app/"},
  { title: "Proximamente", img: "/media/Proximamente.png  ", link:"" },
];
const links  = [
  
];
export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 md:px-20">
      <h2 className="text-3xl font-bold mb-8 text-center text-neonGreen">
        Mis Trabajos
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <div key={i} className="bg-cardBg p-4 rounded-xl shadow-lg transition duration-1000 hover:transform hover:-translate-y-4 hover:scale-105 ">
            <div className="relative h-40 rounded-lg mb-4 overflow-hidden">
              <Image src={p.img} alt={p.title} fill sizes="(min-width: 768px) 25vw, 100vw" className="object-cover" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <a href={p.link}>
              <button className="mt-6 px-4 py-2 bg-neonGreen text-black rounded-md font-semibold hover:bg-purple-400 transition duration-500">
                Ver Proyecto
              </button>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}