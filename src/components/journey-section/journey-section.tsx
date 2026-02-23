import { CpuIcon } from "@phosphor-icons/react"

export const JourneySection = () => {
    const experiences = [
        { title: "Analista de Produtos", company: "Brisanet Telecomunicações - Ceará", date: "2024 - 2026" },
        { title: "UX/UI Designer", company: "EVOCORP - Rio Grande do Norte", date: "2022 - 2023" },
        { title: "Estagiário Dev. Front-End", company: "Novadata - Rio de Janeiro", date: "2021 - 2022" },
        { title: "Suporte Técnico", company: "Brisanet Telecomunicações - Ceará", date: "2020 - 2021" },
    ];

    return (
        <section className="mt-32 md:mt-60 w-full">
            
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-11 gap-4">
                    <div className="flex items-center gap-2">
                        <CpuIcon size={25} weight="fill" className="text-[#00D1FF]" />
                        <span className="text-[#00D1FF] font-bold text-lg md:text-xl uppercase tracking-wider">
                            Jornada
                        </span>
                    </div>

                    <div>
                        <p className="text-left md:text-right text-white/70 text-sm md:text-base">
                            Experiência Profissional
                        </p>
                    </div>
                </div>
            </div>

            <ul className="mt-6 md:mt-10">
                {experiences.map((item, index) => (
                    <li 
                        key={index}
                        className="group w-full transition-all duration-300 hover:bg-[#00D1FF] cursor-default"
                    >
                        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-center py-8 md:py-10 gap-4 md:gap-0">
                            <div>
                                {/* Texto responsivo: text-xl no mobile, text-3xl no desktop */}
                                <p className="font-sans text-xl md:text-3xl text-white group-hover:text-black transition-colors leading-tight">
                                    {item.title}
                                </p>
                                <span className="font-sans text-xs md:text-sm text-[#939393] group-hover:text-black/70 transition-colors block mt-1">
                                    {item.company}
                                </span>
                            </div>

                            {/* Data responsiva */}
                            <p className="font-mono text-xl md:text-3xl text-[#00D1FF] group-hover:text-black transition-colors">
                                {item.date}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}