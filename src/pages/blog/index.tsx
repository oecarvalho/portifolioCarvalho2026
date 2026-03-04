import Image from "next/image"
import Link from "next/link"
import { PostCard } from "./components/post-card"
import { allPosts } from "contentlayer/generated"

const posts = allPosts;

const Blog = () => {
    return (
        <section className="container mx-auto px-4 md:px-6 lg:px-8">

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


            <div className="relative w-full overflow-hidden">
                <Image
                    src='/project-section.png'
                    width={1456}
                    height={620}
                    alt='imagem mockup do projeto'
                    className="w-full h-[300px] md:h-[500px] lg:h-[620px] object-cover border border-[#2a2a2b]"
                />
            </div>


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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16 mt-16 mb-20">
                {posts.map((post)=>(
                    <PostCard 
                        key={post._id}
                        title={post.title}
                        description={post.description}
                        date={new Date(post.date).toLocaleDateString('pt-BR')}
                        slug={post.slug}
                        image={post.image}
                    />
                ))}
            </div>

        </section >
    )
}

export default Blog