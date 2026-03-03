import { ArrowUpRightIcon, BooksIcon } from "@phosphor-icons/react"
import Image from "next/image"
import Link from "next/link"

const Books = () => {
    return (
        <section className="container mx-auto px-4">
            <div className="flex flex-col mt-16 md:mt-24 md:flex-row 
                          justify-between items-start md:items-center 
                          mb-10 md:mb-11 gap-6">

                <div className="flex items-center gap-2">
                    <BooksIcon size={25} weight="fill" className="text-[#00D1FF]" />
                    <span className="text-[#00D1FF] text-lg md:text-xl tracking-wider">
                        Livros
                    </span>
                </div>

                <p className="w-full md:max-w-md lg:max-w-lg 
                              text-left md:text-right 
                              text-gray-400">
                    Minhas recomendações de leitura, que de alguma forma, agregam.
                </p>
            </div>

            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center gap-8">


                <div className="flex flex-col items-center w-full max-w-90 px-5 py-10 border border-[#2a2a2b]">
                    <Image
                        height={200}
                        width={170}
                        alt="o programador pragmatico"
                        src='/book.jpg'
                    />

                    <div className="flex flex-col w-full max-w-80 gap-3.5 mt-10">
                        <h1 className="uppercase text-xl font-bold">O Programador Pragmático</h1>
                        <p className="text-sm text-[#939393]">Esse livro é importante para a construção da mentalidade enquando desesenvolvedor.</p>
                    </div>

                    <Link
                        href="/"
                        className="group flex items-center justify-center mt-4 w-full gap-3 py-3 px-7 bg-[#00D1FF] hover:bg-[#1a1a1a] transition-colors"
                    >
                        <p className="font-sans text-xl text-[#010101] group-hover:text-white">
                            Saiba Mais
                        </p>
                        <ArrowUpRightIcon
                            size={20}
                            weight="bold"
                            className="text-[#010101] group-hover:text-white"
                        />
                    </Link>
                </div>

                <div className="flex flex-col items-center w-full max-w-90 px-5 py-10 border border-[#2a2a2b]">
                    <Image
                        height={200}
                        width={170}
                        alt="o programador pragmatico"
                        src='/book.jpg'
                    />

                    <div className="flex flex-col w-full max-w-80 gap-3.5 mt-10">
                        <h1 className="uppercase text-xl font-bold">O Programador Pragmático</h1>
                        <p className="text-sm text-[#939393]">Esse livro é importante para a construção da mentalidade enquando desesenvolvedor.</p>
                    </div>

                    <Link
                        href="/"
                        className="group flex items-center justify-center mt-4 w-full gap-3 py-3 px-7 bg-[#00D1FF] hover:bg-[#1a1a1a] transition-colors"
                    >
                        <p className="font-sans text-xl text-[#010101] group-hover:text-white">
                            Saiba Mais
                        </p>
                        <ArrowUpRightIcon
                            size={20}
                            weight="bold"
                            className="text-[#010101] group-hover:text-white"
                        />
                    </Link>
                </div>

                <div className="flex flex-col items-center w-full max-w-90 px-5 py-10 border border-[#2a2a2b]">
                    <Image
                        height={200}
                        width={170}
                        alt="o programador pragmatico"
                        src='/book.jpg'
                    />

                    <div className="flex flex-col w-full max-w-80 gap-3.5 mt-10">
                        <h1 className="uppercase text-xl font-bold">O Programador Pragmático</h1>
                        <p className="text-sm text-[#939393]">Esse livro é importante para a construção da mentalidade enquando desesenvolvedor.</p>
                    </div>

                    <Link
                        href="/"
                        className="group flex items-center justify-center mt-4 w-full gap-3 py-3 px-7 bg-[#00D1FF] hover:bg-[#1a1a1a] transition-colors"
                    >
                        <p className="font-sans text-xl text-[#010101] group-hover:text-white">
                            Saiba Mais
                        </p>
                        <ArrowUpRightIcon
                            size={20}
                            weight="bold"
                            className="text-[#010101] group-hover:text-white"
                        />
                    </Link>
                </div>

                <div className="flex flex-col items-center w-full max-w-90 px-5 py-10 border border-[#2a2a2b]">
                    <Image
                        height={200}
                        width={170}
                        alt="o programador pragmatico"
                        src='/book.jpg'
                    />

                    <div className="flex flex-col w-full max-w-80 gap-3.5 mt-10">
                        <h1 className="uppercase text-xl font-bold">O Programador Pragmático</h1>
                        <p className="text-sm text-[#939393]">Esse livro é importante para a construção da mentalidade enquando desesenvolvedor.</p>
                    </div>

                    <Link
                        href="/"
                        className="group flex items-center justify-center mt-4 w-full gap-3 py-3 px-7 bg-[#00D1FF] hover:bg-[#1a1a1a] transition-colors"
                    >
                        <p className="font-sans text-xl text-[#010101] group-hover:text-white">
                            Saiba Mais
                        </p>
                        <ArrowUpRightIcon
                            size={20}
                            weight="bold"
                            className="text-[#010101] group-hover:text-white"
                        />
                    </Link>
                </div>

                <div className="flex flex-col items-center w-full max-w-90 px-5 py-10 border border-[#2a2a2b]">
                    <Image
                        height={200}
                        width={170}
                        alt="o programador pragmatico"
                        src='/book.jpg'
                    />

                    <div className="flex flex-col w-full max-w-80 gap-3.5 mt-10">
                        <h1 className="uppercase text-xl font-bold">O Programador Pragmático</h1>
                        <p className="text-sm text-[#939393]">Esse livro é importante para a construção da mentalidade enquando desesenvolvedor.</p>
                    </div>

                    <Link
                        href="/"
                        className="group flex items-center justify-center mt-4 w-full gap-3 py-3 px-7 bg-[#00D1FF] hover:bg-[#1a1a1a] transition-colors"
                    >
                        <p className="font-sans text-xl text-[#010101] group-hover:text-white">
                            Saiba Mais
                        </p>
                        <ArrowUpRightIcon
                            size={20}
                            weight="bold"
                            className="text-[#010101] group-hover:text-white"
                        />
                    </Link>
                </div>

                <div className="flex flex-col items-center w-full max-w-90 px-5 py-10 border border-[#2a2a2b]">
                    <Image
                        height={200}
                        width={170}
                        alt="o programador pragmatico"
                        src='/book.jpg'
                    />

                    <div className="flex flex-col w-full max-w-80 gap-3.5 mt-10">
                        <h1 className="uppercase text-xl font-bold">O Programador Pragmático</h1>
                        <p className="text-sm text-[#939393]">Esse livro é importante para a construção da mentalidade enquando desesenvolvedor.</p>
                    </div>

                    <Link
                        href="/"
                        className="group flex items-center justify-center mt-4 w-full gap-3 py-3 px-7 bg-[#00D1FF] hover:bg-[#1a1a1a] transition-colors"
                    >
                        <p className="font-sans text-xl text-[#010101] group-hover:text-white">
                            Saiba Mais
                        </p>
                        <ArrowUpRightIcon
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

export default Books