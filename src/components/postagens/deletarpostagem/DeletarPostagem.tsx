import { useContext, useEffect, useState } from "react"
import { RotatingLines } from "react-loader-spinner"
import { useNavigate, useParams } from "react-router-dom";
import Postagem from "../../../models/Postagem";
import { AuthContext } from "../../../contexts/AuthContext";
import { buscar, deletar } from "../../../services/Service";

function DeletarPostagem() {

    const [postagem, setPostagem] = useState<Postagem>({}as Postagem)

    const { id } = useParams<{id: string}>()

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { usuario, handleLogout } = useContext(AuthContext);

    const token = usuario.token;

    const navigate = useNavigate();

    async function buscarPorId(id: string) {
        try {
            await buscar(`/postagens/${id}`, setPostagem, {
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
            navigate('/')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function retornar() {
        navigate("/postagens")
    }

    async function deletarPostagem() {

        setIsLoading(true)

        try {
            await deletar(`/postagens/${id}`, {
                headers: { 'Authorization': token }
            })
            alert('Postagem excluída com sucesso!')
        } catch (error: any) {
            if (error.toString().includes('403')) {
                alert('O token expirou.')
                handleLogout
            } else {
                alert('Erro ao excluir postagem.')
            }
        }

        setIsLoading(false)

        retornar()

    }

    return (
        <div className="w-1/3 mx-auto flex flex-col gap-4">
            <h1 className='text-4xl text-center my-4'>Deletar Postagem</h1>
            <p className='text-center mb-4'>Você tem certeza que deseja excluir a postagem a seguir?</p>
            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <h1 className='py-2 px-6 bg-violet-600 text-white font-bold text-2xl'>Postagem</h1>
                <div className="flex flex-col gap-5 bg-slate-100 py-5">
                    <p className='px-8 text-2xl font-semibold'>{postagem.titulo}</p>
                    <p className='px-8 text-xl'>{postagem.texto}</p>
                </div>
                <div className="flex bg-slate-500 justify-center font-semibold text-lg">
                    <button className="flex justify-center text-violet-600 bg-white border-white border-solid px-4 
                    py-2 hover:bg-violet-600  hover:text-white w-full"
                        onClick={retornar}>Não</button>

                    <button className="rounded text-white border-white border-solid px-4 py-2 
                    hover:bg-violet-600 w-full flex justify-center"
                        onClick={deletarPostagem}>
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

export default DeletarPostagem