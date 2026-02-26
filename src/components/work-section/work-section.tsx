import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { CodeSimpleIcon, CompassToolIcon, PenNibIcon } from "@phosphor-icons/react"

export const WorkSection = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const text1Ref = useRef<HTMLParagraphElement>(null)
  const text2Ref = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !headingRef.current) return

    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      const element = headingRef.current!

      const textNodes: Text[] = []
      const walker = document.createTreeWalker(
        element,
        NodeFilter.SHOW_TEXT,
        null
      )

      while (walker.nextNode()) {
        textNodes.push(walker.currentNode as Text)
      }

      textNodes.forEach((node) => {
        const words = node.nodeValue?.split(/(\s+)/) || []
        const fragment = document.createDocumentFragment()

        words.forEach((word) => {
          if (word.trim() === "") {
            fragment.appendChild(document.createTextNode(word))
          } else {
            const span = document.createElement("span")
            span.textContent = word
            span.style.opacity = "0.15"
            fragment.appendChild(span)
          }
        })

        node.parentNode?.replaceChild(fragment, node)
      })

      const spans = element.querySelectorAll("span")

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => "+=" + sectionRef.current!.offsetHeight,
          scrub: true,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
        }
      })

      tl.to(spans, {
        opacity: 1,
        stagger: 0.05,
        ease: "none"
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    if (!sectionRef.current) return

    gsap.registerPlugin(ScrollTrigger)

    const createTypewriter = (element: HTMLElement) => {
      const originalHTML = element.innerHTML

      element.innerHTML = ""

      const textSpan = document.createElement("span")
      const cursor = document.createElement("span")

      cursor.textContent = "|"
      cursor.style.marginLeft = "4px"
      cursor.style.display = "inline-block"

      element.appendChild(textSpan)
      element.appendChild(cursor)

      ScrollTrigger.create({
        trigger: element,
        start: "top 85%",
        once: true,
        onEnter: () => {
          gsap.to({}, {
            duration: originalHTML.length * 0.02,
            ease: "none",
            onUpdate: function () {
              const progress = this.progress()
              const currentLength = Math.floor(progress * originalHTML.length)
              textSpan.innerHTML = originalHTML.slice(0, currentLength)
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
    }

    if (text1Ref.current) createTypewriter(text1Ref.current)
    if (text2Ref.current) createTypewriter(text2Ref.current)

  }, [])

  return (
    <section
      ref={sectionRef}
      className="w-full relative overflow-x-hidden px-6"
    >
      <div className="mx-auto mt-20 md:mt-28">

        <div className="flex flex-col justify-center w-full max-w-6xl mx-auto">

          <div className="mb-8 md:mb-10 lg:mb-20 font-mono leading-6 text-[#00D1FF] text-center lg:text-left">
            <p>Mais do que código</p>
            <p ref={text2Ref}>entrego experiências que conectam!</p>
          </div>

          <h1
            ref={headingRef}
            className="font-mono 
                       text-2xl sm:text-3xl md:text-5xl lg:text-6xl
                       leading-tight 
                       text-center lg:text-left"
          >
            Meu objetivo é traduzir as necessidades do seu negócio para a era digital com precisão,
            design de impacto e interações fluidas. Se você acredita que o seu projeto merece o
            melhor da tecnologia e do visual, estamos na mesma página. Vamos tirar essa ideia do papel?
          </h1>

        </div>

        <div className="mt-20 md:mt-32 lg:mt-60 w-full mx-auto border-y border-[#2A2A2B]">

          <div className="flex container mx-auto flex-col lg:flex-row items-stretch justify-between">

            <div className="group w-full flex flex-col items-center gap-8 md:gap-10 pt-10 pb-14 border-b lg:border-b-0 lg:border-l border-[#2A2A2B] transition-all duration-300 hover:bg-[#00D1FF]">
              <div className="flex flex-col items-center">
                <CompassToolIcon size={32} weight="fill" className="text-[#00D1FF] transition-colors duration-300 group-hover:text-[#010101]" />
                <p className="font-mono text-[#00D1FF] uppercase font-bold text-xl transition-colors duration-300 group-hover:text-[#010101]">UX</p>
              </div>
              <p className="font-sans w-full max-w-[90%] md:max-w-[80%] lg:max-w-[450px] text-center transition-colors duration-300 group-hover:text-[#010101] text-gray-400">
                Utilizo o design thinking para resolver problemas, aprimorando a experiência do usuário (UX) por meio do processo Double Diamond.
              </p>
            </div>

            <div className="group w-full flex flex-col items-center gap-8 md:gap-10 pt-10 pb-14 border-b lg:border-b-0 lg:border-x border-[#2A2A2B] transition-all duration-300 hover:bg-[#00D1FF]">
              <div className="flex flex-col items-center">
                <PenNibIcon size={32} weight="fill" className="text-[#00D1FF] transition-colors duration-300 group-hover:text-[#010101]" />
                <p className="font-mono text-[#00D1FF] uppercase font-bold text-xl transition-colors duration-300 group-hover:text-[#010101]">Design</p>
              </div>
              <p className="font-sans w-full max-w-[90%] md:max-w-[80%] lg:max-w-[450px] text-center transition-colors duration-300 group-hover:text-[#010101] text-gray-400">
                Utilizando processos de design, realizo a construção de moodboards, wireframes e style guide para desenvolver o protótipo de alta fidelidade.
              </p>
            </div>

            <div className="group w-full flex flex-col items-center gap-8 md:gap-10 pt-10 pb-14 lg:border-r border-[#2A2A2B] transition-all duration-300 hover:bg-[#00D1FF]">
              <div className="flex flex-col items-center">
                <CodeSimpleIcon size={32} weight="bold" className="text-[#00D1FF] transition-colors duration-300 group-hover:text-[#010101]" />
                <p className="font-mono text-[#00D1FF] uppercase font-bold text-xl transition-colors duration-300 group-hover:text-[#010101]">Code</p>
              </div>
              <p className="font-sans w-full max-w-[90%] md:max-w-[80%] lg:max-w-[450px] text-center transition-colors duration-300 group-hover:text-[#010101] text-gray-400">
                Conforme as necessidades específicas de cada projeto idealizado, faço uso das melhores tecnologias do mercado para a implementação da solução.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}