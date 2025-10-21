export type Project = {
  slug: string;
  title: string;
  img: string;
  external: string;
  description: string;
};

export const projects: Project[] = [
  {
    slug: "torneo-halo",
    title: "Torneo Halo",
    img: "/media/Sitiio1.png",
    external: "https://halo-torneo.netlify.app/",
    description: "Torneo online desarrollado con tecnologías modernas.",
  },
  {
    slug: "desarrollador-libre",
    title: "Desarrollador Libre",
    img: "/media/sitio2.png",
    external: "https://desarrollador-libre.netlify.app/",
    description: "Sitio personal y portafolio de desarrollador freelance.",
  },
  {
    slug: "municipalidad-alajuelita",
    title: "Municipalidad Alajuelita",
    img: "/media/sitio3.png",
    external: "https://gestioncultural-alajuelita.netlify.app/",
    description: "Portal de gestión cultural para la municipalidad local.",
  },
];
