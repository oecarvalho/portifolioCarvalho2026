import { CodeSimpleIcon, CompassToolIcon, PenNibIcon } from "@phosphor-icons/react"

export const WorkSection = () => {
    return (
        <section className="w-full overflow-x-hidden">
            <div className="mx-auto mt-28">
                
                <div className="flex flex-col justify-center w-full max-w-[90%] lg:max-w-300 mx-auto">
                    <div className="mb-10 lg:mb-20 font-mono leading-6 text-[#00D1FF] text-center lg:text-left">
                        <p>Mais do que código</p>
                        <p>entrego experiências que conectam!</p>
                    </div>

                    <div>
                        <h1 className="font-mono text-3xl md:text-5xl lg:text-6xl leading-tight lg:leading-17.5 text-center lg:text-left">
                            Meu objetivo é traduzir as necessidades do seu negócio para a era digital com precisão,
                            design de impacto e interações fluidas. Se você acredita que o seu projeto merece o
                            melhor da tecnologia e do visual, estamos na mesma página. Vamos tirar essa ideia do papel?
                        </h1>
                    </div>
                </div>

                
                <div className="mt-32 lg:mt-60 w-full mx-auto border-y border-[#2A2A2B]">
                    
                    <div className="flex container mx-auto flex-col lg:flex-row items-stretch justify-between">

                        
                        <div className="group w-full flex flex-col  items-center gap-10 pt-10 pb-14 border-b lg:border-b-0 lg:border-l border-[#2A2A2B] transition-all duration-300 hover:bg-[#00D1FF]">
                            <div className="flex flex-col items-center">
                                <CompassToolIcon size={32} weight="fill" className="text-[#00D1FF] transition-colors duration-300 group-hover:text-white" />
                                <p className="font-mono text-[#00D1FF] uppercase font-bold text-xl transition-colors duration-300 group-hover:text-white">UX</p>
                            </div>
                            <p className="font-sans w-full max-w-[80%] lg:max-w-112.5 text-center transition-colors duration-300 group-hover:text-white text-gray-400">
                                Utilizo o design thinking para resolver problemas, aprimorando a experiência do usuário (UX) por meio do processo Double Diamond.
                            </p>
                        </div>

                        
                        <div className="group w-full flex flex-col items-center gap-10 pt-10 pb-14 border-b lg:border-b-0 lg:border-x border-[#2A2A2B] transition-all duration-300 hover:bg-[#00D1FF]">
                            <div className="flex flex-col items-center">
                                <PenNibIcon size={32} weight="fill" className="text-[#00D1FF] transition-colors duration-300 group-hover:text-white" />
                                <p className="font-mono text-[#00D1FF] uppercase font-bold text-xl transition-colors duration-300 group-hover:text-white">Design</p>
                            </div>
                            <p className="font-sans w-full max-w-[80%] lg:max-w-112.5 text-center transition-colors duration-300 group-hover:text-white text-gray-400">
                                Utilizando processos de design, realizo a construção de moodboards, wireframes e style guide para desenvolver o protótipo de alta fidelidade.
                            </p>
                        </div>

                        
                        <div className="group w-full flex flex-col items-center gap-10 pt-10 pb-14 lg:border-r border-[#2A2A2B] transition-all duration-300 hover:bg-[#00D1FF]">
                            <div className="flex flex-col items-center">
                                <CodeSimpleIcon size={32} weight="bold" className="text-[#00D1FF] transition-colors duration-300 group-hover:text-white" />
                                <p className="font-mono text-[#00D1FF] uppercase font-bold text-xl transition-colors duration-300 group-hover:text-white">Code</p>
                            </div>
                            <p className="font-sans w-full max-w-[80%] lg:max-w-112.5 text-center transition-colors duration-300 group-hover:text-white text-gray-400">
                                Conforme as necessidades específicas de cada projeto idealizado, faço uso das melhores tecnologias do mercado para a implementação da solução.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}