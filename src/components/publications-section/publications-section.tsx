import { CpuIcon } from "@phosphor-icons/react"
import Image from "next/image"
import Link from "next/link"


export const PublicationsSection = () => {

    return (
        // mt-60 mantido para desktop, reduzido proporcionalmente no mobile
        <section className="container mx-auto mt-20 md:mt-40 lg:mt-60 px-4">
            
            {/* Header: Mantive as fontes e cores. Ajuste apenas no alinhamento mobile */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-11 gap-4">
                <div className="flex items-center gap-2">
                    <CpuIcon size={25} weight="fill" className="text-[#00D1FF]" />
                    <span className="text-[#00D1FF] text-sm md:text-xl tracking-wider">
                        Publicações
                    </span>
                </div>

                <div>
                    <p className="text-left md:text-right text-white/70 text-sm md:text-base">
                        Um pouco sobre a área tech para você
                    </p>
                </div>
            </div>

            {/* Grid Principal: Empilha no mobile e tablet (flex-col), lado a lado no desktop (xl:flex-row) */}
            <div className="flex flex-col xl:flex-row items-center justify-between gap-10">
                
                {/* Imagem do Projeto: Ajustada para não estourar largura */}
                <div className="border border-[#2a2a2b] w-full max-w-[680px]">
                    <Image
                        src='/project.png'
                        width={680}
                        height={630}
                        alt="imagem do projeto"
                        className="w-full h-auto"
                    />
                </div>

                {/* Conteúdo: max-w-165 (aprox 660px) mantido para desktop */}
                <div className="w-full xl:max-w-[660px] flex flex-col gap-10 md:gap-20">
                    <div className="flex flex-col gap-6">
                        
                        {/* Autor */}
                        <div className="flex items-center gap-2.5">
                            <div className="w-full max-w-20 border border-[#2a2a2b] rounded-full">
                                <Image className="rounded-full"
                                    src='/felipe.svg'
                                    width={80}
                                    height={80}
                                    alt="imagem do projeto"
                                />
                            </div>

                            <div>
                                <p className="font-mono text-xl">Felipe Carvalho</p>
                                <span className="font-mono text-base text-[#424242]">Front-End Developer</span>
                            </div>
                        </div>

                        {/* Texto: Fontes e cores originais */}
                        <div className="flex flex-col gap-2">
                            <h1 className="font-mono font-bold text-3xl md:text-5xl">
                                Ideias para a construção de interfaces com IA
                            </h1>
                            <p className="font-sans text-base text-[#939393]">
                                Otimize o seu tempo e aprenda agora as minhas técnicas de prompting para a construção de
                                interfaces bonitas, intuitivas e cheias de experiências, utilizando IA para a sua construção.
                            </p>
                        </div>
                    </div>

                    {/* Botões: Lado a lado com wrap para telas muito pequenas */}
                    <div className="flex flex-wrap items-center gap-4">
                        <Link
                            href='/'
                            className="flex items-center justify-center w-full sm:max-w-[180px] gap-3 py-3.5 px-7.5 bg-[#00D1FF] hover:bg-[#0088a7] transition-colors"
                        >
                            <p className="font-sans text-xl text-white">Leia Mais</p>
                        </Link>

                        <Link
                            href='/'
                            className="group flex items-center justify-center w-full sm:max-w-[180px] gap-3 py-3.5 px-7.5 bg-transparent border border-[#00D1FF] hover:bg-[#00D1FF] transition-colors"
                        >
                            <p className="font-sans text-xl text-[#00D1FF] group-hover:text-white">Outras</p>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}