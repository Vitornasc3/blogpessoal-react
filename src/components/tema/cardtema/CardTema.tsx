import { Link } from "react-router-dom"
import Tema from "../../../models/Tema"

interface CardTemaProps {
    tema: Tema
}

function CardTema({ tema }: CardTemaProps) {
    return (
        <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
            <header className='py-2 px-6 bg-violet-600 text-white font-bold text-2xl'>
                Tema
            </header>
            <p className='p-6 text-2xl bg-slate-100 h-full font-semibold'>{tema.descricao}</p>

            <div className="flex bg-slate-500 justify-center font-semibold">
                <Link to={`/editartema/${tema.id}`} className="flex justify-center text-violet-600 bg-white border-white border-solid px-4 py-2 hover:bg-violet-600  hover:text-white w-full">
                    <button>Editar</button>
                </Link>

                <Link to={`/deletartema/${tema.id}`} className="rounded text-white border-white border-solid px-4 py-2 hover:bg-violet-600
                 w-full flex justify-center">
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    )
}

export default CardTema