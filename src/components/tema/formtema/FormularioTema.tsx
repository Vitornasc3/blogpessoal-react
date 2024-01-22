import { useState, useContext, useEffect, ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Tema from "../../../models/Tema";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { RotatingLines } from "react-loader-spinner";

function FormularioTema() {

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

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setTema({
            ...tema,
            [e.target.name]: e.target.value
        })

    }

    function retornar() {
        navigate("/temas")
    }

    async function gerarNovoTema(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        setIsLoading(true)

        if (id !== undefined) {
            try {
                await atualizar(`/temas`, tema, setTema, {
                    headers: { 'Authorization': token }
                })
                alert('Tema atualizado com sucesso!')
            } catch (error: any) {
                if (error.toString().includes('403')) {
                    alert('O token expirou.')
                    handleLogout
                } else {
                    alert('Erro ao atualizar o tema.')
                }
            }
        } else {
            try {
                await cadastrar(`/temas`, tema, setTema, {
                    headers: { 'Authorization': token }
                })
                alert('Tema cadastrado com sucesso!')
            } catch (error: any) {
                if (error.toString().includes('403')) {
                    alert('O token expirou.')
                    handleLogout
                } else {
                    alert('Erro ao cadastrar o tema.')
                }
            }
        }
        setIsLoading(false)
        retornar()

    }

    return (
        <div className="flex flex-col items-center p-10 font-semibold">
            <h1 className="text-4xl">
                {id === undefined ? 'Cadastrar Tema' : 'Editar Tema'}
            </h1>
            <form className="flex gap-4 flex-col p-6 text-lg w-2/4 items-center justify-center" onSubmit={gerarNovoTema}>
                <div className="flex flex-col w-full gap-2">
                    <label>Descrição do Tema</label>
                    <input id="descricao" name="descricao" className="border-2 border-solid p-2 hover:border-gray-400" type="text" placeholder="Descreva aqui seu tema"
                        value={tema.descricao}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />
                </div>

                <button type="submit" className="flex justify-center text-white p-2 bg-gray-600 border-solid border-2 border-white hover:bg-violet-600 w-1/2 rounded text-lg">
                    {isLoading ?
                        <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        /> :
                        <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>
                    }
                </button>
            </form>

        </div>
    )
}

export default FormularioTema