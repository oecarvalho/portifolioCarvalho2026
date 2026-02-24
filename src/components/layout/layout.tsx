import CustomCursor from "../animated-cursor/animated-cursor"
import { Footer } from "../footer/footer"
import { Header } from "../header/header"

type LayoutProps = {
    children: React.ReactNode
}



export const Layout = ({children}: LayoutProps) => {
    return(
        <div>
            <CustomCursor />
            <Header/>
            <main>
                {children}
            </main>
            <Footer/>
        </div>
    )
}