import { FacebookLogo, GithubLogo, LinkedinLogo } from "@phosphor-icons/react"

function Footer() {
    return (
        <div>
            <div className="flex flex-col items-center bg-violet-700 text-white border-t-2 py-1 text-xl">
                <p className="py-1 font-bold">Blog Pessoal Generation | Copyright: 2024</p>
                <p>Acesse nossas redes sociais</p>
                <div className="flex gap-2 py-2">
                    <LinkedinLogo size={48} weight="bold"></LinkedinLogo>
                    <GithubLogo size={48} weight="bold"></GithubLogo>
                    <FacebookLogo size={48} weight="bold"></FacebookLogo>
                </div>
            </div>

        </div>
    )
}

export default Footer