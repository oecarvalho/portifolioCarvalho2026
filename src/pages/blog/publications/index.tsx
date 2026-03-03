import Image from "next/image"
import Link from "next/link"

const BlogPost = () => {
    return (
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
            
            <div className="flex flex-col mt-10 md:mt-16 lg:flex-row 
                            justify-between items-start lg:items-center 
                            mb-10 gap-6">

                <div className="flex items-center gap-2">
                    <span className="text-[#00D1FF] text-lg md:text-xl tracking-wider ">
                        Blog
                    </span>
                    <span className="text-gray-600">/</span>
                    <span className="text-gray-400 text-sm md:text-base">Artigo</span>
                </div>

                <p className="w-full lg:max-w-lg 
                              text-left lg:text-right 
                              text-gray-400 text-sm md:text-base leading-relaxed">
                    Desenvolvimento de interfaces web modernas com tecnologias de ponta.
                </p>
            </div>

          
            <div className="relative w-full overflow-hidden rounded-sm">
                <Image
                    src='/project-section.png'
                    width={1456}
                    height={620}
                    alt='imagem mockup do projeto'
                    className="w-full h-[250px] sm:h-[450px] lg:h-[620px] object-cover border border-[#2a2a2b]"
                />
            </div>

            {/* TITLE & SUMMARY SECTION */}
            <div className="flex flex-col gap-4 mt-10 md:mt-14 border-b border-[#2a2a2b] pb-10">
                <div className="flex items-center gap-4">
                    <p className="font-mono text-[#00D1FF] text-sm font-semibold uppercase tracking-tight">Insights</p>
                    <div className="w-1.5 h-1.5 rounded-full bg-[#38ff38] animate-pulse"></div>
                    <p className="text-sm text-gray-400">5 de Janeiro</p>
                </div>

                <h1 className="font-mono font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase leading-[1.1]">
                    Ideias para a construção de interfaces com IA
                </h1>

                <p className="font-sans  text-[#939393] max-w-5xl leading-relaxed">
                    Otimize o seu tempo e aprenda agora as minhas técnicas de prompting para a construção de
                    interfaces bonitas, intuitivas e cheias de experiências.
                </p>
            </div>

            {/* MAIN CONTENT AREA */}
            <div className="w-full max-w-4xl mt-10">
                <div className="prose prose-invert prose-blue max-w-none">
                    <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-6">
                        A construção de interfaces com IA exige uma mudança de mentalidade: não se trata apenas de desenhar telas bonitas, mas de projetar sistemas que aprendem, se adaptam e respondem ao contexto do usuário. Diferente de interfaces tradicionais, onde cada ação é previsível, experiências com inteligência artificial incorporam incerteza — e isso precisa ser refletido no design.
                    </p>

                    <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-6">
                        Uma ideia central é trabalhar com interfaces orientadas por intenção. Em vez de múltiplos botões e fluxos complexos, a interface pode oferecer um campo de comando natural, onde o usuário descreve o que deseja. A IA interpreta, sugere caminhos e apresenta opções refináveis.
                    </p>

                    {/* Exemplo de destaque/pull-quote para quebrar o texto longo */}
                    <blockquote className="border-l-4 border-[#00D1FF] pl-6 my-10 italic text-xl text-white">
                        "Interfaces com IA precisam equilibrar automação e controle — permitir edição e feedback contínuo."
                    </blockquote>

                    <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-6">
                        Outro ponto importante é a transparência algorítmica. Se a IA toma decisões ou sugere conteúdos, a interface deve comunicar por quê. Pequenos indicadores como “gerado com base nas suas interações recentes” aumentam a confiança do usuário.
                    </p>

                    <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-6">
                        Elementos que se ajustam dinamicamente conforme o comportamento do usuário — como reorganização de menus ou sugestões contextuais — tornam a experiência mais fluida. A IA pode agir nos bastidores, mas a percepção do usuário deve ser de clareza e simplicidade.
                    </p>

                    <p className="text-base md:text-lg text-gray-300 leading-relaxed font-semibold text-white">
                        Construir interfaces com IA é, acima de tudo, projetar para colaboração humano-máquina — onde a tecnologia amplia sua capacidade de criar.
                    </p>
                </div>
            </div>

            {/* BUTTON / FOOTER NAV */}
            <div className="mt-12 md:mt-16 pt-10 border-t border-[#2a2a2b]">
                <Link

                    href='/blog'

                    className="group flex items-center justify-center w-full sm:max-w-[180px] gap-3 py-3.5 px-7.5 bg-[#00D1FF] hover:bg-[#1a1a1a] transition-colors"

                >

                    <p className="font-sans text-xl text-[#010101] group-hover:text-white">Leia Mais</p>

                </Link>
            </div>
        </section>
    )
}

export default BlogPost