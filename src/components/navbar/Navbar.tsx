import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

function Navbar() {

    const navigate = useNavigate();

    const { handleLogout } = useContext(AuthContext)

    function logout() {
        handleLogout()
        alert('Usuário desconectado com sucesso')
        navigate('/login')
    }

    return (
        <nav className="bg-violet-700 flex justify-center text-white py-3 border-b-2">
            <div className="container flex justify-between gap-4">
                <Link to='/home' className="font-bold text-2xl">Blog Pessoal</Link>

                <div className="flex gap-4 font-semibold">
                    <div className="hover:underline cursor-pointer">Postagens</div>
                    <Link to='/temas' className="hover:underline cursor-pointer">Temas</Link>
                    <Link to='/cadastrartema' className="hover:underline cursor-pointer">Cadastrar Tema</Link>
                    <div className="hover:underline cursor-pointer">Perfil</div>
                    <Link to='' onClick={logout} className="hover:underline cursor-pointer">Sair</Link>
                </div>
            </div>
        </nav >
    )
}

export default Navbar