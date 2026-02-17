import "devicon"
import Link from "next/link"

export const HeroSection = () => {
    return (
        <div className="container mx-auto">
            <div className="w-full max-w-285 mx-auto mt-36 text-center">
                <h1 className="font-mono font-bold text-[84px] leading-23 ">
                    Interfaces de alto impacto construídas com estratégia, performance e precisão.
                </h1>
                <p className="text-2xl mt-10">
                    Desenvolvimento de inferfaces modernas focadas em usabilidade,
                    eficiência e entrega de valor ao produto.
                </p>
            </div>

            <div>
                <div>
                    <p>Felipe Carvalho</p>
                </div>

                <div>
                    
                    <Link href="https://github.com/oecarvalho" target="_blank">
                        <i className="devicon-github-original text-2xl"></i>
                    </Link>

                     <Link href="https://github.com/oecarvalho" target="_blank">
                        <i className="devicon-linkedin-plain text-2xl"></i>
                    </Link>

                     <Link href="https://github.com/oecarvalho" target="_blank">
                        <i className="devicon-behance-plain text-2xl"></i>
                    </Link>
          
                </div>

                <div>
                    <p>Desenvolvedor Front-End</p>
                </div>
            </div>
        </div>
    )
}