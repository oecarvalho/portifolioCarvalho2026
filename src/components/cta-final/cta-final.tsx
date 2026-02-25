import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export const CtaFinal = () => {
    const textSectionRef = useRef<HTMLDivElement>(null)
    const headingRef = useRef<HTMLHeadingElement>(null)

    useEffect(() => {
        if (!textSectionRef.current || !headingRef.current) return

        gsap.registerPlugin(ScrollTrigger)

        const ctx = gsap.context(() => {
            const element = headingRef.current!

            // SPLIT DE TEXTO
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
                    trigger: headingRef.current,
                    start: "top 85%",   // começa quando está quase chegando no topo
                    end: "top 30%",     // termina antes de sair da tela
                    scrub: true,
                }
            })

            tl.to(spans, {
                opacity: 1,
                stagger: 0.05,
                ease: "none"
            })

        }, textSectionRef)

        return () => ctx.revert()
    }, [])
    return (
        <section className="container mx-auto mt-32 relative overflow-x-hidden md:mt-52 lg:mt-76 pb-20">
            <div ref={textSectionRef} className="flex flex-col justify-center w-full max-w-[90%] lg:max-w-[1200px] mx-auto">
                <div className="mb-10 lg:mb-20 font-mono leading-6 text-[#00D1FF] text-center lg:text-left">
                    <p>Vamos construir algo que faça sentido!</p>
                </div>

                <div>
                    <h1 ref={headingRef} className="font-mono text-2xl md:text-5xl lg:text-6xl lg:leading-[70px] text-center lg:text-left">
                        Nem todo contato precisa começar formal. Às vezes, tudo começa com um bom papo e algumas xícaras de café.
                    </h1>
                </div>
            </div>
        </section>
    )
}