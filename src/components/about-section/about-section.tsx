"use client"
import { DownloadSimpleIcon } from "@phosphor-icons/react"
import Image from "next/image"
import Link from "next/link"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect, useRef } from "react"

export const About = () => {
  const textRef = useRef<HTMLHeadingElement>(null)
  const textSectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!textSectionRef.current || !textRef.current) return

    gsap.registerPlugin(ScrollTrigger)

    const element = textRef.current
    const originalText = element.textContent || ""

    element.textContent = ""

    const textSpan = document.createElement("span")
    element.appendChild(textSpan)

    const cursor = document.createElement("span")
    cursor.textContent = "|"
    cursor.style.marginLeft = "4px"
    element.appendChild(cursor)

    ScrollTrigger.create({
      trigger: textSectionRef.current,
      start: "top 80%",
      once: true,
      onEnter: () => {
        gsap.to({}, {
          duration: originalText.length * 0.05,
          ease: "none",
          onUpdate: function () {
            const progress = this.progress()
            const currentLength = Math.floor(progress * originalText.length)
            textSpan.textContent = originalText.slice(0, currentLength)
          }
        })

        gsap.to(cursor, {
          opacity: 0,
          repeat: -1,
          yoyo: true,
          duration: 0.6,
          ease: "power2.inOut"
        })
      }
    })
  }, [])

  return (
    <section
      ref={textSectionRef}
      className="container mx-auto mt-20 md:mt-40 lg:mt-60 px-6"
    >
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-8">

        <div>
          <p
            ref={textRef}
            className="font-mono text-xl md:text-2xl text-[#00D1FF]"
          >
            Felipe Carvalho
          </p>

          <p className="text-[#3b3b3b] text-sm md:text-base font-mono mt-2">
            Café, animes, jogos e muito power metal!
          </p>
        </div>

        <div>
          <p className="font-mono text-lg md:text-xl border-l-4 border-[#00D1FF] pl-4 md:border-none md:pl-0">
            Desenvolvedor Front-end & UX/UI Designer
          </p>
        </div>
      </div>

      {/* CONTEÚDO PRINCIPAL */}
      <div className="mt-12 md:mt-16 lg:mt-24 
                      flex flex-col lg:flex-row 
                      items-center lg:items-end 
                      justify-between 
                      gap-12 lg:gap-16">

        {/* IMAGEM */}
        <div className="w-full max-w-sm md:max-w-md lg:max-w-[715px]">
          <Image
            src="/felipe.svg"
            width={715}
            height={750}
            alt="foto do felipe"
            className="w-full h-auto"
          />
        </div>

        {/* TEXTO */}
        <div className="w-full max-w-xl lg:max-w-[680px]">

          <p className="text-base md:text-lg lg:text-xl leading-relaxed">
            Olá, eu sou o Felipe.
            <br /><br /><br />

            Bacharel em Tecnologia da Informação e desenvolvedor Front-End,
            entusiasta em construir interfaces web modernas, responsivas e performáticas,
            sempre com um olhar atento à experiência do usuário (UX).

            <br /><br /><br />

            Meu foco é elevar o nível do seu projeto digital,
            unindo a precisão da Engenharia de Software ao poder visual que encanta o usuário.
            <span className="text-[#00D1FF]">
              &nbsp;Se você não se contenta com o básico, vamos criar o extraordinário juntos.
            </span>
          </p>

          {/* BOTÃO */}
          <Link
            href="/"
            className="group flex items-center justify-center lg:justify-start
                       w-full max-w-56.5 
                       mt-8 md:mt-12 
                       gap-3 py-3.5 px-7 
                       bg-[#00D1FF] hover:bg-[#1a1a1a] transition-colors"
          >
            <p className="font-sans text-xl text-[#010101] group-hover:text-white">
              Download CV
            </p>
            <DownloadSimpleIcon
              size={20}
              weight="bold"
              className="text-[#010101] group-hover:text-white"
            />
          </Link>

        </div>
      </div>
    </section>
  )
}