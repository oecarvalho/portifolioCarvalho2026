import { CompassToolIcon } from "@phosphor-icons/react"

export const WorkSection = () => {
    return (
        <section className="W-full ">
            <div className="container mx-auto mt-28">
                <div className="flex flex-col justify-center w-full max-w-300 mx-auto">
                    <div className=" mb-20 font-mono leading-6 text-[#00D1FF]">
                        <p>Mais do que código</p>
                        <p>entrego experiências que conectam!</p>
                    </div>

                    <div>
                        <h1 className="font-mono text-6xl leading-17.5">
                            Meu objetivo é traduzir as necessidades do seu negócio para a era digital com precisão,
                            design de impacto e interações fluidas. Se você acredita que o seu projeto merece o
                            melhor da tecnologia e do visual, estamos na mesma página. Vamos tirar essa ideia do papel?
                        </h1>
                    </div>
                </div>

                <div className="mt-60">
                    <div className="flex flex-col  items-center gap-10">
                        <div className="text-center">
                            <CompassToolIcon size={32} weight="fill" color="#00D1FF" />
                            <p className="font-mono text-[#00D1FF] font-bold text-xl">UX</p>
                        </div>

                        <p className="font-sans w-full max-w-112.5 text-center">Utilizo o design thinking para resolver problemas, aprimorando a experiência do usuário (UX) por meio do processo Double Diamond.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}