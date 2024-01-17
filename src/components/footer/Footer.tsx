import { FacebookLogo, InstagramLogo } from "@phosphor-icons/react"
import { GithubLogo, LinkedinLogo } from "phosphor-react"

function Footer() {
    return (
        <div>
            <div className="flex flex-col items-center bg-violet-700 text-white py-1 border-t-2">
                <p className="py-2 font-bold">Blog Pessoal Generation | Copyright:</p>
                <p>Acesse nossas redes sociais</p>
                <div className="flex gap-2 py-2">
                    <LinkedinLogo size={48} weight="bold"></LinkedinLogo>
                    <InstagramLogo size={48} weight="bold"></InstagramLogo>
                    <FacebookLogo size={48} weight="bold"></FacebookLogo>
                </div>
            </div>

        </div>
    )
}

export default Footer