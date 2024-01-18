import { Link } from "react-router-dom"

function Login() {
    return (
        <div className="text-white bg-gray-700 grid grid-cols-2 place-items-center h-screen font-semibold">
            <form className="flex flex-col items-center justify-center gap-4 w-1/3" action="">
                <h1 className="text-5xl">Logar</h1>
                <div className="flex flex-col w-full">
                    <label>Usuário</label>
                    <input className="border-2 border-solid p-1 hover:border-gray-400" placeholder="Usuário" type="text" />
                </div>
                <div className="flex flex-col w-full">
                    <label>Senha</label>
                    <input className="border-2 border-solid p-1 hover:border-gray-400" placeholder="Senha" type="text" />
                </div>
                <button className="text-white p-1 bg-gray-600 border-solid border-2 border-white hover:bg-violet-600 w-1/2 rounded text-lg">
                    Entrar
                </button>
                <p className="py-5 border-t-2 border-y-gray-200">Ainda não tem uma conta? <Link to='/cadastro' className="text-violet-500 hover:underline">Cadastre-se</Link></p>
            </form>

        </div>
    )
}

export default Login