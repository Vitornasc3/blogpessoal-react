import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

function Navbar() {

    const navigate = useNavigate();

    const { usuario, handleLogout } = useContext(AuthContext)

    function logout() {
        handleLogout()
        alert('Usuário desconectado com sucesso')
        navigate('/login')
    }

    let navbarComponent

    if (usuario.token !== '') {
        navbarComponent = (
            <nav className="bg-violet-700 flex justify-center text-white py-3 border-b-2">
                <div className="container flex justify-between gap-4">
                    <Link to='/home' className="font-bold text-2xl">Blog Pessoal</Link>

                    <div className="flex gap-6 font-semibold mt-2">
                        <Link to='/postagens' className="hover:underline cursor-pointer">Postagens</Link>
                        <Link to='/temas' className="hover:underline cursor-pointer">Temas</Link>
                        <Link to='/cadastrartema' className="hover:underline cursor-pointer">Cadastrar Tema</Link>
                        <Link to='/perfil' className="hover:underline cursor-pointer">Perfil</Link>
                        <Link to='' onClick={logout} className="hover:underline cursor-pointer">Sair</Link>
                    </div>
                </div>
            </nav >)
    }

    return (
        <>
            {navbarComponent}
        </>
    )
}

export default Navbar