import Image from "next/image";
import { projects } from "../../../data/projects";

interface Props {
  params: {
    slug: string;
  };
}

export default function ProjectPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return (
      <main className="p-8">
        <h1 className="text-2xl font-bold">Proyecto no encontrado</h1>
        <p>El proyecto que buscas no existe.</p>
      </main>
    );
  }

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <div className="w-full h-64 relative mb-6 rounded overflow-hidden">
        <Image src={project.img} alt={project.title} fill className="object-cover" />
      </div>
      <p className="mb-4">{project.description}</p>
      <a href={project.external} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-neonGreen text-black rounded-md font-semibold">
        Abrir versión en vivo
      </a>
    </main>
  );
}
