import { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Tema from "../../../models/Tema";
import { buscar, deletar } from "../../../services/Service";
import { RotatingLines } from "react-loader-spinner";

function DeletarTema() {

    const navigate = useNavigate();

    const [tema, setTema] = useState<Tema>({} as Tema);

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { usuario, handleLogout } = useContext(AuthContext)

    const token = usuario.token;

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            await buscar(`/temas/${id}`, setTema, {
                headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                alert('Tempo de sessão expirou!')
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado')
            navigate('/login')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function retornar() {
        navigate("/temas")
    }

    async function deletarTema() {

        setIsLoading(true)

        try {
            await deletar(`/temas/${id}`, {
                headers: { 'Authorization': token }
            })
            alert('Tema excluído com sucesso!')
        } catch (error: any) {
            if (error.toString().includes('403')) {
                alert('O token expirou.')
                handleLogout
            } else {
                alert('Erro ao excluir tema.')
            }
        }

        setIsLoading(false)
        retornar()

    }

    return (
        <div className="w-1/3 mx-auto">
            <h1 className='text-4xl text-center my-4'>Deletar Tema</h1>
            <p className='text-center mb-4'>Você tem certeza que deseja apagar o tema a seguir?</p>
            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <h1 className='py-2 px-6 bg-violet-600 text-white font-bold text-2xl'>
                    Tema
                </h1>
                <p className='p-8 text-3xl bg-slate-100 h-full font-semibold'>{tema.descricao}</p>
                <div className="flex bg-slate-500 justify-center font-semibold">
                    <button className="flex justify-center text-violet-600 bg-white border-white border-solid px-4 
                    py-2 hover:bg-violet-600  hover:text-white w-full"
                        onClick={retornar}>Não</button>

                    <button className="rounded text-white border-white border-solid px-4 py-2 
                    hover:bg-violet-600 w-full flex justify-center"
                        onClick={deletarTema}>
                        {isLoading ?
                            <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            /> :
                            <span>Sim</span>
                        }
                    </button>
                </div>
            </div>
        </div>
    )

}

export default DeletarTema