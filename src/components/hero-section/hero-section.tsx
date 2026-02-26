import "devicon"
import Link from "next/link"

export const HeroSection = () => {
  return (
    <section className="w-full overflow-x-hidden">

      {/* HERO */}
      <div className="container mx-auto px-6">
        <div className="w-full max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto 
                        mt-16 md:mt-20 lg:mt-24 xl:mt-32 2xl:mt-40 
                        text-center">

          <h1 className="font-mono font-bold
                         text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[84px]
                         leading-tight xl:leading-tight 2xl:leading-[1.1]">
            Interfaces de alto impacto construídas com estratégia, performance e precisão.
          </h1>

          <p className="text-base sm:text-lg md:text-xl
                        mt-6 md:mt-8 lg:mt-10
                        text-gray-400
                        w-full max-w-xl md:max-w-2xl xl:max-w-3xl
                        mx-auto">
            Desenvolvimento de interfaces modernas focadas em usabilidade,
            eficiência e entrega de valor ao produto.
          </p>

        </div>
      </div>

      {/* FOOTER STRIP */}
      <div className="w-full 
                      mt-16 md:mt-20 lg:mt-24 xl:mt-32 2xl:mt-44 
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

    </section>
  )
}