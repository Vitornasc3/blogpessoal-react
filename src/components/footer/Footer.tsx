import { FacebookLogo, GithubLogo, LinkedinLogo } from "@phosphor-icons/react"
import { AuthContext } from "../../contexts/AuthContext"
import { ReactNode, useContext } from "react"
import { Link } from "react-router-dom"

function Footer() {

    const { usuario } = useContext(AuthContext)

    let componentFooter: ReactNode

    let data = new Date().getFullYear()

    if (usuario.token !== "") {

        componentFooter = (
            <div className="flex flex-col items-center bg-slate-900 text-white border-t-2 py-1 text-xl">
                <p className="py-1 font-bold">Blog Pessoal Generation | Copyright: {data} </p>
                <p>Acesse nossas redes sociais</p>
                <div className="flex gap-2 py-2">
                    <Link to={`https://www.linkedin.com/in/vitor-do-nascimento-ferreira/`}><LinkedinLogo size={44} weight="bold"></LinkedinLogo></Link>
                    <Link to={`https://github.com/Vitornasc3`}><GithubLogo size={44} weight="bold"></GithubLogo></Link>
                    <Link to={`https://www.facebook.com/vitornasc3`}><FacebookLogo size={44} weight="bold"></FacebookLogo> </Link>
                </div>
            </div>
        )
    }

    return (
        <>

            {componentFooter}

        </>
    )
}

export default Footer