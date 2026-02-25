import "devicon";
import { CpuIcon } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

// 1. Lista de projetos para facilitar a manutenção
const PROJECTS_DATA = [
  {
    id: 1,
    title: "ComoCoworking",
    category: "Website",
    image: "/project.png",
    techs: ["html5", "css3", "javascript"],
  },
  {
    id: 2,
    title: "Project Alpha",
    category: "Landing Page",
    image: "/project.png",
    techs: ["react", "tailwindcss", "nextjs"],
  },
  {
    id: 3,
    title: "Eco Store",
    category: "E-commerce",
    image: "/project.png",
    techs: ["nodejs", "mongodb", "typescript"],
  },
  // Você pode adicionar mais projetos aqui e o grid se ajustará sozinho
];

export const ProjectsSection = () => {
  return (
    <section className="container mx-auto my-60 px-4">
      {/* Header da Seção */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-11 gap-4">
        <div className="flex items-center gap-2">
          <CpuIcon size={25} weight="fill" className="text-[#00D1FF]" />
          <span className="text-[#00D1FF] text-xl tracking-wider">
            Projetos Desenvolvidos
          </span>
        </div>

        <p className="w-full max-w-106 text-left md:text-right text-gray-400">
          Desenvolvimento de interfaces web modernas com tecnologias de ponta.
        </p>
      </div>

      {/* Grid de Projetos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 justify-items-center">
        {PROJECTS_DATA.map((project) => (
          <Link href="/" key={project.id} className="w-full max-w-116.5">
            <div className="group relative border border-[#2a2a2b] bg-black transition-all duration-300 hover:border-[#00D1FF]/40">
              
              {/* CONTAINER DA IMAGEM COM EFEITO ZOOM */}
              <div className="relative overflow-hidden aspect-[466/460]">
                <Image
                  src={project.image}
                  width={466}
                  height={460}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 group-hover:brightness-110"
                />
              </div>

              {/* Título do Projeto */}
              <div className="text-center border-y border-[#2a2a2b] py-2.5 transition-colors group-hover:border-[#00D1FF]/40">
                <p className="text-[#00D1FF] font-mono font-bold tracking-widest">
                  {project.title}
                </p>
              </div>

              {/* Categoria */}
              <div className="text-center text-sm border-b border-[#2a2a2b] py-2.5 transition-colors group-hover:border-[#00D1FF]/40">
                <span className="text-gray-400">{project.category}</span>
              </div>

              {/* Ícones de Tech */}
              <div className="text-center py-4 flex justify-center gap-6 bg-black">
                {project.techs.map((tech) => (
                  <i 
                    key={tech} 
                    className={`devicon-${tech}-plain text-[#00D1FF] text-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-300`}
                  ></i>
                ))}
              </div>

            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};