import { Markdown } from "@/components/markdown/markdown";
import { allPosts } from "contentlayer/generated";
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"



const BlogPost = () => {

    const router = useRouter();
    const slug = router.query.slug as string
    const post = allPosts.find((post)=> post.slug.toLowerCase().includes(slug.toLowerCase()));

    console.log(post)
    return (
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
            
            <div className="flex flex-col mt-10 md:mt-16 lg:flex-row 
                            justify-between items-start lg:items-center 
                            mb-10 gap-6">

                <div className="flex items-center gap-2">
                    <Link href='/blog' className="text-[#00D1FF] text-lg md:text-xl tracking-wider ">
                       <p>Blog</p>
                    </Link>
                    <span className="text-gray-600">/</span>
                    <span className="text-gray-400 text-sm md:text-base">{slug}</span>
                </div>

                <p className="w-full lg:max-w-lg 
                              text-left lg:text-right 
                              text-gray-400 text-sm md:text-base leading-relaxed">
                    Desenvolvimento de interfaces web modernas com tecnologias de ponta.
                </p>
            </div>

          
            <div className="relative w-full overflow-hidden rounded-sm">
                <Image
                    src={post?.image ?? ''}
                    width={1456}
                    height={620}
                    alt='imagem mockup do projeto'
                    className="w-full h-[250px] sm:h-[450px] lg:h-[620px] object-cover border border-[#2a2a2b]"
                />
            </div>

            {/* TITLE & SUMMARY SECTION */}
            <div className="flex flex-col gap-4 mt-10 md:mt-14 border-b border-[#2a2a2b] pb-10">
                <div className="flex items-center gap-4">
                    <p className="font-mono text-[#00D1FF] text-sm font-semibold tracking-tight">Insights</p>
                    <div className="w-1.5 h-1.5 rounded-full bg-[#38ff38] animate-pulse"></div>
                    <p className="text-sm text-gray-400">{new Date(post.date).toLocaleDateString('pt-BR')}</p>
                </div>

                <h1 className="font-mono font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase leading-[1.1]">
                    {post?.title}
                </h1>

                <p className="font-sans  text-[#939393] max-w-5xl leading-relaxed">
                    {post?.description}
                </p>
            </div>

            {/* MAIN CONTENT AREA */}
            <div className="w-full max-w-4xl mt-10">
                <div className="prose prose-invert prose-blue max-w-none">
                    <Markdown content={post?.body.raw || ""}/>
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