import Image from "next/image"
import Link from "next/link"

const Blog = () => {
    return (
        <section className="container mx-auto px-4 md:px-6 lg:px-8">
            {/* HEADER SECTION */}
            <div className="flex flex-col mt-10 md:mt-16 lg:flex-row 
                            justify-between items-start lg:items-center 
                            mb-10 md:mb-11 gap-6">

                <div className="flex items-center gap-2">
                    <span className="text-[#00D1FF] text-xl md:text-2xl tracking-wider ">
                        Blog
                    </span>
                </div>

                <p className="w-full lg:max-w-lg 
                              text-left lg:text-right 
                              text-gray-400 text-sm md:text-base">
                    Desenvolvimento de interfaces web modernas com tecnologias de ponta.
                </p>
            </div>

            {/* FEATURED IMAGE */}
            <div className="relative w-full overflow-hidden">
                <Image
                    src='/project-section.png'
                    width={1456}
                    height={620}
                    alt='imagem mockup do projeto'
                    className="w-full h-[300px] md:h-[500px] lg:h-[620px] object-cover border border-[#2a2a2b]"
                />
            </div>

            {/* FEATURED POST TEXT */}
            <div className="flex flex-col gap-4 mt-8 md:mt-14">
                <div className="flex items-center gap-4">
                    <p className="font-mono text-[#00D1FF] text-sm">Insights</p>
                    <div className="w-1.5 h-1.5 rounded-full bg-[#38ff38]"></div>
                    <p className="text-sm text-gray-300">5 de Janeiro</p>
                </div>

                <h1 className="font-mono font-bold text-3xl md:text-4xl lg:text-5xl uppercase leading-tight">
                    Ideias para a construção de interfaces com IA
                </h1>

                <p className="font-sans text-base md:text-lg text-[#939393] max-w-4xl">
                    Otimize o seu tempo e aprenda agora as minhas técnicas de prompting para a construção de
                    interfaces bonitas, intuitivas e cheias de experiências.
                </p>
            </div>

            {/* AUTHOR BAR */}
            <div className="w-full mt-12 lg:mt-20 border-y border-[#2A2A2B]">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    
                    <div className="flex flex-1 items-center justify-center md:justify-start py-6 lg:py-10">
                        <p className="font-mono tracking-[0.2em] text-xs lg:text-sm uppercase">
                            Felipe Carvalho
                        </p>
                    </div>

                    <div className="flex items-center justify-center 
                                    gap-8 lg:gap-12
                                    border-y md:border-y-0 md:border-x border-[#2A2A2B] 
                                    py-6 md:py-10 px-10 lg:px-20
                                    w-full md:w-auto">
                        <Link href="https://github.com/oecarvalho" target="_blank" className="hover:text-[#00D1FF] transition-transform hover:scale-110">
                            <i className="devicon-github-original text-2xl lg:text-3xl"></i>
                        </Link>
                        <Link href="https://linkedin.com/in/felipepcarvalho" target="_blank" className="hover:text-[#00D1FF] transition-transform hover:scale-110">
                            <i className="devicon-linkedin-plain text-2xl lg:text-3xl"></i>
                        </Link>
                        <Link href="https://behance.net/oecarvalho" target="_blank" className="hover:text-[#00D1FF] transition-transform hover:scale-110">
                            <i className="devicon-behance-plain text-2xl lg:text-3xl"></i>
                        </Link>
                    </div>

                    <div className="flex flex-1 items-center justify-center md:justify-end py-6 lg:py-10">
                        <p className="font-mono tracking-[0.2em] text-xs lg:text-sm uppercase text-gray-400">
                            Desenvolvedor Front-End
                        </p>
                    </div>
                </div>
            </div>

            {/* POSTS GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16 mt-16 mb-20">
                {/* Reutilize este bloco para cada post */}
                {[1, 2, 3, 4, 5, 6].map((post) => (
                    <div key={post} className="flex flex-col group">
                        <div className="overflow-hidden border border-[#2a2a2b]">
                            <Image
                                src='/blog-post.png'
                                width={500}
                                height={300}
                                alt='imagem mockup do projeto'
                                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>

                        <div className="flex flex-col mt-5">
                            <div className="flex items-center gap-3 mb-2">
                                <p className="font-mono text-[#00D1FF] text-xs uppercase">Insights</p>
                                <div className="w-1 h-1 rounded-full bg-[#38ff38]"></div>
                                <p className="text-xs text-gray-500">5 de Janeiro</p>
                            </div>

                            <Link href='/blog/publications'>
                                <h2 className="uppercase text-xl font-bold leading-snug group-hover:text-[#00D1FF] transition-colors">
                                    O futuro da IA na programação VR
                                </h2>
                            </Link>

                            <p className="text-sm text-[#939393] mt-3 line-clamp-3">
                                Explorando conceitos de programação e inteligência artificial na construção de aplicações VR.
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Blog