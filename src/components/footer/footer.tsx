import Link from "next/link"
import "devicon"
import { TechSwiper } from "../techSwipper-section/techSwipper-section"

export const Footer = () => {
    return (
        <footer className="w-full mt-24 md:mt-90">
            {/* CONTAINER DAS BORDAS INFINITAS */}
            <div className="flex border-y border-[#2a2a2b]">
                {/* Ajustado para flex-col no mobile e flex-row no desktop */}
                <div className="container mx-auto flex flex-col md:flex-row justify-between">
                    
                    {/* COLUNA ESQUERDA: Borda lateral esquerda mantida, mas ajustamos o padding no mobile */}
                    <div className="flex flex-col gap-12 md:gap-20 w-full max-w-full md:max-w-[733px] p-6 md:p-10 border-l border-[#2a2a2b]">
                        <div className="w-full max-w-full md:max-w-165 flex flex-col gap-5">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-[#38ff38]"></div>
                                <p className="font-mono text-sm md:text-base uppercase text-[#00d1ff]">Disponível para novos projetos!</p>
                            </div>
                            {/* Texto menor no mobile para não quebrar o layout */}
                            <h1 className="font-mono font-bold text-3xl md:text-5xl leading-tight">
                                Uma presença digital bem construída faz total diferença.
                            </h1>
                        </div>

                        <Link
                            href='/'
                            className="flex items-center justify-center w-full max-w-[300px] gap-3 py-3 px-7 bg-[#00D1FF] hover:bg-[#0088a7] transition-colors"
                        >
                            <p className="font-sans text-lg md:text-xl text-white">Começar Projeto</p>
                        </Link>
                    </div>

                    {/* COLUNA DIREITA: No mobile, removemos a borda esquerda para não duplicar, e adicionamos uma borda no topo */}
                    <div className="flex flex-col gap-10 w-full max-w-full md:max-w-[733px] p-6 md:p-10 border-l md:border-x border-t md:border-t-0 border-[#2a2a2b]">
                        {/* Redes Sociais: Wrap no mobile para evitar quebra */}
                        <ul className="flex flex-wrap items-center gap-6 md:gap-16">
                            <li className="flex items-center gap-2.5">
                                <Link href="https://github.com/oecarvalho" target="_blank">
                                    <i className="devicon-github-original text-2xl md:text-3xl lg:text-4xl transition-all duration-300 hover:text-[#00D1FF]"></i>
                                </Link>
                                <p className="text-sm md:text-base">GitHub</p>
                            </li>

                            <li className="flex items-center gap-2.5">
                                <Link href="https://linkedin.com/in/felipepcarvalho" target="_blank">
                                    <i className="devicon-linkedin-plain text-2xl md:text-3xl lg:text-4xl transition-all duration-300 hover:text-[#00D1FF]"></i>
                                </Link>
                                <p className="text-sm md:text-base">Linkedin</p>
                            </li>

                            <li className="flex items-center gap-2.5">
                                <Link href="https://behance.net/oecarvalho" target="_blank">
                                    <i className="devicon-behance-plain text-2xl md:text-3xl lg:text-4xl transition-all duration-300 hover:text-[#00D1FF]"></i>
                                </Link>
                                <p className="text-sm md:text-base">Behance</p>
                            </li>
                        </ul>

                        <div className="flex flex-col gap-2">
                            <p className="font-mono text-lg md:text-xl uppercase text-[#00D1FF]">E-mail</p>
                            <p className="font-mono text-sm md:text-base break-all">felipe.carvalho.dm@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>

            <TechSwiper />

            {/* SEÇÃO INFERIOR */}
            <div className="border-t border-[#2a2a2b] w-full">
                <div className="container mx-auto flex flex-col gap-10 md:gap-25 px-6 md:px-0">
                    <div className="flex flex-col md:flex-row items-center justify-between mt-10 gap-6">
                        <nav className="flex flex-wrap justify-center items-center gap-x-6 gap-y-4 md:gap-x-8">
                            <Link className="text-xs md:text-base relative after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-[#00D1FF] after:transition-all hover:after:w-full" href='/'>
                                Home
                            </Link>
                            <Link className="text-xs md:text-base relative after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-[#00D1FF] after:transition-all hover:after:w-full" href='#projetos'>
                                Projetos
                            </Link>
                            <Link className="text-xs md:text-base relative after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-[#00D1FF] after:transition-all hover:after:w-full" href='/blog'>
                                Blog
                            </Link>
                            <Link className="text-xs md:text-base relative after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-[#00D1FF] after:transition-all hover:after:w-full" href='/books'>
                                Livros
                            </Link>
                            <Link className="text-xs md:text-base relative after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-[#00D1FF] after:transition-all hover:after:w-full" href='#contato'>
                                Contato
                            </Link>
                        </nav>

                        <a href="#" className="font-mono text-sm md:text-base">Voltar para o topo</a>
                    </div>

                    <p className="text-center text-xs md:text-sm pb-5"> © Felipe Carvalho - 2026. Feito com muito 🩵 e café.</p>
                </div>
            </div>
        </footer>
    )
}