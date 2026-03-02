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

            <div className="flex flex-col gap-2.5 mt-14 border-b border-[#2a2a2b] pb-8">
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



            <div className="w-full max-w-360 mt-8">
                <p className=" text-regular">
                    A construção de interfaces com IA exige uma mudança de mentalidade: não se trata apenas de desenhar telas bonitas, mas de projetar sistemas que aprendem, se adaptam e respondem ao contexto do usuário. Diferente de interfaces tradicionais, onde cada ação é previsível, experiências com inteligência artificial incorporam incerteza — e isso precisa ser refletido no design.

                    Uma ideia central é trabalhar com interfaces orientadas por intenção. Em vez de múltiplos botões e fluxos complexos, a interface pode oferecer um campo de comando natural, onde o usuário descreve o que deseja. A IA interpreta, sugere caminhos e apresenta opções refináveis. Isso reduz fricção e amplia possibilidades criativas, especialmente em produtos de produtividade, educação e criação de conteúdo.

                    Outro ponto importante é a transparência algorítmica. Se a IA toma decisões ou sugere conteúdos, a interface deve comunicar por quê. Pequenos indicadores como “gerado com base nas suas interações recentes” ou “sugestão baseada em X” aumentam a confiança do usuário. Interfaces com IA precisam equilibrar automação e controle — permitir edição, ajuste de parâmetros e feedback contínuo.

                    Também vale explorar o conceito de microinterações inteligentes. <br /> <br /> Elementos que se ajustam dinamicamente conforme o comportamento do usuário — como reorganização de menus, destaque de ações frequentes ou sugestões contextuais — tornam a experiência mais fluida. A IA pode agir nos bastidores, mas a percepção do usuário deve ser de clareza e simplicidade.

                    Outra abordagem interessante é o uso de interfaces multimodais. Combinar texto, voz e até gestos pode tornar a interação mais natural. A IA atua como mediadora entre diferentes formas de input, criando experiências inclusivas e adaptáveis a diferentes perfis de usuário.

                    Por fim, ao projetar interfaces com IA, o design precisa considerar ética, privacidade e acessibilidade desde o início. A personalização não pode comprometer dados sensíveis, e a automação não deve excluir usuários que preferem fluxos tradicionais.

                    Construir interfaces com IA é, acima de tudo, projetar para colaboração humano-máquina — onde a tecnologia não substitui o usuário, mas amplia sua capacidade de criar, decidir e aprender.
                </p>

            </div>

            <div className="mt-9">
                <Link
                    href='/'
                    className="group flex items-center justify-center w-full sm:max-w-[180px] gap-3 py-3.5 px-7.5 bg-[#00D1FF] hover:bg-[#1a1a1a] transition-colors"
                >
                    <p className="font-sans text-xl text-[#010101] group-hover:text-white">Leia Mais</p>
                </Link>
            </div>
        </section>
    )
}

export default Blog