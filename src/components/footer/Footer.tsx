import { FacebookLogo, GithubLogo, LinkedinLogo } from "@phosphor-icons/react"
import { AuthContext } from "../../contexts/AuthContext"
import { ReactNode, useContext } from "react"

function Footer() {

    const { usuario } = useContext(AuthContext)

    let componentFooter: ReactNode

    let data = new Date().getFullYear()

    if (usuario.token !== "") {

        componentFooter = (
            <div className="flex flex-col items-center bg-violet-700 text-white border-t-2 py-1 text-xl">
                <p className="py-1 font-bold">Blog Pessoal Generation | Copyright: {data} </p>
                <p>Acesse nossas redes sociais</p>
                <div className="flex gap-2 py-2">
                    <LinkedinLogo size={48} weight="bold"></LinkedinLogo>
                    <GithubLogo size={48} weight="bold"></GithubLogo>
                    <FacebookLogo size={48} weight="bold"></FacebookLogo>
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