import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav className="bg-violet-700 flex justify-center text-white py-3 border-b-2">
            <div className="container flex justify-between gap-4">
                <Link to='/home' className="font-bold text-2xl">Blog Pessoal</Link>
                
                <div className="flex gap-4 font-semibold">
                    <div className="hover:underline cursor-pointer">Postagens</div>
                    <div className="hover:underline cursor-pointer">Temas</div>
                    <div className="hover:underline cursor-pointer">Cadastrar Tema</div>
                    <div className="hover:underline cursor-pointer">Perfil</div>
                    <div className="hover:underline cursor-pointer">Sair</div>
                </div>
            </div>
        </nav >
    )
}

export default Navbar