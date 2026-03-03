import { PuzzlePieceIcon } from "@phosphor-icons/react"
import Image from "next/image"
import "devicon";
import Link from "next/link";

const Project = () => {
    return (
        <section className="container mx-auto">
            <div className="flex flex-col mt-24 md:flex-row 
                      justify-between items-start md:items-center 
                      mb-10 md:mb-11 gap-6">

                <div className="flex items-center gap-2">
                    <PuzzlePieceIcon size={25} weight="fill" className="text-[#00D1FF]" />
                    <span className="text-[#00D1FF] text-lg md:text-xl tracking-wider">
                        O Desafio
                    </span>
                </div>

                <p className="w-full md:max-w-md lg:max-w-lg 
                      text-left md:text-right 
                      text-gray-400">
                    Desenvolvimento de interfaces web modernas com tecnologias de ponta.
                </p>
            </div>

            <div>
                <Image
                    src='/project-section.png'
                    width={1456}
                    height={819}
                    alt='imagem mockup do projeto'
                    className="w-full h-full border border-[#2a2a2b]"
                />

                <div className="flex flex-col mt-8 gap-14">
                    <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

                        <div className="flex flex-wrap items-center gap-4 md:gap-8">
                            <p className="font-bold text-[#00D1FF] text-xl md:text-2xl">ComoCoworking</p>

                            <p className="text-sm md:text-base">
                                Redesign <span>&</span> Desenvolvimento
                            </p>

                            <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-[#38ff38]"></div>

                            <p className="text-sm md:text-base">2022</p>
                        </div>

                        {/* Ícones centralizados no mobile, alinhados à direita no desktop se necessário */}
                        <div className="flex items-center gap-6">
                            <i className={`devicon-html5-plain text-[#00D1FF] text-xl md:text-2xl`}></i>
                            <i className={`devicon-html5-plain text-[#00D1FF] text-xl md:text-2xl`}></i>
                            <i className={`devicon-html5-plain text-[#00D1FF] text-xl md:text-2xl`}></i>
                        </div>

                        <Link
                            href="/"
                            className="group flex items-center justify-center
                                       w-full lg:max-w-60 
                                       py-3 px-7 
                                       bg-[#00D1FF] hover:bg-[#1a1a1a] transition-colors"
                        >
                            <p className="font-sans text-lg md:text-xl text-[#010101] group-hover:text-white">
                                Acessar Projeto
                            </p>
                        </Link>
                    </div>

                    <div className="w-full max-w-300">
                        <p>
                            Desenvolvimento de interfaces web modernas com tecnologias de ponta. Desenvolvimento de interfaces web modernas com tecnologias de ponta. Desenvolvimento de interfaces web modernas com tecnologias de ponta. Desenvolvimento de interfaces web modernas com tecnologias de ponta. Desenvolvimento de interfaces web modernas com tecnologias de ponta.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Project