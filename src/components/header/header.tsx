import Link from "next/link"

export const Header = () => {
    return (
        <header className="container mx-auto px-6 py-8 md:py-10">
            {/* Mobile: Itens empilhados e centralizados para um visual clean.
                Desktop: Itens nas extremidades (justify-between).
            */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
                
                <Link href='/' className="font-bold text-xl tracking-tighter hover:text-[#00D1FF] transition-colors">
                    Carvalho
                </Link>

                {/* Nav: No mobile, usamos 'flex-wrap' e 'justify-center'. 
                    Isso evita o scroll lateral feio e organiza os links em duas linhas se a tela for muito pequena,
                    mantendo os efeitos de hover visíveis e funcionais.
                */}
                <nav className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 md:gap-x-8">
                    <Link className="text-sm md:text-base relative after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-[#00D1FF] after:transition-all hover:after:w-full" href='/'>
                        Home
                    </Link>
                    <Link className="text-sm md:text-base relative after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-[#00D1FF] after:transition-all hover:after:w-full" href='#projetos'>
                        Projetos
                    </Link>
                    <Link className="text-sm md:text-base relative after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-[#00D1FF] after:transition-all hover:after:w-full" href='/blog'>
                        Blog
                    </Link>
                    <Link className="text-sm md:text-base relative after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-[#00D1FF] after:transition-all hover:after:w-full" href='/books'>
                        Livros
                    </Link>
                    <Link className="text-sm md:text-base relative after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-[#00D1FF] after:transition-all hover:after:w-full" href='#contato'>
                        Contato
                    </Link>
                </nav>
            </div>
        </header>
    )
}