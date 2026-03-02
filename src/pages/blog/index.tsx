import Image from "next/image"
import Link from "next/link"

const Blog = () => {
    return (
        <section className="container mx-auto">
            <div className="flex flex-col mt-16 md:flex-row 
                      justify-between items-start md:items-center 
                      mb-10 md:mb-11 gap-6">

                <div className="flex items-center gap-2">

                    <span className="text-[#00D1FF] text-lg md:text-xl tracking-wider">
                        Blog
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
                    height={620}
                    alt='imagem mockup do projeto'
                    className="w-full h-[620px] object-cover border border-[#2a2a2b]"
                />
            </div>

            <div className="flex flex-col gap-2.5 mt-14">
                <div className="flex items-center gap-4">
                    <p className="font-mono text-[#00D1FF] text-sm">Insights</p>
                    <div className="w-1.5 h-1.5 rounded-full bg-[#38ff38]"></div>
                    <p className="text-sm">5 de Janeiro</p>
                </div>

                <h1 className="font-mono font-bold text-5xl uppercase">Ideias para a construção de interfaces com IA</h1>

                <p className="font-sans text-regular text-[#939393] max-w-[940px]">Otimize o seu tempo e aprenda agora as minhas técnicas de prompting para a construção de
                    interfaces bonitas, intuitivas e cheias de experiências,
                    utilizando IA para a sua construção.
                </p>

            </div>

            <div className="w-full 
                      md:mt-10 lg:mt-14 xl:mt-22 2xl:mt-34 
                      border-y border-[#2A2A2B]">

                <div className="container mx-auto 
                        flex flex-col md:flex-row 
                        justify-between items-center md:items-stretch">

                    {/* LEFT */}
                    <div className="flex flex-1 items-center 
                          justify-center md:justify-start 
                          py-6 md:py-10 xl:py-12">
                        <p className="font-mono tracking-[0.2em] 
                          text-xs sm:text-sm xl:text-base 
                          text-center md:text-left">
                            Felipe Carvalho
                        </p>
                    </div>

                    {/* SOCIAL */}
                    <div className="flex items-center justify-center 
                          gap-6 sm:gap-8 lg:gap-10 xl:gap-12 2xl:gap-16
                          border-y md:border-y-0 md:border-x border-[#2A2A2B] 
                          py-8 md:py-10 xl:py-12
                          px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-20
                          w-full md:w-auto">

                        <Link href="https://github.com/oecarvalho" target="_blank">
                            <i className="devicon-github-original text-2xl sm:text-3xl xl:text-3xl 2xl:text-4xl transition-all duration-300 hover:text-[#00D1FF] hover:scale-110 block"></i>
                        </Link>

                        <Link href="https://linkedin.com/in/felipepcarvalho" target="_blank">
                            <i className="devicon-linkedin-plain text-2xl sm:text-3xl xl:text-3xl 2xl:text-4xl transition-all duration-300 hover:text-[#00D1FF] hover:scale-110 block"></i>
                        </Link>

                        <Link href="https://behance.net/oecarvalho" target="_blank">
                            <i className="devicon-behance-plain text-2xl sm:text-3xl xl:text-3xl 2xl:text-4xl transition-all duration-300 hover:text-[#00D1FF] hover:scale-110 block"></i>
                        </Link>

                    </div>

                    {/* RIGHT */}
                    <div className="flex flex-1 items-center 
                          justify-center md:justify-end 
                          py-6 md:py-10 xl:py-12">
                        <p className="font-mono tracking-[0.2em] 
                          text-xs sm:text-sm xl:text-base 
                          text-center md:text-right">
                            Desenvolvedor Front-End
                        </p>
                    </div>

                </div>
            </div>


            <div className="grid grid-cols-3 items-center justify-between mt-10 gap-16">
                <div className="flex flex-col w-full max-w-117">
                    <Image
                        src='/blog-post.png'
                        width={1456}
                        height={620}
                        alt='imagem mockup do projeto'
                        className="w-full object-cover border border-[#2a2a2b]"
                    />

                    <div className="flex flex-col mt-3.5">
                        <div className="flex items-center gap-4">
                            <p className="font-mono text-[#00D1FF] text-sm">Insights</p>
                            <div className="w-1.5 h-1.5 rounded-full bg-[#38ff38]"></div>
                            <p className="text-sm">5 de Janeiro</p>
                        </div>

                        <h1 className="uppercase text-2xl">O futuro da IA na programação VR</h1>
                    </div>

                    <p className="text-regular text-[#939393] mt-3.5">
                        Explorando conceitos de programação e inteligencia artificial na construção de aplicações VR.
                    </p>
                </div>

                <div className="flex flex-col w-full max-w-117">
                    <Image
                        src='/blog-post.png'
                        width={1456}
                        height={620}
                        alt='imagem mockup do projeto'
                        className="w-full object-cover border border-[#2a2a2b]"
                    />

                    <div className="flex flex-col mt-3.5">
                        <div className="flex items-center gap-4">
                            <p className="font-mono text-[#00D1FF] text-sm">Insights</p>
                            <div className="w-1.5 h-1.5 rounded-full bg-[#38ff38]"></div>
                            <p className="text-sm">5 de Janeiro</p>
                        </div>

                        <h1 className="uppercase text-2xl">O futuro da IA na programação VR</h1>
                    </div>

                    <p className="text-regular text-[#939393] mt-3.5">
                        Explorando conceitos de programação e inteligencia artificial na construção de aplicações VR.
                    </p>
                </div>

                <div className="flex flex-col w-full max-w-117">
                    <Image
                        src='/blog-post.png'
                        width={1456}
                        height={620}
                        alt='imagem mockup do projeto'
                        className="w-full object-cover border border-[#2a2a2b]"
                    />

                    <div className="flex flex-col mt-3.5">
                        <div className="flex items-center gap-4">
                            <p className="font-mono text-[#00D1FF] text-sm">Insights</p>
                            <div className="w-1.5 h-1.5 rounded-full bg-[#38ff38]"></div>
                            <p className="text-sm">5 de Janeiro</p>
                        </div>

                        <h1 className="uppercase text-2xl">O futuro da IA na programação VR</h1>
                    </div>

                    <p className="text-regular text-[#939393] mt-3.5">
                        Explorando conceitos de programação e inteligencia artificial na construção de aplicações VR.
                    </p>
                </div>

                                <div className="flex flex-col w-full max-w-117">
                    <Image
                        src='/blog-post.png'
                        width={1456}
                        height={620}
                        alt='imagem mockup do projeto'
                        className="w-full object-cover border border-[#2a2a2b]"
                    />

                    <div className="flex flex-col mt-3.5">
                        <div className="flex items-center gap-4">
                            <p className="font-mono text-[#00D1FF] text-sm">Insights</p>
                            <div className="w-1.5 h-1.5 rounded-full bg-[#38ff38]"></div>
                            <p className="text-sm">5 de Janeiro</p>
                        </div>

                        <h1 className="uppercase text-2xl">O futuro da IA na programação VR</h1>
                    </div>

                    <p className="text-regular text-[#939393] mt-3.5">
                        Explorando conceitos de programação e inteligencia artificial na construção de aplicações VR.
                    </p>
                </div>

                <div className="flex flex-col w-full max-w-117">
                    <Image
                        src='/blog-post.png'
                        width={1456}
                        height={620}
                        alt='imagem mockup do projeto'
                        className="w-full object-cover border border-[#2a2a2b]"
                    />

                    <div className="flex flex-col mt-3.5">
                        <div className="flex items-center gap-4">
                            <p className="font-mono text-[#00D1FF] text-sm">Insights</p>
                            <div className="w-1.5 h-1.5 rounded-full bg-[#38ff38]"></div>
                            <p className="text-sm">5 de Janeiro</p>
                        </div>

                        <h1 className="uppercase text-2xl">O futuro da IA na programação VR</h1>
                    </div>

                    <p className="text-regular text-[#939393] mt-3.5">
                        Explorando conceitos de programação e inteligencia artificial na construção de aplicações VR.
                    </p>
                </div>

                <div className="flex flex-col w-full max-w-117">
                    <Image
                        src='/blog-post.png'
                        width={1456}
                        height={620}
                        alt='imagem mockup do projeto'
                        className="w-full object-cover border border-[#2a2a2b]"
                    />

                    <div className="flex flex-col mt-3.5">
                        <div className="flex items-center gap-4">
                            <p className="font-mono text-[#00D1FF] text-sm">Insights</p>
                            <div className="w-1.5 h-1.5 rounded-full bg-[#38ff38]"></div>
                            <p className="text-sm">5 de Janeiro</p>
                        </div>

                        <h1 className="uppercase text-2xl">O futuro da IA na programação VR</h1>
                    </div>

                    <p className="text-regular text-[#939393] mt-3.5">
                        Explorando conceitos de programação e inteligencia artificial na construção de aplicações VR.
                    </p>
                </div>


            </div>
        </section>
    )
}

export default Blog