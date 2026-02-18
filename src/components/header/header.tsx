import Link from "next/link"

export const Header = () => {

    return(
        <header className="container mx-auto pt-7.5 pb-7.5">
            <div className="flex justify-between items-center">
                <Link href='/' className="font-bold">
                    Carvalho
                </Link>

                <nav className="flex items-center gap-7">
                    <Link className="relative after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-[#00D1FF] after:transition-all hover:after:w-full" href='/'>Home</Link>
                    <Link className="relative after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-[#00D1FF] after:transition-all hover:after:w-full" href='#projetos'>Projetos</Link>
                    <Link className="relative after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-[#00D1FF] after:transition-all hover:after:w-full" href='/blog'>Blog</Link>
                    <Link className="relative after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-[#00D1FF] after:transition-all hover:after:w-full" href='/books'>Livros</Link>
                    <Link className="relative after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-[#00D1FF] after:transition-all hover:after:w-full" href='#contato'>Contato</Link>
                </nav>
            </div>
        </header>
    )
}