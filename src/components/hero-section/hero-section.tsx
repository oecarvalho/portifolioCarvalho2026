import "devicon"
import Link from "next/link"

export const HeroSection = () => {
  return (
    <section className="w-full overflow-x-hidden">
      
      <div className="container mx-auto px-6">
        <div className="w-full max-w-285 mx-auto mt-20 lg:mt-36 text-center">
          <h1 className="font-mono font-bold text-[42px] md:text-[64px] lg:text-[84px] leading-[1.1] lg:leading-23">
            Interfaces de alto impacto construídas com estratégia, performance e precisão.
          </h1>
          <p className="text-2xl md:text-xl mt-8 lg:mt-10 text-gray-400 w-full max-w-3xl mx-auto">
            Desenvolvimento de interfaces modernas focadas em usabilidade,
            eficiência e entrega de valor ao produto.
          </p>
        </div>
      </div>


      <div className="w-full mt-24 lg:mt-40 border-y border-[#2A2A2B]">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-stretch">
          
   
          <div className="flex flex-1 items-center pr-0 justify-start md:justify-start py-6 md:py-12 ">
            <p className="font-mono tracking-[0.2em] text-xs lg:text-base whitespace-nowrap">
              Felipe Carvalho
            </p>
          </div>

          
          <div className="flex items-center justify-center gap-10 lg:gap-16 
                          border-y md:border-y-0 md:border-x border-[#2A2A2B] 
                          py-8 md:py-12 px-10 lg:px-20">
            
            <Link href="https://github.com/oecarvalho" target="_blank">
              <i className="devicon-github-original text-3xl lg:text-4xl transition-all duration-300 hover:text-[#00D1FF] hover:scale-110 block"></i>
            </Link>

            <Link href="https://linkedin.com/in/oecarvalho" target="_blank">
              <i className="devicon-linkedin-plain text-3xl lg:text-4xl transition-all duration-300 hover:text-[#00D1FF] hover:scale-110 block"></i>
            </Link>

            <Link href="https://behance.net/oecarvalho" target="_blank">
              <i className="devicon-behance-plain text-3xl lg:text-4xl transition-all duration-300 hover:text-[#00D1FF] hover:scale-110 block"></i>
            </Link>
          </div>

          
          <div className="flex flex-1 items-center justify-end md:justify-end py-6 md:py-12 text-right">
            <p className="font-mono tracking-[0.2em] text-xs lg:text-base whitespace-nowrap">
              Desenvolvedor Front-End
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}