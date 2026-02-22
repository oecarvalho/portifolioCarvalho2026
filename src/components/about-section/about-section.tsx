import { DownloadSimpleIcon } from "@phosphor-icons/react"
import Image from "next/image"
import Link from "next/link"

export const About = () => {
    return (
        <section className="container mx-auto mt-60">
            <div className="flex items-center justify-between">
                <div>
                    <p className="font-mono text-2xl text-[#00D1FF]">Felipe Carvalho</p>
                    <p className=" text-[#3b3b3b] text-md font-mono mt-2">Café, animes, jogos e muito power metal!</p>
                </div>

                <div>
                    <p className="font-mono text-xl">Desenvolvedor Front-end & UX/UI Designer</p>
                </div>
            </div>

            <div className="mt-21 flex items-end justify-between">
                <div>
                    <Image
                        src='/felipe.svg'
                        width={715}
                        height={750}
                        alt="foto do felipe"
                    />
                </div>

                <div className="w-full max-w-[680px]">
                    <p className="text-xl">
                        Olá, eu sou o Felipe.
                        <br></br>
                        <br></br>
                        <br></br>
                        Bacharel em Tecnologia da Informação e desenvolvedor Front-End, 
                        entusiasta em construir interfaces web modernas, responsivas e performáticas, 
                        sempre com um olhar atento à experiência do usuário (UX).
                        <br></br>
                        <br></br>
                        <br></br>
                        Meu foco é elevar o nível do seu projeto digital, 
                        unindo a precisão da Engenharia de Software ao poder visual que encanta o usuário. 
                        <span className="text-">
                            Se você não se contenta com o básico, vamos criar o extraordinário juntos.
                        </span>
                    </p>

                    <Link href='/'  className="flex items-center justify-center w-full max-w-[225px] mt-12 gap-3 py-3.5 px-7.5 bg-[#00D1FF] hover:bg-[#0088a7]">
                        <p className="font-sans text-xl">Download CV</p>
                        <DownloadSimpleIcon size={20} weight="bold" className="text-white"/>
                    </Link>

                </div>
            </div>
        </section>
    )
}